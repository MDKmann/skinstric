
import { useEffect } from "react";

export default function useGlobalEnter(
  submitFn: () => void,
  inputSelector: string
) {
  useEffect(() => {
    let keyHandler: ((e: KeyboardEvent) => void) | null = null;

    const setup = () => {
      const input = document.querySelector(
        inputSelector
      ) as HTMLInputElement | null;
      const focused = document.activeElement === input;
      // const hasValue = input?.value?.trim().length > 0;
        const hasValue = input?.value?.trim().length ?? 0 > 0;

      if (!focused && !hasValue && !keyHandler) {
        keyHandler = (e: KeyboardEvent) => {
          if (e.key === "Enter") {
            e.preventDefault();
            submitFn();
          }
        };
        window.addEventListener("keydown", keyHandler);
      }

      if ((focused || hasValue) && keyHandler) {
        window.removeEventListener("keydown", keyHandler);
        keyHandler = null;
      }
    };
    document.addEventListener("focusin", setup);
    document.addEventListener("focusout", setup);
    document.addEventListener("input", setup);

    setup(); // run immediately

    return () => {
      if (keyHandler) window.removeEventListener("keydown", keyHandler);
      document.removeEventListener("focusin", setup);
      document.removeEventListener("focusout", setup);
      document.removeEventListener("input", setup);
    };
  }, [submitFn, inputSelector]);
}
