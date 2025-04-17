
import { useCheckedDemographics } from "@/app/hooks/useCheckedDemographics";
import React from "react";


function DemographicsChart() {
  const { checkedCategory, topDataEntry } = useCheckedDemographics();
  const { label, value } = topDataEntry;
  const circumference = 184 * 2 * Math.PI;
  const percent = Number(value);

  return (
    <div className="border-t-1 bg-antiflash relative">
      <h1 className="pt-4 pl-4 text-[40px] tracking-tighter">
        <span className="capitalize">{label}</span>
        {checkedCategory === "age" ? (
          <span className="tracking-wide"> y.o.</span>
        ) : (
          <></>
        )}
      </h1>
      <div className="size-[40vh] absolute right-4 bottom-4 flex justify-center items-center">
        <div className="absolute flex items-start justify-center">
          <h3 className="text-5xl leading-none relative">
            {percent}
            <span className="text-2xl absolute -top-2 -right-4">%</span>
          </h3>
        </div>
        <svg width={384} height={384}>
          <circle
            cx={192}
            cy={192}
            r={184}
            stroke="#c1c2c3"
            fill="none"
            strokeWidth={6}
          ></circle>
          <circle
            cx={192}
            cy={192}
            r={184}
            stroke="#000"
            strokeWidth={4}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (percent / 100) * circumference}
            transform="rotate(270 192 192)"
            strokeLinecap="round"
            fill="transparent"
          ></circle>
        </svg>
      </div>
    </div>
  );
}

export default DemographicsChart;
