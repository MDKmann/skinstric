import React from "react";
import Image from "next/image";
import uploadIcon from "../../public/gallery-icon.svg";
import titleAnchor from "../../public/title-anchor.svg";

function GalleryIcon() {
  return (
    <div className="">
      <div className="w-[66px] h-[59px] absolute -translate-x-[165%] translate-y-[60%] rotate-180">
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
          src={uploadIcon}
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

export default GalleryIcon;
