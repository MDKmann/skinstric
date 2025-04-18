import CameraIcon from "./ui/CameraIcon";
import ImageScanLogic from "./ImageScanLogic";

function CameraScan({ gridPlace }: { gridPlace: string }) {
  return (
    <ImageScanLogic
      gridPlace={gridPlace}
      icon={<CameraIcon />}
      messageCamera={<p>Allow A.I. to scan via camera</p>}
    />
  );
}

export default CameraScan;
