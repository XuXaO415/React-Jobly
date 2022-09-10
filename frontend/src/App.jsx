import React, { useState, useEffect, Component } from "react";
import JoblyApi from "./JoblyApi";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Nav/Navigation";
import Routes from "./Nav/Routes";
import UserContext from "./Users/UserContext";
import jwt from "jsonwebtoken";
import useLocalStorage from "./hooks/useLocalStorage";

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(false);

  console.debug("App", { token, currentUser, isLoading });

//   useEffect(function fetchCurrentUser(){
//     async function getCurrentUser(){
//       if(token) {
//         try {
        
//           // console.debug("App", "token=", token);
//           let  username  = jwt.decode(token);
//           JoblyApi.token = token;
//           let user = await JoblyApi.getCurrentUser(username);
//           // console.debug("App", "currentUser=======", currentUser);
//           setCurrentUser(user);
//         } catch (err) {
//           console.error("App problem:", err);
//           setCurrentUser();
//       }
//     }
//     setIsLoading(false);
//   }
//   getCurrentUser();
//   setIsLoading(false);
// }, [token]);


  // useEffect(function getUserInfo() {
  //   async function getCurrentUser() {
  //     if (token) {
  //       try {
  //         let user = await JoblyApi.getCurrentUser(
  //           jwt.decode(token).username
  //         );
  //         setCurrentUser(user);
  //       } catch (err) {
  //         setCurrentUser(null);
  //       }
  //     }
  //     setIsLoading(false);
  //   }
  //   getCurrentUser();
  // } , [token]);
  

//Create an async function to signup a new user using the JoblyApi. signup method
  async function signup(data) {
    try {
      let token = await JoblyApi.signup(data);
      // setToken(token);
      localStorage.setToken(TOKEN_STORAGE_ID, token);
      return { success: true, signup: true };
    } catch (err) {
      console.error("Signup failed:", err);
      return { success: false, signup: false, err };
    }
  }
  //login a user using the JoblyApi.login method

  async function login(data) {
    try {
      let token = await JoblyApi.login(data);
      setToken(token);
      // localStorage.setToken(TOKEN_STORAGE_ID, token);
      return { success: true, login: true };
    } catch (err) {
      console.error("Login failed:", err);
      return { success: false, login: false, err };
    }
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
    console.log("logout");
  }

//   async function updateUser(data) {
//     try {
//       let user = await JoblyApi.updateUser(data);
//       setCurrentUser(user);
//       return { success: true, update: true };
//     } catch (err) {
//       console.error("Update failed:", err);
//       return { success: false, update: false, err };
//     }
// }

/* check if currentUser applied for job */
  function checkIfApplied(jobId) {
    if (currentUser) {
      return currentUser.jobsApplied.includes(jobId);
    }
    return false;
  }

// check if user applied to a job using the JoblyApi.applyForJob method
async function applyForJob(jobId) {
  try {
    if(checkIfApplied(jobId)) {
      throw new Error("Already applied for this job");
    } else {
      let user = await JoblyApi.applyForJob(jobId);
      // setCurrentUser(user.jobsApplied.push(jobId));
      setCurrentUser({ ...currentUser, jobsApplied: [...currentUser.jobsApplied, jobId] });
      return { success: true, apply: true };
    } 
  } catch (err){
    console.error("Apply failed:", err);
    return { success: false, apply: false, err };
  }
}

if (isLoading) {
  return <div>Loading...</div>;
}

  return (
    <div className="App">
    <BrowserRouter>
      <UserContext.Provider value={{ 
        currentUser, 
        setCurrentUser, 
        applyForJob, 
        checkIfApplied,
      }}>
        <Navigation logout />
        <Routes signup={signup} login={login} />
      </UserContext.Provider>
    </BrowserRouter>
    </div>
  );
}
  
  
  



export default App;