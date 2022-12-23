import React, { useContext, Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./Users/UserContext";
import JoblyApi from "./JoblyApi";
import "./Homepage.css";

function Homepage() {
  const { currentUser } = useContext(UserContext);
  const [message, setMessage] = useState("Welcome to Jobly");
  console.debug("Homepage", "currentUser =", currentUser);
  console.debug(
    "Homepage",
    "message =",
    Boolean(message),
    "if true, showing message =",
    message
  );

  return (
    <div className="Homepage App-header">
      <div className="container text-lg-center">
        <h1 className="h1-welcome">Welcome to Jobly</h1>
        <p className="lead-paragraph">Your next dream job awaits you here.</p>
        {currentUser ? (
          <h2 className="welcome-msg">
            Welcome Back, {currentUser.firstName || currentUser.username}!
          </h2>
        ) : (
          <center>
            <Link className="btn btn-primary m-3" to="/login">
              Login
            </Link>
            <Link className="btn btn-primary m-3" to="/signup">
              Signup
            </Link>
          </center>
        )}
      </div>
    </div>
  );
}

export default Homepage;
