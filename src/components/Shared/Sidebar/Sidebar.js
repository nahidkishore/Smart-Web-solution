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
import logo from "../../../images/logos/logo.png";

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
      <div
        className="sidebar"
        /* style={{ height: "100vh" }} */
      >
        <div className="m-3 ml-3">
          <div className="mb-3 mt-3">
            <Link to="/">
              <img
                src={logo}
                alt=""
                style={{ width: "150px", height: "47px" }}
              />
            </Link>
          </div>
          <ul className="list-unstyled">
            <li>
              <Link to="/" className="nav-link">
                <FontAwesomeIcon icon={faHome} /> <span>Home</span>
              </Link>
            </li>

            {!isAdmin ? (
              <div>
                <li>
                  <Link to="dashboard/order/:serviceName" className="nav-link">
                    <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                    Order
                  </Link>
                </li>

                <li>
                  <Link to="/dashboard/orderedList" className="nav-link">
                    <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                    <span>Order Review</span>
                  </Link>
                </li>

                <li>
                  <Link to="/dashboard/reviews" className="nav-link">
                    <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
                    <span>Review</span>
                  </Link>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <Link to="/dashboard/serviceList" className="nav-link">
                    <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
                    <span>Service List</span>
                  </Link>
                </li>

                <li>
                  <Link to="/dashboard/addService" className="nav-link">
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    <span>Add Service</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/admin" className="nav-link">
                    <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                    <span>Make Admin</span>
                  </Link>
                </li>
              </div>
            )}

            <li>
              <Link to="/" className="nav-link">
                <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
