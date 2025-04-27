import { create } from "zustand";


interface PathStore {
  path: string;
  setPathStore: (path: string) => void;
}

export const usePathStore = create<PathStore>((set) => ({
  path: "/",
  setPathStore: (path) => set({ path }),
}))