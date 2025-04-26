"use client"
import CameraScan from '@/components/CameraScan'
import UploadScan from '@/components/GalleryScan'
import React, { useState } from 'react'

function FaceScan() {
   const [showCameraPrompt, setShowCameraPrompt] = useState(false);
  const [showUploadPrompt, setShowUploadPrompt] = useState(false);

  return (
    <div className="w-full min-h-screen grid grid-cols-2 relative">
      <CameraScan
        gridPlace={showCameraPrompt ? "order-first z-50" : "order-first z-0"}
        showCameraPrompt={showCameraPrompt}
        setShowCameraPrompt={setShowCameraPrompt}
      />
      <UploadScan
        gridPlace={showUploadPrompt ? "order-last z-50" : "order-last z-0"}
        showUploadPrompt={showUploadPrompt}
        setShowUploadPrompt={setShowUploadPrompt}
      />
    </div>
  );
}


export default FaceScan