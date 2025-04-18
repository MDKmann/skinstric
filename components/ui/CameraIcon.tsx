import React from "react";
import Image from "next/image";
import shutterIcon from "../../public/camera-icon.svg";
import titleAnchor from "../../public/title-anchor.svg";

function CameraIcon() {
  return (
    <div className="">
      <div className="w-[66px] h-[59px] absolute translate-x-[60%] -translate-y-[170%]">
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
      <div className="w-36 h-36 absolute -translate-1/2">
        <Image
          src={shutterIcon}
          alt="gallery icon"
          className=""
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}

export default CameraIcon;
