"use client";

import React, { useCallback, useEffect, useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useSubmitStore } from "@/app/hooks/useSubmitStore";
import handleEnterKeyDown from "@/components/utils/handleEnterKeyDown";
import useGlobalEnter from "@/components/utils/useGlobalEnterKey";

function UserNameForm() {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  const setSubmitHandlerFn = useSubmitStore(
    (state) => state.setSubmitHandlerFn
  );

  const handleUserSubmit = useCallback(() => {
    if (!userName.trim()) {
      alert("Please enter your name");
      return;
    }
    localStorage.setItem("userName", userName.trim());
    router.push("/intro/location");
  }, [userName, router]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) setUserName(storedName);
    setSubmitHandlerFn(handleUserSubmit);
  }, [setSubmitHandlerFn, handleUserSubmit]);

  useGlobalEnter(handleUserSubmit, "input[name='userName']");

  return (
    <>
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
              handleUserSubmit();
            }}
          >
            <label className="uppercase opacity-40 text-sm text-eerie">
              Click to type
            </label>
            <br />
            <input
              className="text-[clamp(1rem,3.375vw,3.375rem)] tracking-tightest placeholder:text-eerie focus:placeholder:opacity-40 text-center underline underline-offset-8 decoration-1 outline-none focus:placeholder:transition-all placeholder:transition-all transition-all"
              name="userName"
              placeholder="Introduce Yourself"
              value={userName}
              onChange={handleInputChange}
              onKeyDown={handleEnterKeyDown(handleUserSubmit)}
              autoComplete="off"
              autoFocus={!localStorage.getItem("userName")}
              required
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
