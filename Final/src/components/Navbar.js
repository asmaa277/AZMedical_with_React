import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg   position-sticky  top-0 start-0 sticky-top  w-100 fs-5 z-3 ">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand fw-bolder fs-3 text-light">
            {" "}
            Medical
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link m-2 text-light">
                  {" "}
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link  m-2">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/dataShow" className="nav-link  m-2">
                  Gallary
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav-link  m-2">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
