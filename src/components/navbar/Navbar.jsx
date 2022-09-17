import React from "react";
import { GiTornadoDiscs } from "react-icons/gi";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <span>
            <GiTornadoDiscs size={35} />
          </span>
          <h1 className="navbar-title">Rick and Morty</h1>
        </div>
        <button className="btn">REST API DOCS</button>
      </div>
    </nav>
  );
};

export default Navbar;
