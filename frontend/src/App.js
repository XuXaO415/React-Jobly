// import ReactHierarchy from "./React-Jobly-Hierarchy-Design";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Nav/NavBar";
import Routes from "./Routes";
import  UserContext  from "./Users/UserContext";
import jwt  from "jsonwebtoken";
import JoblyApi from "./JoblyApi";
import useLocalStorage from "./hooks/useLocalStorage";



// token key name  for storing token in local storage
export const TOKEN_KEY = "jobly-token";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_KEY);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    async function getCurrentUser() {
      if(token) {
        try {
          const user = await JoblyApi.getUser(token);
          setCurrentUser(user);
          setIsLoggedIn(true);
        } catch (err) {
          console.error("An error occurred while getting the current user:", err);
        }
      }
    }
    getCurrentUser();
  }
  , [token]);

  async function loginUser(user) {
    try {
      const token = await JoblyApi.login(user);
      setToken(token);
      setIsLoggedIn(true);
    } catch (err) {
      console.error("An error occurred while logging in:", err);
    }
  }

  async function signupUser(user) {
    try {
      const token = await JoblyApi.signup(user);
      setToken(token);
      setIsLoggedIn(true);
    } catch (err) {
      console.error("An error occurred while signing up:", err);
    }
  }
  
  async function logoutUser() {
    try {
      await JoblyApi.logout(token);
      setToken(null);
      setIsLoggedIn(false);
    } catch (err) {
      console.error("An error occurred while logging out:", err);
    }
  }

  return (
    <UserContext.Provider value={{ currentUser, loginUser, signupUser, logoutUser, isLoggedIn }}>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </UserContext.Provider>
  );
}









//         const user = await JoblyApi.getCurrentUser(token);
//         setCurrentUser(user);
//         setIsLoggedIn(true);
//       }
// }
//     getCurrentUser();
//   }, [token]);
// }


export default App;

