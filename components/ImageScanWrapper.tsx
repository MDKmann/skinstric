"use client";

import React, { ReactNode } from "react";
import ImageUploadInput from "./ui/ImageUploadInput";
import CameraCaptureInput from "./ui/CameraCaptureInput";
import useImageUploader from "@/app/hooks/useImageUploader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface Props {
  iconCamera?: ReactNode;
  iconGallery?: ReactNode;
  gridPlace: string;
  messageCamera?: ReactNode;
  messageGallery?: ReactNode;
  triggerCameraPrompt?: () => void;
  onFileSelect?: (file: File) => void; // used by GalleryScan
}

function ImageScanWrapper({
  gridPlace,
  iconCamera,
  iconGallery,
  messageCamera,
  messageGallery,
  triggerCameraPrompt,
}: Props) {
    const { imageInfo, handleFileSelect, handleFileUpload, reset } =
      useImageUploader();

  useGSAP(() => {
    const tl = gsap.timeline({});
    tl.fromTo(".dotted-square", {
      transform: "rotate(30deg)",
    }, {
      duration: 0.5,
     transform: "rotate(45deg)",
      ease: "power1.inOut",
    });

    tl.fromTo(".dotted__square--2", {
      transform: "rotate(60deg)",
    }, {
      duration: 0.5,
      transform: "rotate(45deg)",
      ease: "power1.inOut",
    });
  },[]);

  return (
    <div className={`relative w-full h-full ${gridPlace}`}>
      <div className="scan__square--container">
        <div className="">
          {/* Gallery input */}
          <ImageUploadInput
            iconGallery={iconGallery}
            onFileChange={handleFileSelect}
          />

          <div className=" z-50 uppercase absolute -translate-x-70 translate-y-20 w-40 text-right">
            {messageGallery}
          </div>

          {/* Camera trigger */}
          <CameraCaptureInput
            iconCamera={iconCamera}
            onClick={triggerCameraPrompt}
          />

          <div className="z-40 uppercase absolute translate-x-30 -translate-y-30 w-40 text-left">
            {messageCamera}
          </div>
        </div>

        <span className="dotted-square" />
        <span className="dotted__square--1" />
        <span className="dotted__square--2" />
      </div>
    </div>
  );
}

export default ImageScanWrapper;
