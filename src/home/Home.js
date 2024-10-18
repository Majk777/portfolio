import React, { useState, useEffect } from "react";
import "./Home.css";
import Popup from "../components/Popup";

export default function Home() {
  const [popupState, setpopupState] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setpopupState(false);
    }, 7500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main-page h-screen">
      {popupState && <Popup />}

      <div className="relative h-96">
        <div className="main-theme-container banner-text h-full">
          <h1 className="main-theme text-mega max-xl:text-9xl max-md:text-6xl">
            MICHAL
          </h1>
          <h2 className="main-theme-splash text-splashmega max-xl:text-6xl max-md:text-4xl">
            NIEZGODA
          </h2>
        </div>
      </div>
      <div className="sun bg-cyan-100 w-40 h-40 absolute"></div>

      <div className="wrapper-of-synth-anime h-1/2  relative overflow-hidden">
        <div className="synth-background"></div>
        <div className="bg-horizon bg-cyan-400 absolute"></div>
        <div className="wrapperino absolute w-full h-full">
          <div className="container-b w-full h-full">
            <div className="synth-theme-wrapper-b">
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
              <div className="item-b"></div>
            </div>
          </div>
        </div>
        <div className="container-rotate-b absolute w-full h-full">
          <div className="synth-theme-wrapper-rotate-b">
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
            <div className="item-rotate-b"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
