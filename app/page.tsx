"use client";

import Image from "next/image";
import leftArrowIcon from "../public/leftPolygon.png";
import rightArrowIcon from "../public/rightPolygon.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Home() {
  useGSAP(() => {
    gsap.to(".heading span", {
      y: "0%",
      duration: 1,
      stagger: 0.5,
      ease: 'power4.out',
      delay: .25,
    });
  }, []);

  return (
    <main className=" text-eerie flex grow shrink basis-auto  ">
      <div className="page wrapper">
        <div className="index-content page">
          <div id="hero__title--wrapper" className="m-auto row-span-2">
            <h1 id="hero__title" className=" heading text-center">
              <span>
                Sophisticated
                <br />
                skincare
              </span>
            </h1>
          </div>
          <div className="row-span-3 flex items-end">
            <p className="line-clamp-3 text-wrap w-80 uppercase text-sm leading-roomy">
              Skinstric developed an A.I. that creates a highly-personalised
              routine tailored to what your skin needs.
            </p>
          </div>
        </div>

        <div className="index-dotted-square index-left">
          <div className="pl-small left-button">
            <a href="" className="cursor-pointer left-icon">
              <span className="icon-button solid-square align-middle ">
                <span className="icon-button icon-button-size m-auto flex items-center justify-center">
                  <Image
                    src={leftArrowIcon}
                    alt="Discover a.i. arrow icon"
                    className="rotate-195"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </span>
              </span>
              <span className="pl-4 uppercase text-sm font-semibold left-button-label">
                Discover A.I.
              </span>
            </a>
          </div>
          <span className="dotted-square"></span>
        </div>

        <div className="index-dotted-square index-right g">
          <div className="dotted-square flex justify-center items-center">
            <div className="pr-48 -rotate-45">
              <a href="" className="cursor-pointer right-icon">
                <span className="pr-4 text-sm font-semibold">TAKE TEST</span>
                <span className="icon-button solid-square align-middle ">
                  <span className="icon-button icon-button-size m-auto flex items-center justify-center">
                    <Image
                      src={rightArrowIcon}
                      alt="Take test arrow icon"
                      className="rotate-75"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
