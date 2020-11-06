import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  faSignOutAlt,
  faUserPlus,
  faHome,
  faPlus,
  faList,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import "./Sidebar.css";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://secure-fortress-41944.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return (
    <section>
      {/* <div className="row">
       <h2 className="ml-2 text-brand">welcome to {loggedInUser.name}</h2> 
    
      </div> */}
 <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4 w-100"
      style={{ height: "100vh" }}
    >
     
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>

        {!isAdmin ? (
          <div>
            <li>
              <Link to="dashboard/order/:serviceName" className="text-white">
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                <span>Order</span>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/orderedList" className="text-white">
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                <span>Order Review</span>
              </Link>
            </li>

            <li>
              <Link to="/dashboard/reviews" className="text-white">
                <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
                <span>Review</span>
              </Link>
            </li>
          </div>
        ) : (
          <div>
            <li>
              <Link to="/dashboard/serviceList" className="text-white">
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                <span>Service List</span>
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
          </div>
        )}

        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
    </section>
   
  );
};

export default Sidebar;
