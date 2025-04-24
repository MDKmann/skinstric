"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Image from "next/image";
import cameraGuide from "../../public/ellipse-guide.svg";
import cameraIcon from "../../public/fullCameraIcon.svg";
import timerIcon from "../../public/fullTimerIcon.svg";
import retakeIcon from "../../public/fullRetakeIcon.png";

import { useImageUploaderStore } from "../hooks/useScanStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const WebcamComponent = () => <Webcam />;

function CameraCapturePage() {
  const videoConstraints = {
    width: 1920,
    height: 1080,
    facingMode: "user",
    screenshotQuality: 1,
  };
  const webcamRef = useRef(null);
  const [timerPanelOpen, setTimerPanelOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const { setStatus, setBase64, reset } = useImageUploaderStore.getState();

  const capture = useCallback(() => {
    const imageSrc =
      webcamRef.current &&
      (webcamRef.current as unknown as Webcam).getScreenshot();
    setImageSrc(imageSrc);
    setBase64(imageSrc);
    setStatus("selected");
  }, [webcamRef, setImageSrc, setBase64, setStatus]);

  const retake = () => {
    setImageSrc(null);
    reset();
  };

  const handleTimerButton = () => {
    setTimerPanelOpen(!timerPanelOpen);
    console.log("Timer button clicked");
  };

  useGSAP(() => {
    if (!timerPanelOpen) {
      const tlOpen = gsap.timeline({});
      tlOpen.to("#timerPanel", {
        display: "grid",
        height: "100%",
        duration: 0.5,
        ease: "power4.out",
        delay: 0.25,
      });
      tlOpen.to("#timerPanel", {
        width: "8vw",
        opacity: "100%",
        duration: 1,
        ease: "ease",
        delay: 0.25,
      });
    }
    if (timerPanelOpen) {
      const tlClose = gsap.timeline({});
      tlClose.to("#timerPanel", {
        width: "0",
        opacity: "0",
        duration: 1,
        ease: "ease",
        delay: 0.25,
      });
      tlClose.to("#timerPanel", {
        display: "none",
        duration: 0.5,
        ease: "power4.out",
        delay: 0.25,
      });
    }
  }, [timerPanelOpen]);

  return (
    <>
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
      <div className="blurred z-40"></div>
      <div className="absolute flex justify-center items-center w-full h-full">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="webcam"
            height={960}
            width={1920}
            className=""
            style={{ transform: "scaleX(-1)" }}
          />
        ) : (
          <Webcam
            audio={false}
            // height={960}
            ref={webcamRef}
            screenshotFormat="image/webp"
            // width={1920}
            imageSmoothing={true}
            videoConstraints={videoConstraints}
          />
        )}
      </div>
    </>
  );
}

export default CameraCapturePage;
