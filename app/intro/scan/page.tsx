import CameraScan from '@/components/CameraScan'
import BackButton from '@/components/ui/BackButton';
import UploadScan from '@/components/GalleryScan'
import React from 'react'

function faceScan() {
  return (
    <div className="w-full h-full grid grid-cols-2">
      <CameraScan gridPlace="order-first" />
      <UploadScan gridPlace="order-last" />
      <div className="pl-small left-button absolute bottom-10">
        <BackButton />
      </div>
    </div>
  );
}

export default faceScan