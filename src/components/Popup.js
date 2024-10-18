import React from "react";
import "./Popup.css";

export default function Popup() {
  return (
    <div className="popup fixed w-screen h-full overflow-hidden">
      <div className="popup-blowup-screen absolute h-full "></div>
      <div className="sun-loader bg-cyan-100  absolute"></div>

      <div className="relative h-full">
        <div className="main-theme-container h-full">
          <h1 className="main-theme text-mega max-xl:text-9xl max-md:text-6xl">
            MICHAL
          </h1>
          <h2 className="main-theme-splash text-splashmega max-xl:text-6xl max-md:text-4xl">
            NIEZGODA
          </h2>
        </div>
      </div>
      <div className="popup-blowup absolute flex ">
        <div className="popup-left__blow  h-full w-1/2 flex flex-row-reverse">
          <div className="popup-left--loader bg-cyan-100"></div>
        </div>
        <div className="popup-right__blow h-full w-1/2">
          <div className="popup-right__blow--loader bg-cyan-100"></div>
        </div>
      </div>
    </div>
  );
}
