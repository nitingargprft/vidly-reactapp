import React, { Component } from "react";
const NavBar = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            About
          </a>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
