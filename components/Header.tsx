"use client";

import Image from "next/image";
import leftHug from "../public/Rectangle 2710.svg";
import rightHug from "../public/Rectangle 2711.svg";
import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  // returns the first word from current path after removing forward slashes
  const currentPathname = pathname.split("/")[1];

  useEffect(() => {
    if (pathname === "/") {
      const gsapContext = gsap.context(() => {
        gsap.to(headerRef.current, {
          y: "0%",
          duration: 1,
          ease: "power4.out",
          delay: 1.5,
        });
      }, headerRef);

      return () => {
        gsapContext.revert();
      };
    } else if (pathname !== "/") {
      const gsapContext = gsap.context(() => {
        gsap.to(headerRef.current, {
          y: "0%",
          duration: 0,
          ease: "none",
        });
      }, headerRef);

      return () => {
        gsapContext.revert();
      };
    }
  }, [pathname]);

  // useGSAP(() => {
  //   gsap.to("#header", {
  //     y: "0%",
  //     duration: 1,
  //     ease: "power4.out",
  //     delay: 1.5,
  //   });
  // });

  return (
    <header
      id="header"
      ref={headerRef}
      className="w-full h-16 grid grid-cols-2 grid-rows-1 items-center fixed wrapper -translate-y-full z-50"
    >
      <div className="flex">
        <Link href="/" className="font-semibold text-sm cursor-pointer">
          SKINSTRIC
        </Link>
        <a href="" className="flex ml-4">
          <Image src={leftHug} alt="" className="" />
          <span className="px-1.5 text-sm uppercase">
            {pathname === "/" ? <>intro</> : currentPathname}
          </span>
          <Image src={rightHug} alt="" className="" />
        </a>
      </div>
      <div className="flex justify-end ">
        {pathname === "/" ? (
          <button className="uppercase bg-eerie py-2 px-4 text-lotion text-micro font-semibold code-button">
            Enter Code
          </button>
        ) : (
          <> </>
        )}
      </div>
    </header>
  );
};

export default Header;
