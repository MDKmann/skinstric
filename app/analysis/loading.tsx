"use client";
import React from 'react'


function Loading() {

  return (
    <div className="relative w-full h-full min-h-screen">
      <div className="dashboard__square--container">
        <div className="text-center absolute uppercase font-semibold">
          <span className="text-nowrap">Preparing Camera ...</span>
        </div>

        <span className="dotted-square" />
        <span className="dotted__square--1 " />
        <span className="dotted__square--2" />
      </div>
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
    </div>
  );
}

export default Loading