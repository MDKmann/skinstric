"use client"

import React from "react";
import BackButton from "./ui/BackButton";
import ForwardButton from "./ui/ForwardButton"
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  const demographicsPath = pathname.includes("demographics")

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
            <p className="text-quicksilver">If A.I. estimate is incorrect, please select the correct one.</p>
          </>
        ) : (
          <>
          </>
        )}
      </div>
      <div className="flex justify-end">
        {pathname === "/" ? (
          <></>
        ) : (
          <>
            <ForwardButton  />
          </>
        )}
      </div>
    </footer>
  );
}

export default Footer;
