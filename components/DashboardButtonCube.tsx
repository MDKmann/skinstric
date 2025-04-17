import Link from "next/link";
import React from "react";

type Button = {
  label: string;
  href: string;
  // onClick: () => void;
  className?: string;
};

interface DashboardButtonProps {
  buttons: Button[];

}

function DashboardButtonCube({ buttons }: DashboardButtonProps) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-1.5 size-[16.335vw] rotate-45">
      {buttons.map((btn, i) => (
        <Link href={btn.href} key={i}>
          <button
            className="uppercase cursor-pointer w-full h-full "
            // onClick={btn.onClick}
          >
            <div className="bg-antiflash font-semibold flex justify-center items-center  w-full h-full hover:bg-platinum  active:bg-platinum active:border-2 active:border-lightgray  ">
              <p className="-rotate-45 flex justify-center items-center w-full h-full max-w-[13ch]! text-center">
                {btn.label}
              </p>
            </div>
          </button>
        </Link>
      ))}
    </div>
  );
}

export default DashboardButtonCube;
