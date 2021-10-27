import React, { Component } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <ul className="nav nav-pills">
      
      <li className="nav-item">
          <Link to="/Movies" className="nav-link">
            Movies
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
