import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faPlus,
  faUserPlus,
  faHome,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../images/logos/logo.png";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

const Sidebar = () => {
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-4 py-5 px-4"
      style={{ height: "80vh" }}
    >
      <Link to="/" className="">
       
        <img src={logo} alt="" className="img-responsive" />
      </Link>
      <ul className="list-unstyled">
        <li className="mt-2">
          <Link to="/dashboard/order" className="mt-2">
            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            <span>Order</span>
          </Link>
        </li>
        <li  className="mt-2">
          <Link to="/" >
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        <li className="mt-2">
          <Link to="/dashboard/order" className="">
            <FontAwesomeIcon icon={faHome} /> <span>Service List</span>
          </Link>
        </li>
        <li className="mt-2">
          <Link to="/dashboard/order" className="">
            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
          </Link>
        </li>
        <li className="mt-2">
          <Link to="/dashboard/order" className="">
            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/" className="">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
