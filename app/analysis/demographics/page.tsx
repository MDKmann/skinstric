"use client";
import { useInitializeDemographicsData } from "@/app/hooks/useInitializeDemographicsData";
import DemographicsDetailsPanel from "@/components/ui/DemographicsDetailsPanel";
import DemographicsSidePanel from "@/components/ui/DemographicsSidePanel";
import RadialPercentChart from "@/components/ui/DemographicsChart";
import { usePathname } from "next/navigation";
import React from "react";

function Demographics({}) {
  useInitializeDemographicsData();

  const pathname = usePathname();
  const currentPathname = pathname.split("/")[2];

  return (
    <div className="h-full wrapper">
      <div>
        <div className="mt-20 uppercase ">
          <span className="font-semibold">A.I. Analysis</span>
          <br />
          <h1 className="text-7xl tracking-tightest">{currentPathname}</h1>
          <span>Predicted Race & Age</span>
        </div>
      </div>
      <div className="w-full h-[9.875vh] wrapper "></div>
      <div className="w-full h-[57vh] grid grid-cols-[13fr_73fr_28fr] grid-rows-1 gap-4">
        <DemographicsSidePanel />

        <RadialPercentChart />

        <DemographicsDetailsPanel />
      </div>
    </div>
  );
}
export default Demographics;
