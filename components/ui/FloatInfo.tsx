import React, { ReactNode } from "react";

// function FloatInfo() {
//   return (
//     <div className="absolute -translate-x-126 translate-y-22 w-[400px] h-[75px] grid grid-rows-3 uppercase font-semibold bg-eerie text-lotion ">
//       <div className="border-b border-b-lotion w-full line-clamp-1 row-start-1 row-span-2 pt-1 px-2">
//         <p>Allow A.I. to access your camera</p>
//       </div>
//       <div className="grid grid-cols-2 h-auto row-start-3  ">
//         <div className="col-start-2  flex justify-end gap-4  items-center pr-4">
//           <button className="uppercase ">Deny</button>
//           <button className="uppercase">Allow</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FloatInfo

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
    <div className="absolute -translate-x-126 translate-y-22 w-[400px] min-h-[75px] grid grid-rows-3 uppercase font-semibold bg-eerie text-lotion shadow-lg rounded-sm">
      <div className="border-b border-b-lotion w-full row-start-1 row-span-2">
        <div className="p-2">{message}</div>
        {subInfo && (
          <p className="text-sm normal-case font-normal mt-1">{subInfo}</p>
        )}
      </div>

      <div className="grid grid-cols-2 h-auto row-start-3">
        <div className="col-start-2 flex justify-end gap-4 items-center pr-4">
          {buttons.map((btn, i) => (
            <button
              key={i}
              className="uppercase cursor-pointer"
              onClick={btn.onClick}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FloatInfo;
