import Image from "next/image";
import leftHug from "../public/Rectangle 2710.svg";
import rightHug from "../public/Rectangle 2711.svg";

const Header = () => {
  return (
    <header className="w-full h-16 grid grid-cols-2 grid-rows-1 items-center fixed wrapper">
      <div className="flex">
        <a href="" className="font-semibold text-sm">
          SKINSTRIC
        </a>
        <a href="" className="flex ml-4">
          <Image src={leftHug} alt="" className="" />
          <span className="px-1.5 text-sm">INTRO</span>
          <Image src={rightHug} alt="" className="" />
        </a>
      </div>
      <div className="flex justify-end ">
        <button className="uppercase bg-eerie py-2 px-4 text-lotion text-micro font-semibold">
          Enter Code
        </button>
      </div>
    </header>
  );
};

export default Header;
