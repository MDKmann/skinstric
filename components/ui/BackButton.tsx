"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import leftArrowIcon from "../../public/leftPolygon.png";


function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button onClick={handleBack} className="cursor-pointer left-icon left-button">
      <span className="icon-button solid-square align-middle ">
        <span className="icon-button icon-button-size m-auto flex items-center justify-center">
          <Image
            src={leftArrowIcon}
            alt="left arrow icon"
            className="rotate-195"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </span>
      </span>
      <span className="pl-4 uppercase text-sm font-semibold left-button-label">
        Back
      </span>
    </button>
  );
}

export default BackButton;
