import DashboardButtonCube from "@/components/DashboardButtonCube";
import BackButton from "@/components/ui/BackButton";
import React from "react";

function analysisPage() {
const demographics = "/analysis/demographics"

  return (
    <>
      <div>
        <div className="mt-20 wrapper uppercase ">
          <span className="font-semibold">A.I. Analysis</span>
          <br />
          <p>
            A.I. has estimated the following.
            <br />
            Adjust estimated information if needed.
          </p>
        </div>
      </div>
      <div className="form__square--container w-full h-full">
        <div className="text-center absolute">
          <DashboardButtonCube
            buttons={[
              { label: "Demographics", href: `${demographics}` },
              { label: "Cosmetic Concerns", href: "/demographics" },
              { label: "Skin Type Details", href: "/demographics" },
              { label: "Weather", href: "/demographics" },
            ]}
          />
        </div>
        <span className="dotted-square"></span>
        <span className="dotted__square--1"></span>
        <span className="dotted__square--2"></span>
      </div>
      {/* <div className="pl-small left-button absolute bottom-10">
        <BackButton />
      </div> */}
    </>
  );
}

export default analysisPage;
