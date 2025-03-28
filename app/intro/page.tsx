"use client";

import React from "react";
import BackButton from "@/components/ui/BackButton";
import { submitUserData } from "@/actions/actions";

function formPage() {
  // const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
  //   if (
  //     (e.key === "Enter" || e.key === "NumpadEnter")
  //   ) {
  //     e.preventDefault();
  //     e.currentTarget.form?.requestSubmit();
  //   }
  // };


  return (
    <>
      <div>
        <span className="mt-20 wrapper uppercase font-semibold">
          To Start Analysis
        </span>
      </div>
      <div className="form__square--container w-full h-full">
        <div className="text-center absolute">
          <form action={submitUserData}>
            <label className="uppercase opacity-40 text-sm text-eerie">
              Click to type
            </label>
            <br />
            <input
              // onKeyDown={handleKeyDown}
              className=" text-6xl tracking-tightest placeholder:text-eerie focus:placeholder:opacity-40 text-center underline underline-offset-8 decoration-1 outline-none  focus:placeholder:transition-all placeholder:transition-all transition-all"
              type="text"
              name="userName"
              placeholder="Introduce Yourself"
            />
          </form>
        </div>
        <span className="dotted-square"></span>
      </div>
      <div className="pl-small left-button absolute bottom-10">
        <BackButton />
      </div>
      {/* <div className="pl-small left-button absolute bottom-10">
        <Link href="" className="cursor-pointer left-icon">
          <span className="icon-button solid-square align-middle ">
            <span className="icon-button icon-button-size m-auto flex items-center justify-center">
              <Image
                src={leftArrowIcon}
                alt="Discover a.i. arrow icon"
                className="rotate-195"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </span>
          </span>
          <span className="pl-4 uppercase text-sm font-semibold left-button-label">
            Back
          </span>
        </Link>
      </div> */}
    </>
  );
}

export default formPage;
