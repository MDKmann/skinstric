"use client";

import React, { useEffect, useState } from "react";
import BackButton from "@/components/ui/BackButton";
import { submitUserData } from "@/actions/actions";
import { useRouter } from "next/navigation";
import PlacesInput from "@/components/ui/PlacesInput";
import GoogleMapsLoader from "@/components/utils/GoogleMapsLoader";

const UserLocationForm: React.FC = () => {
  const router = useRouter();
  const [userLocation, setUserLocation] = useState("");
  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [userName, setUserName] = useState("");
  const [scriptLoaded, setScriptLoaded] = useState(false);

 useEffect(() => {
   const storedUserName = localStorage.getItem("userName");
   if (!storedUserName) {
     router.push("/intro/name"); // Redirect if username is missing
   } else {
     setUserName(storedUserName);
   }
 }, [router]);

 const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault();

   if (!userLocation) {
     alert("Please enter your location");
     return;
   }

   const response = await submitUserData(userName, userLocation);
   console.log("Submitted:", response);
 };

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
          <form onSubmit={handleSubmit}>
            <label className="uppercase opacity-40 text-sm text-eerie">
              Click to type
            </label>
            <br />
            {scriptLoaded ? (
              <PlacesInput
                setUserLocation={setUserLocation}
                setCoordinates={setCoordinates}
              />
            ) : (
              <p>Loading Google Maps...</p>
            )}
          </form>
        </div>
        <span className="dotted-square"></span>
      </div>
      <div className="pl-small left-button absolute bottom-10">
        <BackButton />
      </div>
    </>
  );
};

export default UserLocationForm;
