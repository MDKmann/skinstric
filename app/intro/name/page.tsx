"use client";

import React, { useCallback, useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { useSubmitStore } from "@/app/hooks/useSubmitStore";
import handleEnterKeyDown from "@/components/utils/handleEnterKeyDown";

function UserNameForm() {
  const router = useRouter();
  // State to hold the user's name
  const [userName, setUserName] = useState<string>("");
  // Zustand action to register the current page's submit handler
  const setSubmitHandlerFn = useSubmitStore(
    (state) => state.setSubmitHandlerFn
  );

  const handleUserSubmit = useCallback((): void => {
    if (!userName.trim()) {
      alert("Please enter your name");
      return;
    }

    // Store name for use on the next page
    localStorage.setItem("userName", userName.trim());

    // Navigate to the next form step
    router.push("/intro/location");
  }, [userName, router]);

  /**
   * Input change handler with proper typing
   */
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserName(event.target.value);
  };

  /**
   * Register the submit function in the global Zustand store
   * so it can be triggered from the footer's "Forward" button.
   */
  useEffect(() => {
    console.log("Registering submit handler from UserNameForm");
    setSubmitHandlerFn(handleUserSubmit);
  }, [setSubmitHandlerFn, handleUserSubmit]);

  return (
    <>
      <div>
        <span className="mt-20 wrapper uppercase font-semibold">
          To Start Analysis
        </span>
      </div>
      <div className="form__square--container w-full h-full">
        <div className="text-center absolute">
          <form onSubmit={handleUserSubmit}>
            <label className="uppercase opacity-40 text-sm text-eerie">
              Click to type
            </label>
            <br />
            <input
              className=" text-6xl tracking-tightest placeholder:text-eerie focus:placeholder:opacity-40 text-center underline underline-offset-8 decoration-1 outline-none  focus:placeholder:transition-all placeholder:transition-all transition-all"
              type="text"
              name="userName"
              placeholder="Introduce Yourself"
              autoComplete="off"
              required
              onChange={handleInputChange}
              onKeyDown={handleEnterKeyDown(handleUserSubmit, {
                ignoreAutocomplete: true,
              })}
            />
          </form>
        </div>
        <span className="dotted-square"></span>
        <span className="dotted__square--1"></span>
        <span className="dotted__square--2"></span>
      </div>
    </>
  );
}

export default UserNameForm;
