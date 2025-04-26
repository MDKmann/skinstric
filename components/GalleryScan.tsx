"use client";

import GalleryIcon from "./ui/GalleryIcon";
import ImageScanWrapper from "./ImageScanWrapper";
import FloatInfo from "./ui/FloatInfo";
import useImageUploader from "../app/hooks/useImageUploader";
import { useImageUploaderStore } from "@/app/hooks/useScanStore";
import { useEffect } from "react";

function GalleryScan({
  gridPlace,
  showUploadPrompt,
   setShowUploadPrompt,
}: {
  gridPlace: string;
  showUploadPrompt: boolean;
   setShowUploadPrompt: (show: boolean) => void;
}) {
  const { imageInfo, status, reset } = useImageUploaderStore();
  const { handleFileUpload } = useImageUploader();

  useEffect(() => {
    if (imageInfo) {
      setShowUploadPrompt(true);
    }
  }, [imageInfo]);

  const messageGallery =
    status === "selected" && imageInfo ? (
      <div className="absolute -left-[140%]">
        <FloatInfo
          message={
            <>
              <p>Selected: {imageInfo.name}</p>
              <p>Size: {imageInfo.size}</p>
              <p>Type: {imageInfo.type}</p>
            </>
          }
          buttons={[
            {
              label: "Deny",
              onClick: () => {
                setShowUploadPrompt(false);
                reset();
              },
            },
            {
              label: "Allow",
              onClick: async () => {
                await handleFileUpload();
                reset();
              },
            },
          ]}
        />
      </div>
    ) : (
      <p>Allow A.I. to access gallery</p>
    );

  return (
    <ImageScanWrapper
      gridPlace={gridPlace}
      iconGallery={<GalleryIcon />}
      messageGallery={messageGallery}
      showUploadPrompt={showUploadPrompt}
    />
  );
}

export default GalleryScan;
