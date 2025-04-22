"use client";

import { ChangeEvent, ReactNode } from "react";

interface Props {
  onFileChange: (file: File) => void;
  iconGallery: ReactNode;

}

function ImageUploadInput({ onFileChange, iconGallery}: Props) {

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
     console.log("handleChange Input clicked");
    if (e.target.files?.[0]) {
      console.log("handleChange Input clicked");
      onFileChange(e.target.files[0]); 
      e.target.value = "";
    };
  }

  return (
    <label
      htmlFor="image-upload"
      className="cursor-pointer relative z-50 inline-block"
    >
      {iconGallery}
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleChange}
        hidden
      />
    </label>
  );
}

export default ImageUploadInput;
