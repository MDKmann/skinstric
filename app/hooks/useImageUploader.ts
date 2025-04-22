// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { submitUserImage } from "@/actions/actions";

// type UploadStatus = "idle" | "selected" | "uploading" | "success" | "error";

// export default function useImageUploader() {
//   const router = useRouter();
//   const [file, setFile] = useState<File | null>(null);
//   const [status, setStatus] = useState<UploadStatus>("idle");
//   const [base64, setBase64] = useState<string | null>(null);

//   async function handleFileSelect(file: File) {
//     setFile(file);
//     const encoded = await toBase64(file);
//     setBase64(encoded);
//   }

//   async function handleFileUpload() {
   

//     if (!base64) return;

//     setStatus("uploading");
//     try {
//       const response = await submitUserImage(base64);
//       const storedScanResults = localStorage.setItem("storedScanResults", JSON.stringify(response))
//       setStatus("success");
//       console.log("Submitted:", response);
//       router.push("/analysis");
//     } catch {
//       setStatus("error");
//     }
//   }

//   function reset() {
//     setFile(null);
//     setBase64(null);
//     setStatus("idle");
//   }

//   const imageInfo = file
//     ? {
//         name: file.name,
//         size: (file.size / 1024).toFixed(2) + " KB",
//         type: file.type,
//       }
//     : null;

//   return {
//     file,
//     status,
//     imageInfo,
//     handleFileSelect,
//     handleFileUpload,
//     reset,
//   };
// }

// function toBase64(file: File): Promise<string> {
//   return new Promise((resolve) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       if (typeof reader.result === "string") {
//         resolve(reader.result.split(",")[1]);
//       }
//     };
//     reader.readAsDataURL(file);
//   });
// }

import { useRouter } from "next/navigation";
import { submitUserImage } from "@/actions/actions";
import { useImageUploaderStore } from "./useScanStore";

export default function useImageUploader() {
  const router = useRouter();
  const { setFile, setImageInfo, setStatus, setBase64, reset, base64 } =
    useImageUploaderStore.getState();

  async function handleFileSelect(file: File) {
    setFile(file);
    const encoded = await toBase64(file);
    setBase64(encoded);
    setImageInfo({
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
      type: file.type,
    });
    setStatus("selected");
  }

  async function handleFileUpload() {
    if (!base64) return;

    setStatus("uploading");
    try {
      const response = await submitUserImage(base64);
      localStorage.setItem("storedScanResults", JSON.stringify(response));
      setStatus("success");
      router.push("/analysis");
    } catch {
      setStatus("error");
    }
  }

  return {
    ...useImageUploaderStore(),
    handleFileSelect,
    handleFileUpload,
    reset,
  };
}

function toBase64(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result.split(",")[1]);
      }
    };
    reader.readAsDataURL(file);
  });
}
