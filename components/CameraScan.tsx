"use client";

import CameraIcon from "./ui/CameraIcon";
import ImageScanWrapper from "./ImageScanWrapper";
import FloatInfo from "./ui/FloatInfo";
import { useState } from "react";

function CameraScan({ gridPlace }: { gridPlace: string }) {
  const [showPrompt, setShowPrompt] = useState(false);

  const message = showPrompt ? (
    <FloatInfo
      message={<p>Allow A.I. to access your camera</p>}
      buttons={[
        { label: "Deny", onClick: () => setShowPrompt(false) },
        {
          label: "Allow",
          onClick: () => {
            setShowPrompt(false);
            console.log("CameraCaptureInput confirmed");
            // Trigger further logic (like enabling webcam)
          },
        },
      ]}
    />
  ) : (
    <p>Allow A.I. to scan via camera</p>
  );

  return (
    <ImageScanWrapper
      gridPlace={gridPlace}
      iconCamera={<CameraIcon />}
      messageCamera={message}
      triggerCameraPrompt={() => setShowPrompt(true)}
    />
  );
}

export default CameraScan;
