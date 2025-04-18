"use client";

import React, { ReactNode, useState } from "react";
import useImageUploader from "../app/hooks/useImageUploader";
import ImageUploadInput from "./ui/ImageUploadInput";
import FloatInfo from "./ui/FloatInfo";

interface Props {
  icon: ReactNode;
  gridPlace: string;
  messageCamera?: ReactNode;
  messageGallery?: ReactNode;
}

function ImageScanLogic({ icon, gridPlace, messageCamera, messageGallery}: Props) {
  const { imageInfo, handleFileSelect, handleFileUpload, reset } =
    useImageUploader();
    const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className={`relative w-full h-full ${gridPlace}`}>
      <div className="scan__square--container">
        <div className="w-full h-full">
          <ImageUploadInput icon={icon} onFileChange={handleFileSelect} />
          {!imageInfo && (
            <>
              <div className="uppercase absolute translate-x-30 -translate-y-30 w-40 text-left ">
                {messageCamera}
              </div>
              <div className="uppercase absolute -translate-x-70 translate-y-20 w-40 text-right ">
                {messageGallery}
              </div>
            </>
          )}
        </div>

        {imageInfo && (
          <FloatInfo
            message={
              showSuccess ? (
                <p> Upload Successful</p>
              ) : (
                <>
                  <p> Selected: {imageInfo.name} </p>
                  <p> Size: {imageInfo.size} KB</p>
                  <p> Type: {imageInfo.type}</p>
                </>
              )
            }
            buttons={[
              { label: "Deny", onClick: reset },
              {
                label: "Allow",
                onClick: async () => {
                  await handleFileUpload();
                  setShowSuccess(true);
                  setTimeout(() => {
                    reset();
                    setShowSuccess(false);
                  }, 1200);
                },
              },
            ]}
          />
        )}

        <span className="dotted-square" />
        <span className="dotted__square--1" />
        <span className="dotted__square--2" />
      </div>
    </div>
  );
}

export default ImageScanLogic;
