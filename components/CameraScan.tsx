"use client";

import CameraIcon from "./ui/CameraIcon";
import ImageScanWrapper from "./ImageScanWrapper";
import FloatInfo from "./ui/FloatInfo";

import { useRouter } from "next/navigation";

function CameraScan({
  gridPlace,
  showCameraPrompt,
  setShowCameraPrompt,
}: {
  gridPlace: string;
  showCameraPrompt: boolean;
  setShowCameraPrompt: (show: boolean) => void;
}) {
  const router = useRouter();

  const message = showCameraPrompt ? (
    <FloatInfo
      message={<p>Allow A.I. to access your camera</p>}
      buttons={[
        { label: "Deny", onClick: () => setShowCameraPrompt(false) },
        {
          label: "Allow",
          onClick: () => {
            setShowCameraPrompt(false);
            console.log("CameraCaptureInput confirmed");
            router.push("/analysis");
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
      triggerCameraPrompt={() => setShowCameraPrompt(true)}
      showCameraPrompt={showCameraPrompt}
    />
  );
}

export default CameraScan;
