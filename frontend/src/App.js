import React, { useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import useLocalStorage from "./hooks/useLocalStorage";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Nav/Navigation"
import Routes from "./Nav/Routes";
import UserContext from "./Users/UserContext";
import jwt from "jsonwebtoken";

// Key name for storing the token in local storage
const TOKEN_KEY = "jobly-token";


function App() {
  const [ currentUser, setCurrentUser ] = useState(null);
  const [ token, setToken ] = useLocalStorage(TOKEN_KEY);

useEffect(() => {
  async function getCurrentUser() {
    if (token) {
      try {
        const user = jwt.decode(token);
        JoblyApi.setToken(token);
        const currentUser = await JoblyApi.getCurrentUser(user.username);
        setCurrentUser(currentUser);
      } catch (err) {
        setCurrentUser(null);
      }
    }
  }
  getCurrentUser();
}, [token]);

function logout() {
  setToken(null);
  setCurrentUser(null);
}

async function login(username, password) {
  try {
  const user = await JoblyApi.login(username, password);
  setToken(user.token);
  return { success: true };
  } catch (err) {
  return { success: false, message: err.message };
  }
}

async function signup( username, password, firstName, lastName, email ) {
  try {
  const user = await JoblyApi.signup(username, password, firstName, lastName, email);
  setToken(user.token);
  return { success: true };
  } catch (err) {
  return { success: false, message: err.message };
  }
}

  return (
    <BrowserRouter>
    <UserContext.Provider value={{ currentUser, login, signup, logout }}>
      <Navigation logout={logout} />
      </UserContext.Provider>
      </BrowserRouter>

  );
}




export default App;
