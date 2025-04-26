"use client";
import React from 'react'


function Loading() {

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