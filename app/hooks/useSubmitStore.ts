import { create } from "zustand";

type SubmitFn = () => void;

interface SubmitStore {
  submitHandlerFn: SubmitFn | null;
  setSubmitHandlerFn: (fn: SubmitFn) => void;
  callSubmitHandlerFn: () => void;
}

export const useSubmitStore = create<SubmitStore>((set, get) => ({
  submitHandlerFn: null,
  setSubmitHandlerFn: (fn) => {
    console.log("Setting submit handler");
    set({ submitHandlerFn: fn });
  },
  callSubmitHandlerFn: () => {
    const fn = get().submitHandlerFn;
    console.log("Calling submit handler:", fn);
    fn?.();
  },
}));

