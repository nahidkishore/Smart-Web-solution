import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
  faUserPlus,
  faHome,
  faPlus,
  faList,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import "./Sidebar.css";


const Sidebar = () => {

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
      <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/order" className="text-white">
            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            <span>Order</span>
          </Link>
        </li>
        
       
        
            <li>
              <Link to="/dashboard/serviceList" className="text-white">
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                <span>Service List</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/reviews" className="text-white">
                <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
                <span>Review</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/addService" className="text-white">
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/admin" className="text-white">
                <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                <span>Make Admin</span>
              </Link>
            </li>
         
            <li>
              <Link to="/doctors/settings" className="text-white">
                <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
                <span>Settings</span>
              </Link>
            </li>
          
      
      </ul>
      <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
    </div>
  );
};

export default Sidebar;