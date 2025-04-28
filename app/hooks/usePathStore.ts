import { create } from "zustand";

interface PathStore {
  currentPath: string;
  previousPath: string;
  setPath: (newPath: string) => void;
}

export const usePathStore = create<PathStore>((set) => ({
  currentPath: "/",
  previousPath: "/",
  setPath: (newPath: string) =>
    set((state) => ({
      previousPath: state.currentPath, // Save old current as previous
      currentPath: newPath,
    })),
}));
