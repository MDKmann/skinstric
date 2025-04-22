"use client";

import { ReactNode } from "react";

interface Props {
  iconCamera: ReactNode;
  onClick: () => void;
  id?: string;
}

function CameraCaptureInput({ iconCamera, onClick, }: Props) {



  return (
    <div
      id="start-camera"
      className="cursor-pointer relative z-50 inline-block"
      onClick={onClick}
    >
      {iconCamera}
    </div>
  );
}

export default CameraCaptureInput;
