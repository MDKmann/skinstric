"use client";

import Image from "next/image";
import leftArrowIcon from "../public/leftPolygon.png";
import rightArrowIcon from "../public/rightPolygon.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import { useEffect, useRef } from "react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

gsap.registerPlugin(Flip);

export default function Home() {
  const leftButtonRef = useRef<HTMLInputElement>(null);
  const rightButtonRef = useRef<HTMLInputElement>(null);

  const headingStyle = {
    textAlign: "center" as const,
  };

  useGSAP(() => {
    leftButtonRef.current = document.querySelector(".left-button");
    rightButtonRef.current = document.querySelector(".right-button");
    const heroTitle = document.querySelector("#hero__title");
    gsap.to(".heading span", {
      y: "0%",
      duration: 1,
      ease: "power4.out",
      delay: .25,
    });
    gsap.to("#intro-description", {
      y: "0%",
      duration: 1,
      ease: "power4.out",
      delay: 1.5,
    });
    gsap.to(".index-left, .index-right", {
      x: "0%",
      duration: 1,
      ease: "power4.out",
      delay: 0.75,
    });
    gsap.to("#intro-description", {
      y: "0%",
      duration: 1,
      ease: "power4.out",
      delay: 1.5,
    });
    gsap.to(".index-left, .index-right", {
      x: "0%",
      duration: 1,
      ease: "power4.out",
      delay: 0.75,
    });

    leftButtonRef.current?.addEventListener("mouseenter", () => {
      if (heroTitle instanceof HTMLElement) {
        gsap.to(".hero__title--1", {
          x: "30%",
          duration: 2,
          ease: "power4.out",
          delay: 0.25,
        });
        gsap.to(".hero__title--2", {
          x: "37%",
          duration: 2,
          ease: "power4.out",
          delay: 0.25,
        });
        gsap.to(".index-right", {
          opacity: 0,
          duration: 2,
          ease: "power4.out",
          delay: 0.25,
        });
      }
    });

    leftButtonRef.current?.addEventListener("mouseleave", () => {
      if (heroTitle instanceof HTMLElement) {
        gsap.to(".hero__title--1, .hero__title--2", {
          x: "0%",
          duration: 1,
          ease: "power4.out",
          delay: 0.25,
        });
        gsap.to(".index-right", {
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          delay: 0.25,
        });
      }
    });
    rightButtonRef.current?.addEventListener("mouseenter", () => {
      if (heroTitle instanceof HTMLElement) {
        gsap.to(".hero__title--1", {
          x: "-30%",
          duration: 2,
          ease: "power4.out",
          delay: 0.25,
        });
        gsap.to(".hero__title--2", {
          x: "-37%",
          duration: 2,
          ease: "power4.out",
          delay: 0.25,
        });
        gsap.to(".index-left", {
          opacity: 0,
          duration: 2,
          ease: "power4.out",
          delay: 0.25,
        });
      }
    });

    rightButtonRef.current?.addEventListener("mouseleave", () => {
      if (heroTitle instanceof HTMLElement) {
        gsap.to(".hero__title--1, .hero__title--2", {
          x: "0%",
          duration: 1,
          ease: "power4.out",
          delay: 0.25,
        });
        gsap.to(".index-left", {
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          delay: 0.25,
        });
      }
    });
  }, []);

  useEffect(() => {}, []);

  return (
    <main className=" text-eerie flex grow shrink basis-auto  ">
      <div className="page wrapper">
        <div className="index-content page">
          <div id="hero__title--wrapper" className="m-auto row-span-2">
            <h1 id="hero__title" className=" heading" style={headingStyle}>
              <span className="hero__title--1">Sophisticated</span>
              <br />
              <span className="hero__title--2">skincare</span>
            </h1>
          </div>
          <div className="row-span-3 flex items-end">
            <p
              id="intro-description"
              className="line-clamp-3 text-wrap w-80 uppercase text-sm leading-roomy"
            >
              Skinstric developed an A.I. that creates a highly-personalised
              routine tailored to what your skin needs.
            </p>
          </div>
        </div>

        <div className="landing__square--container index-left">
          <div className="pl-small left-button">
            <Link href="" className="cursor-pointer left-icon">
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
            </Link>
          </div>
          <span className="dotted-square"></span>
        </div>
        <div className="landing__square--container  index-right">
          <div className="pr-small right-button">
            <Link href="/intro" className="cursor-pointer right-icon">
              <span className="pr-4 text-sm font-semibold right-button-label">
                TAKE TEST
              </span>
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
            </Link>
          </div>
          <span className="dotted-square"></span>
        </div>
      </div>
    </main>
  );
}
