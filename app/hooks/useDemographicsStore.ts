import { create } from "zustand";

type DemographicsCategory = "race" | "age" | "gender";

type DemographicsData = {
  race: Record<string, number>;
  age: Record<string, number>;
  gender: Record<string, number>;
}

interface DemographicsStore {
  data: DemographicsData | null; // stores entire api response
  setData: (data: DemographicsData) => void; // update data from localStorage
  checkedCategory: DemographicsCategory; // which radio checkbox is checked
  setCheckedCategory: (category: DemographicsCategory) => void; // update which category is active
  // getCheckedCategory: () => string; 
  // getCurrentData: () => Record<string, number>; // active subset
  // getTopDataValue: () => { label: string; value: number }; // top value in current subset
}

export const useDemographicsStore = create<DemographicsStore>((set) => ({
  data: null,
  checkedCategory: "race",

  setData: (data) => set({ data }), // stores response in state

  setCheckedCategory: (category) => set({ checkedCategory: category }), // allows radio buttons to switch category

  // getCheckedCategory: () => {
  //   const checkedCategory = get().checkedCategory
  //   return checkedCategory;
  // },

  // getCurrentData: () => {
  //   const { data, checkedCategory } = get();
  //   return data?.[checkedCategory] || {};
  // },

  // getTopDataValue: () => {
  //   const currentData = get().getCurrentData();
  //   let topLabel = "";
  //   let topValue = 0;
  //   for (const key in currentData) {
  //     if (currentData[key] > topValue) {
  //       topLabel = key;
  //       topValue = currentData[key];
  //     }
  //   }
  //   return {
  //     label: topLabel,
  //     value: Math.round(topValue * 100),
  //   };
  // },
}));