"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import { useImageUploaderStore } from "../hooks/useScanStore";
import { useSubmitStore } from "../hooks/useSubmitStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

import cameraGuide from "../../public/ellipse-guide.svg";
import cameraIcon from "../../public/fullCameraIcon.svg";
import retakeIcon from "../../public/fullRetakeIcon.png";
import timerIcon from "../../public/fullTimerIcon.svg";

const OFFSET_Y = 200;

function CameraCapturePage() {
  const webcamRef = useRef<Webcam>(null);
  const [timerPanelOpen, setTimerPanelOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const { setStatus, setBase64, reset } = useImageUploaderStore.getState();
  const setSubmitHandlerFn = useSubmitStore(
    (state) => state.setSubmitHandlerFn
  );
  const callSubmitHandlerFn = useSubmitStore(
    (state) => state.callSubmitHandlerFn
  );

  const [viewport, setViewport] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1920,
    height: typeof window !== "undefined" ? window.innerHeight : 1080,
  });

  const [faceBox, setFaceBox] = useState({ x: 960, y: 540 });
  const [smoothFaceBox, setSmoothFaceBox] = useState({ x: 960, y: 540 });

  const videoConstraints = {
    width: viewport.width,
    height: 1080,
    facingMode: "user",
    screenshotQuality: 1,
  };

  const flashScreen = () => {
    const flash = document.getElementById("flash");
    if (flash) {
      flash.style.opacity = "1";
      setTimeout(() => {
        flash.style.opacity = "0";
      }, 100);
    }
  };

  const capture = useCallback(() => {
    flashScreen();
    const src = webcamRef.current?.getScreenshot();
    if (src) {
      setImageSrc(src);
      setBase64(src);
      setStatus("selected");
    }
  }, [setBase64, setStatus]);

  const retake = () => {
    setImageSrc(null);
    reset();
  };

  const handleTimerButton = () => {
    setTimerPanelOpen((prev) => !prev);
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    if (timerPanelOpen) {
      tl.to("#timerPanel", {
        width: "8vw",
        opacity: 1,
        display: "grid",
        duration: 1,
        ease: "power4.out",
      });
    } else {
      tl.to("#timerPanel", {
        width: "0",
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      }).to("#timerPanel", {
        display: "none",
      });
    }
  }, [timerPanelOpen]);

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      console.log("FaceAPI loaded");
    };
    loadModels();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.code === "Space") {
        event.preventDefault();
        if (!imageSrc) {
          capture();
        } else {
          callSubmitHandlerFn();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [imageSrc, capture, callSubmitHandlerFn]);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (webcamRef.current?.video?.readyState === 4) {
        const video = webcamRef.current.video as HTMLVideoElement;
        const detection = await faceapi.detectSingleFace(
          video,
          new faceapi.TinyFaceDetectorOptions()
        );
        if (detection) {
          const { x, y, width, height } = detection.box;
          setFaceBox({ x: x + width / 2, y: y + height / 2 });
        }
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const lerp = (start: number, end: number, t: number) =>
      start + (end - start) * t;
    const interval = setInterval(() => {
      setSmoothFaceBox((prev) => ({
        x: lerp(prev.x, faceBox.x, 0.2),
        y: lerp(prev.y, faceBox.y, 0.2),
      }));
    }, 50);

    return () => clearInterval(interval);
  }, [faceBox]);

  // ✅ Correct dynamic viewport tracking
  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Flash */}
      <div
        id="flash"
        className="absolute top-0 left-0 w-full h-full bg-white opacity-0 pointer-events-none z-50"
      />

      {/* Blurred Background Layer */}
      <div className="absolute inset-0 overflow-hidden"></div>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt="webcam"
          height={960}
          width={viewport.width}
          className="w-full h-full object-cover blur-lg scale-110"
          style={{ transform: "scaleX(-1)" }}
        />
      ) : (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/webp"
          videoConstraints={videoConstraints}
          className="w-full h-full object-cover blur-lg scale-110"
        />
      )}

      {/* Clear Foreground Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none blurred">
        <div
          className="absolute w-full h-full"
          style={{
            WebkitMaskImage: `radial-gradient(
        ellipse 25% 55% at ${viewport.width - smoothFaceBox.x}px ${smoothFaceBox.y - OFFSET_Y}px,
        rgba(205, 206, 204, 1) 0%,
        rgba(205, 206, 204, 1) 60%,
        transparent 10%
      )`,
            maskImage: `radial-gradient(
        ellipse 25% 55% at ${viewport.width - smoothFaceBox.x}px ${smoothFaceBox.y - OFFSET_Y}px,
        rgba(205, 206, 204, 1) 0%,
        rgba(205, 206, 204, 1) 60%,
        transparent 10%
      )`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            zIndex: 40,
          }}
        >
          {imageSrc ? (
            <div
              style={{
                position: "absolute",
                left: `${(viewport.width - smoothFaceBox.x) / 40}px`,
                top: `${smoothFaceBox.y / OFFSET_Y - 60}px`,
                transform: "scaleX(-1)",
                width: "auto",
                height: "auto",
              }}
            >
              <Image
                src={imageSrc}
                alt="Captured"
                width={viewport.width}
                height={1080}
                className="object-cover scale-100"
              />
            </div>
          ) : (
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/webp"
              videoConstraints={videoConstraints}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="z-50 absolute top-0 right-0 bottom-0 left-0 grid grid-cols-3 ">
        <div className=" pl-8 flex items-center justify-baseline">
          <div
            id="timerContainer"
            className="gridTest items-center bg-lightsilver rounded-full uppercase h-fit"
          >
            <button
              onClick={handleTimerButton}
              className="cursor-pointer whitespace-nowrap"
            >
              <Image
                src={timerIcon}
                alt="camera timer"
                className=""
                style={{
                  height: "auto",
                  width: "auto",
                }}
              />
            </button>
            <div
              id="timerPanel"
              style={{ opacity: 0, width: 0, height: 0, display: "none" }}
              className="items-center grid-cols-3"
            >
              <span className="text-center ">off</span>
              <span className="text-center ">3s</span>
              <span className="text-center ">10s</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={cameraGuide}
            alt="camera guide"
            className=""
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        {imageSrc ? (
          <button
            onClick={retake}
            className=" pr-8 flex items-center justify-end uppercase"
          >
            <div className="cursor-pointer flex items-center gap-2 py-2 pl-2">
              <span className="text-eerie">retake</span>
              <div className=" flex justify-center items-center">
                <Image
                  src={retakeIcon}
                  alt="camera capture"
                  className=""
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </button>
        ) : (
          <button
            onClick={capture}
            className=" pr-8 flex items-center justify-end uppercase"
          >
            <div className="cursor-pointer flex items-center gap-2 py-2 pl-2">
              <span className="text-eerie">Take Picture</span>
              <div className="flex justify-center items-center">
                <Image
                  src={cameraIcon}
                  alt="camera capture"
                  className=""
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </button>
        )}
      </div>
    </>
  );
}

export default CameraCapturePage;
