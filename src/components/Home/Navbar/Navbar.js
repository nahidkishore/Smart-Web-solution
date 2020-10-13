import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logos/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light pt-5 mr-5 ml-5">
      <a className="navbar-brand" href="">
        <img src={logo} alt="" className="img-fluid ml-5 py-2" width="180px" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto" style={{ fontSize: " 1.42em" }}>
          <li className="nav-item active">
            <Link className="nav-link mr-5" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 " to="/login">
              Our Portfolio
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link mr-5 " to="/dashboard/AllPatients">
              Our Team
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5" to="dashboard/appointment">
              Contact Us
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link mr-5" to="dashboard/appointment">
              <button className=" button ">Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
