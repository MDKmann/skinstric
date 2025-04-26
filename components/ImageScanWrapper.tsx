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
  onFileSelect?: (file: File) => void;
  showUploadPrompt?: boolean;
  showCameraPrompt?: boolean;
}

function ImageScanWrapper({
  gridPlace,
  iconCamera,
  iconGallery,
  messageCamera,
  messageGallery,
  triggerCameraPrompt = () => {},
  showCameraPrompt,
  showUploadPrompt,
}: Props) {
  const { handleFileSelect } = useImageUploader();

  // useGSAP(() => {
  //   const tl = gsap.timeline({});
  //   tl.fromTo(
  //     ".dotted-square",
  //     {
  //       transform: "rotate(45deg)",
  //     },
  //     {
  //       duration: 0.5,
  //       transform: "rotate(30deg)",
  //       ease: "power1.inOut",
  //     }
  //   ).fromTo(
  //     ".dotted__square--2",
  //     {
  //       transform: "rotate(45deg)",
  //     },
  //     {
  //       duration: 0.5,
  //       transform: "rotate(60deg)",
  //       ease: "power1.inOut",
  //     }
  //   );
  // }, []);

 useGSAP(
   () => {
     const tl = gsap.timeline({
       defaults: { duration: 0.5, ease: "power2.out" },
     });

     if (showCameraPrompt) {
       tl.to(
         "#gallery-section",
         {
           opacity: 0.5,
           zIndex: 0,
           onStart: () => {
             gsap.set("#gallery-section", {
               pointerEvents: "none",
               cursor: "not-allowed",
             });
           },
         },
         0
       )
         .to("#gallery-message", { zIndex: 0 }, 0)
         .to(
           "#camera-section",
           {
             opacity: 1,
             zIndex: 50,
             onStart: () => {
               gsap.set("#camera-section", {
                 pointerEvents: "auto",
                 cursor: "pointer",
               });
             },
           },
           0
         )
         .to("#camera-message", { zIndex: 50 }, 0);
     } else if (showUploadPrompt) {
       tl.to(
         "#camera-section",
         {
           opacity: 0.5,
           zIndex: 0,
           onStart: () => {
             gsap.set("#camera-section", {
               pointerEvents: "none",
               cursor: "not-allowed",
             });
           },
         },
         0
       )
         .to("#camera-message", { zIndex: 0 }, 0)
         .to(
           "#gallery-section",
           {
             opacity: 1,
             zIndex: 50,
             onStart: () => {
               gsap.set("#gallery-section", {
                 pointerEvents: "auto",
                 cursor: "pointer",
               });
             },
           },
           0
         )
         .to("#gallery-message", { zIndex: 50 }, 0);
     } else {
       // Reset when neither active
       tl.to(
         "#gallery-section",
         {
           opacity: 1,
           onStart: () => {
             gsap.set("#gallery-section", {
               pointerEvents: "auto",
               cursor: "pointer",
             });
           },
         },
         0
       ).to(
         "#camera-section",
         {
           opacity: 1,
           onStart: () => {
             gsap.set("#camera-section", {
               pointerEvents: "auto",
               cursor: "pointer",
             });
           },
         },
         0
       );
     }
   },
   { dependencies: [showCameraPrompt, showUploadPrompt] }
 );


  return (
    <div className={`relative w-full h-full ${gridPlace}`}>
      <div className="scan__square--container">
        <div className="">
          {/* Gallery input */}
          <div id="gallery-section" className="relative">
            <ImageUploadInput
              iconGallery={iconGallery}
              onFileChange={handleFileSelect}
            />

            <div
              id="gallery-message"
              className=" uppercase absolute -translate-x-70 translate-y-20 w-40 text-right"
            >
              {messageGallery}
            </div>
          </div>

          {/* Camera trigger */}
          <div id="camera-section" className="relative">
            <CameraCaptureInput
              iconCamera={iconCamera}
              onClick={triggerCameraPrompt}
            />

            <div
              id="camera-message"
              className=" uppercase absolute translate-x-30 -translate-y-30 w-40 text-left"
            >
              {messageCamera}
            </div>
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
