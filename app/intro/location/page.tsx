"use client";

import React, { useCallback, useEffect, useState } from "react";
import { submitUserData } from "@/actions/actions";
import { useRouter } from "next/navigation";
import PlacesInput from "@/components/ui/PlacesInput";
import GoogleMapsLoader from "@/components/utils/GoogleMapsLoader";
import { useSubmitStore } from "@/app/hooks/useSubmitStore";
import handleEnterKeyDown from "@/components/utils/handleEnterKeyDown";
import useGlobalEnter from "@/components/utils/useGlobalEnterKey";

const UserLocationForm: React.FC = () => {
  const router = useRouter();
  const [userLocation, setUserLocation] = useState("");
  const [userName, setUserName] = useState("");
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const setSubmitHandlerFn = useSubmitStore(
    (state) => state.setSubmitHandlerFn
  );

  const handleLocationSubmit = useCallback(() => {
    if (!userLocation.trim()) {
      alert("Please enter your location");
      return;
    }
    (async () => {
      try {
        const response = await submitUserData(userName, userLocation);
        console.log("Submitted:", response);
        router.push("/intro/scan");
      } catch (error) {
        console.error("Error submitting user data:", error);
      }
    })();
  }, [userLocation, userName, router]);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedLocation = localStorage.getItem("Location_Name");
    if (storedName) setUserName(storedName);
    if (storedLocation) setUserLocation(storedLocation);
    setSubmitHandlerFn(handleLocationSubmit);
  }, [setSubmitHandlerFn, handleLocationSubmit]);

  useGlobalEnter(
    handleLocationSubmit,
    "input[placeholder='Where are you from?']"
  );

  return (
    <>
      <GoogleMapsLoader onLoad={() => setScriptLoaded(true)} />
      <div>
        <span className="mt-20 wrapper uppercase font-semibold">
          To Start Analysis
        </span>
      </div>

      <div className="form__square--container w-full h-full">
        <div className="text-center absolute">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (userLocation.trim()) {
                handleLocationSubmit();
              } else {
                alert("Please enter or select a location first.");
              }
            }}
          >
            <label className="uppercase opacity-40 text-sm text-eerie">
              Click to type
            </label>
            <br />
            {scriptLoaded ? (
              <PlacesInput
                setUserLocation={setUserLocation}
                setCoordinates={() => {}}
                setHasSelectedPlace={() => {}}
                onKeyDown={handleEnterKeyDown(handleLocationSubmit, {
                  isLocation: true,
                })}
              />
            ) : (
              <p className="text-4xl mt-4 tracking-tightest">
                Loading Google Maps...
              </p>
            )}
          </form>
        </div>

        <span className="dotted-square"></span>
        <span className="dotted__square--1"></span>
        <span className="dotted__square--2"></span>
      </div>
    </>
  );
};

export default UserLocationForm;
