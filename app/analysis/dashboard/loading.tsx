"use client";
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

import React from 'react'


function Loading() {

  // useGSAP(() => {
  //   const tl = gsap.timeline({});
  //   tl.fromTo(".dotted-square", {
  //     transform: "rotate(30deg)",
  //   }, {
  //     duration: 0.5,
  //    transform: "rotate(45deg)",
  //     ease: "power1.inOut",
  //   });

  //   tl.fromTo(".dotted__square--2", {
  //     transform: "rotate(60deg)",
  //   }, {
  //     duration: 0.5,
  //     transform: "rotate(45deg)",
  //     ease: "power1.inOut",
  //   });
  // },[]);


  return (
      <div className="relative w-full h-full min-h-screen">
        <div className="dashboard__square--container">
          <div className="text-center absolute uppercase font-semibold">
            <span className="text-nowrap">Preparing your analysis ...</span>
          </div>

          <span className="dotted-square" />
          <span className="dotted__square--1 " />
          <span className="dotted__square--2" />
        </div>
      </div>
  );
}

export default Loading