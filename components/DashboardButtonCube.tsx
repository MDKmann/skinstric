"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React from "react";

type Button = {
  label: string;
  href: string;
  // onClick: () => void;
  className?: string;
};

interface DashboardButtonProps {
  buttons: Button[];

}

function DashboardButtonCube({ buttons }: DashboardButtonProps) {
useGSAP(() => {
  const tl = gsap.timeline({});
  tl.fromTo("#dashboardCube", {
   opacity: 0,
  }, {
    duration: 0.5,
  opacity: 1,
    ease: "power1.inOut",
  });
},[])

  return (
    <div id="dashboardCube" className="grid grid-cols-2 grid-rows-2 gap-1.5 size-[16.335vw] rotate-45">
      {buttons.map((btn, i) => (
        <Link href={btn.href} key={i}>
          <button
            className="uppercase cursor-pointer w-full h-full "
            // onClick={btn.onClick}
          >
            <div className="bg-antiflash font-semibold flex justify-center items-center  w-full h-full hover:bg-platinum  active:bg-platinum active:border-2 active:border-lightgray hover:ease-smooth ease-smooth ">
              <p className="-rotate-45 flex justify-center items-center w-full h-full max-w-[13ch]! text-center">
                {btn.label}
              </p>
            </div>
          </button>
        </Link>
      ))}
    </div>
  );
}

export default DashboardButtonCube;
