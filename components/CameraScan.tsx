import Image from 'next/image';
import shutterIcon from ".././public/camera-icon.svg"
import titleAnchor from ".././public/title-anchor.svg"
import React from 'react'

function CameraScan({ gridPlace }: {gridPlace: string}) {
  return (
    <div className={`relative w-full h-full ${gridPlace}`}>
      <div className="scan__square--container">
        <div className="w-full h-full">
          <div className="w-36 h-36 absolute -translate-1/2">
            <Image
              src={shutterIcon}
              alt="camera icon"
              className=""
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="w-[66px] h-[59px] absolute translate-x-3/5 -translate-y-[170%]">
            <Image
              src={titleAnchor}
              alt="caption line"
              className=""
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <span className="dotted-square"></span>
        <span className="dotted__square--1"></span>
        <span className="dotted__square--2"></span>
      </div>
    </div>
  );
}

export default CameraScan