import { useMemo } from "react";
import { useDemographicsStore } from "./useDemographicsStore";

export const useCheckedDemographics = () => {
  const data = useDemographicsStore((state) => state.data);
  const checkedCategory = useDemographicsStore((state) =>
    state.checkedCategory
  );

  const currentData = useMemo(() => {
    return data?.[checkedCategory] || {};
  }, [data, checkedCategory]);

  const topEntry = useMemo(() =>
{    let topLabel = "";
    let topValue = 0;
    for (const [label, value] of Object.entries(currentData)) {
      if (value > topValue) {
        topLabel = label;
        topValue = value;
      }
    }
    return { label: topLabel, value: +(topValue * 100).toFixed(0)}
}
  ,[currentData])
 return {data, checkedCategory, currentData, topDataEntry: topEntry}
};
