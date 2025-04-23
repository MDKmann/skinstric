"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Image from "next/image";
import cameraGuide from "../../public/ellipse-guide.svg";
import cameraTracedIcon from "../../public/camera-trace-icon.svg";
import timerTracedIcon from "../../public/timer-trace-icon.svg";

const WebcamComponent = () => <Webcam />;

function CameraCapturePage() {
  const videoConstraints = {
    width: 1920,
    height: 960,
    facingMode: "user",
  };
  const handleCapture = () => {};
  const webcamRef = useRef(null);
  const previewImageRef = useRef(null);
  const previewImage = previewImageRef.current;
  const [imageSrc, setImageSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef?.current?.getScreenshot();
    setImageSrc(imageSrc);
  }, [webcamRef, setImageSrc]);

  useEffect(() => {
    if (imageSrc !== null) {
      previewImageRef.current = (
        <Image
          src={imageSrc}
          alt="camera capture preview image"
          className=""
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      );
    }
  }, [imageSrc]);

  return (
    <>
      <div className="z-50 absolute top-0 right-0 bottom-0 left-0 grid grid-cols-3 ">
        <div className="border-2 bg-amber-300 pl-8 flex items-center justify-baseline">
          <div className="flex items-center gap-2 bg-lightsilver rounded-full pr-4">
            <button className="bg-quicksilver p-2 rounded-full flex justify-center items-center">
              <Image
                src={timerTracedIcon}
                alt="camera timer"
                className="size-6"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </button>
            <div className="grid grid-cols-3 gap-2">
              <span>off</span>
              <span>3s</span>
              <span>10s</span>
            </div>
          </div>
        </div>
        <div className="border-2 flex items-center justify-center">
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
        <button
          onClick={capture}
          className="border-2 pr-8 flex items-center justify-end"
        >
          <div className="cursor-pointer flex items-center gap-2 py-2 pl-2">
            <span className="text-eerie">Take Picture</span>
            <div className="bg-lotion border-1  border-quicksilver outline-2 outline-lotion p-3 rounded-full flex justify-center items-center">
              <Image
                src={cameraTracedIcon}
                alt="camera capture"
                className="size-6"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </button>
      </div>
      {imageSrc === null ? (
        <Webcam
          audio={false}
          height={960}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1920}
          videoConstraints={videoConstraints}
        />
      ) : (
        <> {previewImage.innerHTML}</>
      )}
    </>
  );
}

export default CameraCapturePage;
