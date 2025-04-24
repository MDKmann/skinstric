"use client"

import React, { useEffect } from "react";
import BackButton from "./ui/BackButton";
import ForwardButton from "./ui/ForwardButton"
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  const demographicsPath = pathname.includes("demographics")
  const analysisPath = pathname.endsWith("analysis");

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <footer className=" h-1/12 w-full fixed  bottom-8 grid grid-cols-3 grid-rows-1 wrapper z-50">
      <div className="flex w-full">
        {pathname === "/" ? (
          <>
            <div className="row-span-3 flex items-end">
              <p
                id="intro-description"
                className="line-clamp-3 text-wrap w-80 uppercase text-sm leading-roomy"
              >
                Skinstric developed an A.I. that creates a highly-personalised
                routine tailored to what your skin needs.
              </p>
            </div>
          </>
        ) : (
          <>
            <BackButton />
          </>
        )}
      </div>
      <div className="flex justify-center items-center text-center">
        {demographicsPath ? (
          <>
            <p className="text-quicksilver">
              If A.I. estimate is incorrect, please select the correct one.
            </p>
          </>
        ) : (
          <></>
        )}
        {analysisPath ? (
          <div className="flex flex-col gap-4 uppercase text-eerie">
            <p className="text-eerie">
              To get best results please make sure to have
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center justify-center">
                <span className="size-3 transform rotate-45 border-1 border-eerie mr-3"></span>
                <p className="text-eerie">Neutral Expression</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="size-3 transform rotate-45 border-1 border-eerie mr-3"></span>
                <p className="text-eerie">Frontal Pose</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="size-3 transform rotate-45 border-1 border-eerie mr-3"></span>
                <p className="text-eerie">Adequate Lighting</p>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex justify-end">
        {pathname === "/" ? (
          <></>
        ) : (
          <>
            <ForwardButton />
          </>
        )}
      </div>
    </footer>
  );
}

export default Footer;
