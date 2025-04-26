"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import leftArrowIcon from "../public/leftPolygon.png";
import rightArrowIcon from "../public/rightPolygon.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

//  Helper to measure pure text width
function getTextWidth(text: string, font: string): number {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) return 0;
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}

export default function Home() {
  const leftTrigger = useRef<HTMLSpanElement>(null);
  const rightTrigger = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    // === Initial Animations ===
    gsap.to(".heading span", {
      y: "0%",
      duration: 1,
      ease: "power4.out",
      delay: 0.25,
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

    // === Timeline Setup
    const rightHoverTL = gsap.timeline({ paused: true });
    const leftHoverTL = gsap.timeline({ paused: true });

    // === Calculate dynamic text width for .hero__title--1
    const heroTitle1 = document.querySelector(".hero__title--1");
    const heroTitle2 = document.querySelector(".hero__title--2");

    let textWidth1 = 0;
    let textWidth2 = 0;
    let translateX = 0;

    if (
      heroTitle1 instanceof HTMLElement &&
      heroTitle2 instanceof HTMLElement
    ) {
      const text1 = heroTitle1.textContent || "";
      const text2 = heroTitle2.textContent || "";
      const computedStyle1 = window.getComputedStyle(heroTitle1);
      const computedStyle2 = window.getComputedStyle(heroTitle2);
      const font1 = `${computedStyle1.fontWeight} ${computedStyle1.fontSize} ${computedStyle1.fontFamily}`;
      const font2 = `${computedStyle2.fontWeight} ${computedStyle2.fontSize} ${computedStyle2.fontFamily}`;
      textWidth1 = getTextWidth(text1, font1);
      textWidth2 = getTextWidth(text2, font2);
      translateX = (textWidth1 - textWidth2) / 2.25;

      console.log("Calculated pure text width of .hero__title--1:", textWidth1);
    }

    rightHoverTL
      .to(
        ".heading",
        {
          x: "-25vw",
          duration: 1.5,
          ease: "power4.out",
        },
        0
      )
 
      .to(
        ".hero__title--2",
        {
          x: -translateX, //  Move hero__title--2 based on width of hero__title--1
          ease: "power4.out",
          duration: 1.5,
        },
        0
      )
      .to(
        ".index-left",
        {
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        },
        0.25
      );

    leftHoverTL.to(".index-left", {
      opacity: 0.5,
      duration: 1,
      ease: "power4.out",
      delay: 0.25,
    });

    // === Event Handlers
    const left = leftTrigger.current;
    const right = rightTrigger.current;

    const onLeftEnter = () => leftHoverTL.restart();
    const onLeftLeave = () => leftHoverTL.reverse();

    const onRightEnter = () => rightHoverTL.restart();
    const onRightLeave = () => rightHoverTL.reverse();

    left?.addEventListener("mouseenter", onLeftEnter);
    left?.addEventListener("mouseleave", onLeftLeave);
    right?.addEventListener("mouseenter", onRightEnter);
    right?.addEventListener("mouseleave", onRightLeave);

    return () => {
      left?.removeEventListener("mouseenter", onLeftEnter);
      left?.removeEventListener("mouseleave", onLeftLeave);
      right?.removeEventListener("mouseenter", onRightEnter);
      right?.removeEventListener("mouseleave", onRightLeave);
    };
  }, []);

  return (
    <main className="text-eerie flex grow shrink basis-auto">
      <div className="page wrapper">
        <div className="index-content page">
          <div id="hero__title--wrapper" className="m-auto row-span-2">
            <h1 id="hero__title" className="heading text-center w-full">
              <span className="hero__title--1 w-full inline-block">
                Sophisticated
              </span>
              <br />
              <span className="hero__title--2 w-full inline-block">
                skincare
              </span>
            </h1>
          </div>
        </div>

        {/* === LEFT SIDE === */}
        <div className="landing__square--container index-left">
          <span
            ref={leftTrigger}
            className="z-50 absolute left-2 -translate-y-1/2 top-1/2 py-12 px-12 left-button-trigger"
          />
          <div className="pl-small left-button">
            <span className="cursor-not-allowed icon-button solid-square align-middle">
              <span className="cursor-not-allowed icon-button icon-button-size m-auto flex items-center justify-center">
                <Image
                  src={leftArrowIcon}
                  alt="Discover a.i. arrow icon"
                  className="rotate-195"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </span>
            </span>
            <span className="pl-4 uppercase text-sm font-semibold left-button-label cursor-not-allowed">
              Discover A.I.
            </span>
          </div>
          <span className="dotted-square" />
        </div>

        {/* === RIGHT SIDE === */}
        <div className="landing__square--container index-right">
          <Link
            href="/intro/name"
            className="block cursor-pointer right-button-trigger"
          >
            <span
              ref={rightTrigger}
              className="z-50 absolute right-2 -translate-y-1/2 top-1/2 py-12 px-12"
            />
          </Link>
          <div className="pr-small right-button">
            <span className="pr-4 text-sm font-semibold right-button-label">
              TAKE TEST
            </span>
            <span className="icon-button solid-square align-middle">
              <span className="icon-button icon-button-size m-auto flex items-center justify-center">
                <Image
                  src={rightArrowIcon}
                  alt="Discover a.i. arrow icon"
                  className="rotate-75"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </span>
            </span>
          </div>
          <span className="dotted-square" />
        </div>
      </div>
    </main>
  );
}
