import React from "react";
import { GiTornadoDiscs } from "react-icons/gi";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <span>
            <Link to="/">
              <GiTornadoDiscs size={35} color="#fff" />
            </Link>
          </span>
          <h1 className="navbar-title">Rick and Morty Episodes</h1>
        </div>
        <a
          className="btn"
          target="_blank"
          rel="noreferrer"
          href="https://rickandmortyapi.com/documentation"
        >
          REST API DOCS
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
