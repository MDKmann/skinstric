// "use client";

// import GalleryIcon from "./ui/GalleryIcon";
// import ImageScanWrapper from "./ImageScanWrapper";
// import FloatInfo from "./ui/FloatInfo";
// import { useEffect, useState } from "react";
// import useImageUploader from "../app/hooks/useImageUploader";

// function GalleryScan({ gridPlace }: { gridPlace: string }) {
//   const [showOverlay, setShowOverlay] = useState(true);
//   const { imageInfo, handleFileUpload, reset } =
//     useImageUploader();

//   useEffect(() => {
//     if (imageInfo) setShowOverlay(true);
//   }, [imageInfo]);

//   const messageGallery =
//     imageInfo && showOverlay ? (
//       <FloatInfo
//         message={
//           <>
//             <p>Selected: {imageInfo.name}</p>
//             <p>Size: {imageInfo.size}</p>
//             <p>Type: {imageInfo.type}</p>
//           </>
//         }
//         buttons={[
//           {
//             label: "Deny",
//             onClick: () => {
//               setShowOverlay(false);
//               reset();
//             },
//           },
//           {
//             label: "Allow",
//             onClick: async () => {
//               await handleFileUpload();
//               setShowOverlay(false);
//               reset();
//             },
//           },
//         ]}
//       />
//     ) : (
//       <p>Allow A.I. to access gallery</p>
//     );

//   return (
//     <ImageScanWrapper
//       gridPlace={gridPlace}
//       iconGallery={<GalleryIcon />}
//       messageGallery={messageGallery}
//     />
//   );
// }

// export default GalleryScan;
"use client";

import GalleryIcon from "./ui/GalleryIcon";
import ImageScanWrapper from "./ImageScanWrapper";
import FloatInfo from "./ui/FloatInfo";
import useImageUploader from "../app/hooks/useImageUploader";
import { useImageUploaderStore } from "@/app/hooks/useScanStore";
import { useEffect, useState } from "react";

function GalleryScan({ gridPlace }: { gridPlace: string }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const { imageInfo, status, reset } = useImageUploaderStore();
  const { handleFileUpload } = useImageUploader();

  useEffect(() => {
    if (imageInfo) {
      setShowOverlay(true);
    }
  }, [imageInfo]);

  const messageGallery =
    status === "selected" && imageInfo ? (
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
              setShowOverlay(false);
              reset();
            }
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
    ) : (
      <p>Allow A.I. to access gallery</p>
    );

  return (
    <ImageScanWrapper
      gridPlace={gridPlace}
      iconGallery={<GalleryIcon />}
      messageGallery={messageGallery}
    />
  );
}

export default GalleryScan;
