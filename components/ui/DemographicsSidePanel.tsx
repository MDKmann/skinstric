import { useDemographicsStore } from "@/app/hooks/useDemographicsStore";
import { getTopKey } from "../utils/getTopKey";
import { useCheckedDemographics } from "@/app/hooks/useCheckedDemographics";

function DemographicsSideBar() {
  const { data, checkedCategory: isChecked } = useCheckedDemographics();
  const setIsChecked = useDemographicsStore(
    (state) => state.setCheckedCategory
  );

  return (
    <div className=" grid grid-rows-3 gap-2 h-2/3">
      {/* Race Option */}
      <div className="h-full">
        <input
          type="radio"
          name="demographic"
          id="demographic-race"
          className="peer hidden"
          checked={isChecked === "race"}
          onChange={() => setIsChecked("race")}
        />
        <label
          htmlFor="demographic-race"
          className="border-t-1 h-full flex flex-col justify-between items-start uppercase font-semibold tracking-tight cursor-pointer bg-antiflash hover:bg-platinum peer-checked:bg-eerie peer-checked:text-lotion peer-checked:hover:text-eerie group-hover:ease-smooth ease-smooth"
        >
          <p className="pt-4 pl-4">{data?.race ? getTopKey(data.race) : ""}</p>
          <p className="pb-4 pl-4">Race</p>
        </label>
      </div>

      {/* Age Option */}
      <div className="h-full">
        <input
          type="radio"
          name="demographic"
          id="demographic-age"
          className="peer hidden"
          checked={isChecked === "age"}
          onChange={() => setIsChecked("age")}
        />
        <label
          htmlFor="demographic-age"
          className="border-t-1 h-full flex flex-col justify-between items-start uppercase font-semibold tracking-tight cursor-pointer bg-antiflash hover:bg-platinum  peer-checked:bg-eerie peer-checked:text-lotion peer-checked:hover:text-eerie group-hover:ease-smooth ease-smooth"
        >
          <p className="pt-4 pl-4">{data?.age ? getTopKey(data.age) : ""}</p>
          <p className="pb-4 pl-4">Age</p>
        </label>
      </div>

      {/* Gender Option */}
      <div className="h-full">
        <input
          type="radio"
          name="demographic"
          id="demographic-gender"
          className="peer hidden"
          checked={isChecked === "gender"}
          onChange={() => setIsChecked("gender")}
        />
        <label
          htmlFor="demographic-gender"
          className="border-t-1 h-full flex flex-col justify-between items-start uppercase font-semibold tracking-tight cursor-pointer bg-antiflash hover:bg-platinum peer-checked:bg-eerie peer-checked:text-lotion peer-checked:hover:text-eerie group-hover:ease-smooth ease-smooth"
        >
          <p className="pt-4 pl-4">
            {data?.gender ? getTopKey(data.gender) : ""}
          </p>
          <p className="pb-4 pl-4">Gender</p>
        </label>
      </div>
    </div>
  );
}

export default DemographicsSideBar;
