import { create } from "zustand";

type UploadStatus = "idle" | "selected" | "uploading" | "success" | "error";

interface ImageUploaderStore {
  imageInfo: { name: string; size: string; type: string } | null;
  file: File | null;
  base64: string | null;
  status: UploadStatus;

  setImageInfo: (info: { name: string; size: string; type: string }) => void;
  setFile: (file: File | null) => void;
  setBase64: (base64: string | null) => void;
  setStatus: (status: UploadStatus) => void;
  reset: () => void;
}

export const useImageUploaderStore = create<ImageUploaderStore>((set) => ({
  imageInfo: null,
  file: null,
  base64: null,
  status: "idle",

  setImageInfo: (info) => set({ imageInfo: info }),
  setFile: (file) => set({ file }),
  setBase64: (base64) => set({ base64 }),
  setStatus: (status) => set({ status }),

  reset: () =>
    set({
      file: null,
      imageInfo: null,
      base64: null,
      status: "idle",
    }),
}));
