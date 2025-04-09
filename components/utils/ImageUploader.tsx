"use client";

import { submitUserImage } from "@/actions/actions";
import React, { ChangeEvent, useRef, useState } from "react";
import UploadIcon from "../ui/GalleryIcon";
import FloatInfo from "../ui/FloatInfo";

type UploadStatus = "idle" | "uploading" | "success" | "error";

function ImageUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>("idle");
  const base64Ref = useRef<File | null>(null)
  const base64StringRef = useRef<string | null>(null)

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const imageFile = e.target.files[0];
      setFile(e.target.files[0]);
      base64StringRef.current = await handleImageToBase64(imageFile);
    }
  }

  function handleImageToBase64(file: File): Promise<string> {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === "string") {
          resolve(reader.result.split(",")[1]); // Remove metadata
        }
      };

      reader.readAsDataURL(file);
    });
  }

 async function handleFileUpload() {
  console.log("handleFileUpload fired")
   if (!file || !base64StringRef.current) return;
   setStatus("uploading");

   try {
     const response = await submitUserImage(base64StringRef.current);
     console.log("Upload success:", response);
     setStatus("success");
   } catch (error) {
     console.error("Upload error:", error);
     setStatus("error");
   }
   console.log(status)
 }


  return (
    <div  className="z-50 relative">
      <label htmlFor="image-upload"
        className="cursor-pointer">
          <UploadIcon />
      </label>
      <input id="image-upload" type="file" 
      accept="image/*" onChange={handleFileChange} />
      {file && (
        <FloatInfo />
        // <div className="">
        //   <p>Image name: {file.name}</p>
        //   <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
        //   <p>Type: {file.type}</p>
        // </div>
      )}

      {/* {file && status !== "uploading" && <button className="cursor-pointer border" onClick={handleFileUpload}>Upload</button>} */}

      {status === "uploading" && <p>⏳ Uploading...</p>}
      {status === "success" && <p>✅ Upload successful!</p>}
      {status === "error" && <p>❌ Upload failed. Try again.</p>}
    </div>
  );
}

export default ImageUploader;
