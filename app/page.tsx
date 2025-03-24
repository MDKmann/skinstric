"use client";

import Image from "next/image";
import leftArrowIcon from "../public/leftPolygon.png";
import rightArrowIcon from "../public/rightPolygon.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

gsap.registerPlugin(Flip);

export default function Home() {
  const leftButtonRef = useRef<HTMLInputElement>(null);
  const headingStyle = {
    textAlign: "center" as const,
  };

  useGSAP(() => {
    gsap.to(".heading span", {
      y: "0%",
      duration: 1,
      stagger: 0.5,
      ease: "power4.out",
      delay: 0.25,
    });
  }, []);

  useEffect(() => {
    leftButtonRef.current = document.querySelector(".left-button");
    const heroTitle = document.querySelector("#hero__title");
    // const state = Flip.getState(heroTitle, { props: "textAlign" });

    leftButtonRef.current?.addEventListener("mouseenter", () => {
      const state = Flip.getState(heroTitle)
      if (heroTitle instanceof HTMLElement) {
        heroTitle.style.textAlign = 'end';
        Flip.from(state, {
          duration: 1,
          ease:"power1.out",
          x: 100,
        });
      }
    });

    leftButtonRef.current?.addEventListener("mouseleave", () => {
           const state = Flip.getState(heroTitle);
      if (heroTitle instanceof HTMLElement) {
        heroTitle.style.textAlign = "center";
        Flip.from(state, {
          duration: 1,
          ease:"power1.out",
          x: 0,
        });
      }
    });
    // leftButtonRef.current?.addEventListener("mouseenter", () => {
    //   gsap.fromTo(
    //     "#hero__title",
    //     {
    //       textAlign: "center",
    //       ease: "power1.inOut",
    //       duration: 1,
    //     },
    //     {
    //       textAlign: "end",
    //       ease: "power1.inOut",
    //       duration: 1,
    //     }
    //   );
    // });
    // leftButtonRef?.current?.addEventListener("mouseleave", () => {
    //   gsap.fromTo(
    //     "#hero__title",
    //     {
    //       textAlign: "end",
    //       ease: "power1.inOut",
    //       duration: 0.5,
    //     },
    //     {
    //       textAlign: "center",
    //       ease: "power1.inOut",
    //       duration: 0.5,
    //     }
    //   );
    // });
  }, []);

  return (
    <main className=" text-eerie flex grow shrink basis-auto  ">
      <div className="page wrapper">
        <div className="index-content page">
          <div id="hero__title--wrapper" className="m-auto row-span-2">
            <h1 id="hero__title" className=" heading" style={headingStyle}>
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
        <div className="index-dotted-square index-right">
          <div className="pr-small right-button">
            <a href="" className="cursor-pointer right-icon">
              <span className="pr-4 text-sm font-semibold right-button-label">TAKE TEST</span>
              <span className="icon-button solid-square align-middle ">
                <span className="icon-button icon-button-size m-auto flex items-center justify-center">
                  <Image
                    src={rightArrowIcon}
                    alt="Discover a.i. arrow icon"
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
          <span className="dotted-square"></span>
        </div>

        {/* <div className="index-dotted-square index-right">
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
        </div> */}
      </div>
    </main>
  );
}
