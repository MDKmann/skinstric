"use client";

import Image from "next/image";
import rightArrowIcon from "../../public/rightPolygon.png";
import { useSubmitStore } from "@/app/hooks/useSubmitStore";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import useImageUploader from "@/app/hooks/useImageUploader";

function ForwardButton() {
  const pathname = usePathname();
  const currentPathname = pathname.split("/").join("");
  const webcam = currentPathname === "analysis";
  const dashboard = pathname.includes("dashboard");
  const { handleFileUpload } = useImageUploader();
  const setSubmitHandlerFn = useSubmitStore(
    (state) => state.setSubmitHandlerFn
  );
  const callSubmitHandlerFn = useSubmitStore(
    (state) => state.callSubmitHandlerFn
  );

  const handleForward = () => {
    console.log("ForwardButton clicked");
    callSubmitHandlerFn();
  };

  useEffect(() => {
    if (webcam) {
      setSubmitHandlerFn(handleFileUpload);
    }
  }, [webcam, setSubmitHandlerFn, handleForward]);

  return (
    <button
      onClick={handleForward}
      className="cursor-pointer right-icon right-button"
    >
      <span className="pr-4 uppercase text-sm font-semibold right-button-label">
        {dashboard ? <>Get Summary</> : <>Proceed</>}
      </span>
      <span className="icon-button solid-square align-middle ">
        <span className="icon-button icon-button-size m-auto flex items-center justify-center">
          <Image
            src={rightArrowIcon}
            alt="right arrow icon"
            className="rotate-195"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </span>
      </span>
    </button>
  );
}

export default ForwardButton;
