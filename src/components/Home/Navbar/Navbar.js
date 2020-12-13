import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
//import { handleSignOut } from "../../Login/LoginManager";
const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  //let history = useHistory();

  /*   const handleLoggingButton = () => {
    if (loggedInUser.name || loggedInUser.email) {
      handleSignOut();
      setLoggedInUser({});
      history.push("/");
    } else {
      history.push("/login");
    }
  }; */

  return (
    <nav className="navbar navbar-expand-lg navbar-light pt-5 ">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="https://iili.io/3Hsc3N.png"
            alt=""
            className="img-fluid py-2"
            width="180px"
          />
        </Link>
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
              <Link className="nav-link  mr-2" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  mr-2 " to="/portfolio">
                Our Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link  mr-2 " to="/our-team">
                Our Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-2" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item mr-5">
              {loggedInUser.name || loggedInUser.email ? (
                <Link
                  to="/dashboard"
                  style={{ fontWeight: "bold", color: "black" }}
                  className="nav-link mr-2"
                >
                  <span> Dashboard</span>
                </Link>
              ) : (
                <Link to="/login" className="nav-link mr-2">
                  <button style={{ padding: "8px 25px" }} className=" button ">
                    Login
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
