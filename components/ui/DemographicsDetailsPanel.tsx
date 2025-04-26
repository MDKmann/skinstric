"use client";


import { useCheckedDemographics } from "@/app/hooks/useCheckedDemographics";
import React, { useEffect } from "react";

function DemographicsDetailsPanel() {
const { currentData, topDataEntry, checkedCategory} = useCheckedDemographics();

  useEffect(() => {}, []);

  return (
    <div className="border-t-1">
      <div className="bg-antiflash flex justify-between items-center p-4 uppercase font-medium">
        <span>{checkedCategory}</span>
        <span>A.I. Confidence</span>
      </div>
      <div className="grid grid-rows-10">
        {currentData ? (
          Object.entries(currentData)
            .sort(function (a, b) {
              return b[1] - a[1];
            })
            .map(([label, rawValue]) => {
              const percent = (rawValue * 100).toFixed(0);
              const isTop = label === topDataEntry.label
              return (
                <div
                  className={`flex justify-between items-center px-4 py-3 uppercase group hover:bg-platinum hover:ease-smooth ease-smooth ${isTop ? "bg-eerie text-lotion hover:text-eerie" : "text-eerie"}`}
                  key={label}
                >
                  <div className="flex items-center">
                    <span
                      className={`size-3 transform rotate-45 border-1 ${isTop ? "border-lotion flex place-items-center group-hover:border-eerie" : "border-eerie"}`}
                    >
                      {isTop ? (
                        <div className="size-1.5 border-1 m-auto border-lotion group-hover:border-eerie "></div>
                      ) : (
                        <></>
                      )}
                    </span>
                    <span className="ml-3">{label}</span>
                  </div>
                  <span>{percent}%</span>
                </div>
              );
            })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
export default DemographicsDetailsPanel;
