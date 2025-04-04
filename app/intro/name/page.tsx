"use client";

import React, { useState } from "react";
import BackButton from "@/components/ui/BackButton";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function UserNameForm() {
  const router = useRouter();
  const [userName, setUserName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!userName) {
      alert("Please enter your name");
      return;
    }
    // store userName in local storage for next page
    localStorage.setItem("userName", userName);

    // Flow to location form
    router.push("/intro/location");
  };
  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     repeat: -1,
  //     paused: false,
  //     ease: "linear.easeNone",
  //     onRepeat: () => {
  //       // tl.invalidate();
  //       tl.restart();// Invalidate to restart from the end
  //     },
  //   });
  //   tl.to(".dotted-square", { rotate: 360, duration: 60 });
  //   tl.to(
  //     ".dotted__square--1",

  //     { rotate: 360, duration: 60 },
  //     "-=85%"
  //   );
  //   tl.to(
  //     ".dotted__square--2",
  //     { rotate: 360, duration: 60 },
  //     "-=85%"
  //   );
  // });

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
              name="userName"
              placeholder="Introduce Yourself"
              onChange={(event) => setUserName(event.target.value)}
            />
          </form>
        </div>
        <span className="dotted-square"></span>
        <span className="dotted__square--1"></span>
        <span className="dotted__square--2"></span>
      </div>
      <div className="pl-small left-button absolute bottom-10">
        <BackButton />
      </div>
    </>
  );
}

export default UserNameForm;
