import React from "react";
import ImageScanLogic from "./ImageScanLogic";
import GalleryIcon from "./ui/GalleryIcon";

interface Props {
  gridPlace: string;
}

function GalleryScan({ gridPlace }: Props) {
  return <ImageScanLogic gridPlace={gridPlace} icon={<GalleryIcon />} messageGallery={<p>Allow A.I. to access gallery</p>} />;
}

export default GalleryScan;
