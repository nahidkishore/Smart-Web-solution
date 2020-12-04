import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const isLoggedIn = () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      return false;
    }
  };
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || isLoggedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
