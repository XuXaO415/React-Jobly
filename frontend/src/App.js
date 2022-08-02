// import ReactHierarchy from "./React-Jobly-Hierarchy-Design";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Nav/NavBar";
import { Routes } from "react-router-dom";
import { UserContext } from "./Users/UserContext";
import { Jwt } from "jsonwebtoken";
import JoblyApi from "./JoblyApi";
import useLocalStorage from "./hooks/useLocalStorage";

 // key name for local storing the token in local storage
  const TOKEN_KEY = "jobly-token";
  
  // useLocalStorage hook to get the token from local storage
  // const [token, setToken] = useLocalStorage(TOKEN_KEY);


function App() {
  const [token, setToken] = useLocalStorage(TOKEN_KEY);
  const [currentUser, setCurrentUser] = useState(null);
  const [infoLoaded, setInfoLoaded] = useState(false);

  // useEffect to get the token from local storage
  useEffect(() => {
    async function getCurrentUser() {
      if(token) {
        try {
          // get the current user from the API using the token from local storage as the authorization token  
          //MOTE: (this is the same token we used to login)
          const user = await JoblyApi.getCurrentUser(Jwt.decode(token).sub);
          // set the current user to the user we got from the API
          setCurrentUser(user);
        }
        catch(err) {
          console.error("There was a problem loading the current user", err);
          // if there is an error, clear the token from local storage
          setToken(null);
        }
      }
      // set the infoLoaded to true to indicate that the info has been loaded
      setInfoLoaded(true);
    }
    getCurrentUser();
  }, [setToken, token]);

  // if the info has not been loaded, show a loading message
  if(!infoLoaded) {
    return <div>Loading...</div>;
  }

  //TODO: Create function to signup user
  async function signup(user) {
    try {
      // signup the user using the API
      const newUser = await JoblyApi.signup(user);
      // set the token to the token we got from the API
      setToken(newUser.token);
      // set the current user to the user we got from the API
      setCurrentUser(newUser.user);
    }
    catch(err) {
      console.error("There was a problem signing up", err);
    }
  }

  //TODO: Create function to login user






    


}

export default App;