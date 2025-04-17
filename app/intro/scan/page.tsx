import CameraScan from '@/components/CameraScan'
import UploadScan from '@/components/GalleryScan'
import React from 'react'

function faceScan() {
  return (
    <div className="w-full  min-h-screen  grid grid-cols-2 ">
      <CameraScan gridPlace="order-first" />
      <UploadScan gridPlace="order-last" />
    </div>
  );
}

export default faceScan