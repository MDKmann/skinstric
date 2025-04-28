"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import leftArrowIcon from "../../public/leftPolygon.png";
import { usePathStore } from "@/app/hooks/usePathStore";
import { useEffect } from "react";

function BackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const { previousPath, setPath } = usePathStore();

  const handleBack = () => {
    const referrer = document.referrer;
    const currentOrigin = window.location.origin;

    if (referrer.startsWith(currentOrigin)) {
      router.back();
      console.log(`Router Back: ${currentOrigin}`);
    } else {
      // Use the stored previous page instead
      router.push(previousPath || "/");
      console.log(`Fallback to previousPath: ${previousPath}`);
    }
  };

  useEffect(() => {
    setPath(pathname);
  }, [pathname, setPath]);

  return (
    <button
      onClick={handleBack}
      className="cursor-pointer left-icon left-button"
    >
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
