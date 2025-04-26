import React, { ReactNode } from "react";

type Button = {
  label: string;
  onClick: () => void;
  className?: string; // optional
};

interface FloatInfoProps {
  message: ReactNode;
  subInfo?: string; // Optional for file name, etc.
  buttons: Button[];
}

function FloatInfo({ message, subInfo, buttons }: FloatInfoProps) {
  return (
    <div className="z-50 absolute w-[400px] min-h-[75px] grid grid-rows-3 uppercase font-semibold bg-eerie text-lotion shadow-lg rounded-sm">
      <div className="border-b border-b-lotion w-full row-start-1 row-span-2">
        <div className="p-2">{message}</div>
        {subInfo && (
          <p className="text-sm normal-case font-normal mt-1">{subInfo}</p>
        )}
      </div>

      <div className="grid grid-cols-2 h-auto row-start-3">
        <div className="col-start-2 flex justify-end gap-4 items-center pr-4 relative">
          {buttons.map((btn, i) => (
            <button
              key={i}
              className="uppercase cursor-pointer py-2"
              onClick={btn.onClick}
            >
              <span className="px-4 py-2">{btn.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FloatInfo;
