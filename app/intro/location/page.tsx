"use client";

import React, { useCallback, useEffect, useState } from "react";

import { submitUserData } from "@/actions/actions";
import { useRouter } from "next/navigation";
import PlacesInput from "@/components/ui/PlacesInput";
import GoogleMapsLoader from "@/components/utils/GoogleMapsLoader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSubmitStore } from "@/app/hooks/useSubmitStore";

const UserLocationForm: React.FC = () => {
  const router = useRouter();
  const [userLocation, setUserLocation] = useState("");
  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [userName, setUserName] = useState("");
  const [scriptLoaded, setScriptLoaded] = useState(false);
  // Zustand action to register the current page's submit handler
  // Zustand action to register the current page's submit handler
  const setSubmitHandlerFn = useSubmitStore(
    (state) => state.setSubmitHandlerFn
  );

  // useGSAP(() => {
  //   const tl = gsap.timeline({ delay: 0.5 });
  //   tl.to(".dotted-square", { rotate: 90, duration: 10, delay: 0.5 });
  //   tl.to(
  //     ".dotted__square--1",
  //     { rotate: 135, duration: 15, delay: 0.5 },
  //     "-=85%"
  //   );
  //   tl.to(
  //     ".dotted__square--2",
  //     { rotate: 180, duration: 20, delay: 0.5 },
  //     "-=75%"
  //   );
  // });

  const handleLocationSubmit = useCallback((): void => {
    if (!userLocation) {
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

  //   const response = await submitUserData(userName, userLocation);
  //   console.log("Submitted:", response);
  //   // Navigate to the next form step
  //   router.push("/intro/scan");
  // },[userName, userLocation,router])

 useEffect(() => {
   const storedUserName = localStorage.getItem("userName");
   if (!storedUserName) {
     router.push("/intro/name"); // Redirect if username is missing
   } else {
     setUserName(storedUserName);
   }
   /**
    * Register the submit function in the global Zustand store
    * so it can be triggered from the footer's "Forward" button.
    */
   console.log("Registering submit handler from UserLocationForm");
   setSubmitHandlerFn(handleLocationSubmit);
 }, [setSubmitHandlerFn, handleLocationSubmit,router]);

 

   
   
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
          <form onSubmit={handleLocationSubmit}>
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
        <span className="dotted__square--1"></span>
        <span className="dotted__square--2"></span>
      </div>
    </>
  );
};

export default UserLocationForm;
