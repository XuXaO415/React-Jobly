import React, { useContext, Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './Users/UserContext'
import JoblyApi from './JoblyApi'
import './Homepage.css'


function Homepage() {
  const { currentUser } = useContext(UserContext);
  const [message, setMessage] = useState('Welcome to Jobly');
  console.debug("Homepage", "currentUser =", currentUser);
  console.debug("Homepage", "message =", Boolean(message), "if true, showing message =", message );

  // useEffect(() => {
  //   async function getMessage() {
  //     if (currentUser) {
  //       setMessage(`Welcome Back, ${currentUser.firstName || currentUser.username}!`);
  //     } else {
  //       setMessage('Welcome to Jobly');
  //     }
  //   }
  //   getMessage();
  // }, [currentUser]);

  return (
    <div className="Homepage App-header mt-5">
      <div className="container text-lg-center">
        <h1 className="h1-welcome">Welcome to Jobly</h1>
        <p className="lead-paragraph">Your next dream job awaits you here.</p>
        {currentUser ? (
          <h2>Welcome Back, {currentUser.firstName || currentUser.username}!</h2>
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
