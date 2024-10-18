import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className=" flex flex-row justify-center " data-text="Navbar">
      <div className="wrapper w-11/12 flex flex-row justify-evenly ">
        <Link
          to="/"
          className="neon-buttons glitch is-glitching text-3xl max-sm:text-xs "
          data-text="Home"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="neon-buttons glitch is-glitching text-3xl max-sm:text-xs "
          data-text="Hobbies"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="neon-buttons glitch is-glitching text-3xl max-sm:text-xs "
          data-text="Portfolio"
        >
          Portfolio
        </Link>
      </div>
    </div>
  );
}
