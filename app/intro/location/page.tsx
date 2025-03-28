"use client";

import React, { useEffect, useState } from "react";
import BackButton from "@/components/ui/BackButton";
import { submitUserData } from "@/actions/actions";
import { useRouter } from "next/navigation";

function UserLocationForm() {
  const router = useRouter();
  const [userLocation, setUserLocation] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (!storedUserName) {
      // redirect to name form if userName is not set
      router.push("/intro/name");
    } else {
      setUserName(storedUserName);
    }
  },[router]);

     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();
  
       if (!userLocation) {
          alert("Please enter your location");
          return;   
       }
       
       const response = await submitUserData(userName, userLocation);
  
       return response;
      }

  return (
    <>
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
            <input
              className=" text-6xl tracking-tightest placeholder:text-eerie focus:placeholder:opacity-40 text-center underline underline-offset-8 decoration-1 outline-none  focus:placeholder:transition-all placeholder:transition-all transition-all"
              type="text"
              name="userLocation"
              placeholder="Where are you from?"
              onChange={(event) => setUserLocation(event.target.value)}
            />
          </form>
        </div>
        <span className="dotted-square"></span>
      </div>
      <div className="pl-small left-button absolute bottom-10">
        <BackButton />
      </div>
    </>
  );
}

export default UserLocationForm;
