import React, { Component } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Features" className="nav-link">
            Features
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Pricing" className="nav-link">
            Pricing
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/FAQs" className="nav-link">
            FAQs
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
