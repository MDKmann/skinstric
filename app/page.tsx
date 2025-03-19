import Image from "next/image";
import arrowIcon from "../public/button-icon-shrunk.svg";

export default function Home() {
  return (
    <main className=" text-eerie flex grow shrink basis-auto  ">
      <div className="page wrapper">
        <div className="index-content page">
          <div className="m-auto row-span-2">
            <h1 className=" heading text-center ">
              Sophisticated
              <br />
              skincare
            </h1>
          </div>
          <div className="row-span-3 flex items-end">
            <p className="line-clamp-3 text-wrap w-80 uppercase text-sm leading-roomy">
              Skinstric developed an A.I. that creates a highly-personalised
              routine tailored to what your skin needs.
            </p>
          </div>
        </div>

        <div className="index-dotted-square index-left">
          <span className="dotted-square "></span>
          <div className="pl-small">
            <a href="" className="">
              <span className="icon-button solid-square align-middle ">
                <span className="icon-button icon-button-size m-auto">
                  <Image
                    src={arrowIcon}
                    alt="Discover a.i. arrow icon"
                    className="rotate-315"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </span>
              </span>
              <span className="pl-4 uppercase text-sm font-semibold">
                Discover A.I.
              </span>
            </a>
          </div>
        </div>

        <div className="index-dotted-square index-right">
          <div className="dotted-square flex justify-center items-center">
            <div className="pr-48 -rotate-45">
              <a href="" className="">
                <span className="pr-4 text-sm font-semibold">TAKE TEST</span>
                <span className="icon-button solid-square align-middle ">
                  <span className="icon-button icon-button-size m-auto">
                    <Image
                      src={arrowIcon}
                      alt="Take test arrow icon"
                      className="rotate-135"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
