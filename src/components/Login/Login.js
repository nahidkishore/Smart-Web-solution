import React, { useContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import logo from "../../images/logos/logo.png";
import firebaseConfig from "./firebase.config";
import "./Login.css";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };

        setLoggedInUser(signedInUser);

        // console.log(signInUser);

        storeAuthToken();
      })
      .catch(function (error) {
        var Message = error.message;
        console.log(Message);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  return (
    <div className="container mt-5 ">
      <div className="text-center">
        <img src={logo} alt="" />
      </div>
      <div className="d-flex justify-content-center">
        <div className="text-center  pt-5 m-5 style ">
          <h2>Login with</h2>
          <button
            onClick={handleGoogleSignIn}
            className="text-center login-button mb-2"
          >
            Continue with Google
          </button>

          <p>
            Don't have an account?
            <span
              onClick={handleGoogleSignIn}
              style={{ cursor: "pointer", color: "green", frontSize: "30px" }}
            >
              Create an account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
