import React, { useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Nav/Navigation";
import Routes from "./Nav/Routes";
import UserContext from "./Users/UserContext";
import jwt from "jsonwebtoken";
import useLocalStorage from "./hooks/useLocalStorage";

export const TOKEN_STORAGE_ID = "jobly-token";

//   const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID, null);

function App() {
  const [token, setToken] = useLocalStorage("token", null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [applicationsIds, setApplicationsIds] = useState(new Set([]));

  console.debug("App", { token, currentUser, isLoading, isLoggedIn });

  useEffect(
    function updateUserInfo() {
      console.debug("App useEffect updateUserInfo", "token=", token);
      async function getCurrentUser() {
        try {
          JoblyApi.token = token;
          let { username } = jwt.decode(token);
          //https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
          // let user = await JoblyApi.getCurrentUser(username).then(user => setCurrentUser(user));
          let user = await JoblyApi.getCurrentUser(username);
          setCurrentUser(user);
          // when the current user is identified, set the isLoggedIn state to true
          setIsLoggedIn(true);
          // set the applicationsIds state to the current user's applications
          setApplicationsIds(new Set(user.applications));
        } catch (err) {
          console.error(`App error: problem loading`, err);
          setCurrentUser(null);
          setIsLoggedIn(false);
        }
      }
      if (token) {
        getCurrentUser();
      } else {
        setCurrentUser(null);
        setIsLoggedIn(false);
      }
    },
    [token]
  );

  function login(data) {
    async function loginUser() {
      try {
        let newToken = await JoblyApi.login(data); // returns a token
        // localStorage.setItem(newToken); // sets the token in local storage
        setToken(newToken); // sets the token in the state
        // return { success: true, login: true };
        return {
          success: true,
          setIsLoading: true,
          isLoggedIn: true,
          login: true,
        };
      } catch (err) {
        return { success: false, login: false, err };
      }
    }
    setIsLoggedIn(true);
    return loginUser();
  }

  function signup(data) {
    async function signupUser() {
      try {
        let newToken = await JoblyApi.signupUser(data);
        setToken(newToken); // sets the token in the state
        return { success: true, signup: true };
      } catch (err) {
        return { success: false, signup: false, err };
      }
    }
    setIsLoggedIn(true);
    return signupUser();
  }

  function logout() {
    setToken(null);
    setCurrentUser(null);
  }

  // function updateProfile(username, data) {
  //   async function updateUser() {
  //     try {
  //       let user = await JoblyApi.updateUser(username, data);
  //       setCurrentUser(user);
  //       return { success: true, update: true };
  //     } catch (err) {
  //       return { success: false, update: false, err };
  //     }
  //   }
  //   return updateUser();
  // }

  async function updateProfile(username, data) {
    try {
      let user = await JoblyApi.updateUser(username, data);
      setCurrentUser(user);
      return { success: true, update: true };
    } catch (err) {
      return { success: false, update: false, err };
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  function searchCompanies(search) {
    async function searchCompanies() {
      try {
        let companies = await JoblyApi.searchCompanies(search);

        return { success: true, search: true, companies };
      } catch (err) {
        return { success: false, search: false, err };
      }
    }

    return searchCompanies();
  }

  //check to see if user applied to job
  function hasAppliedToJob(id) {
    return currentUser.applications.includes(id);
  }

  function applyForJob(id) {
    if (hasAppliedToJob(id)) return;
    try {
      JoblyApi.applyForJob(currentUser.username, id);
      setApplicationsIds(new Set([...applicationsIds, id]));
    } catch (err) {
      return { success: false, apply: false, err };
    }
  }

  // function searchCompanies(search={}) {
  //   async function searchCompanies() {
  //     try {
  //       let companies = await JoblyApi.searchCompanies(search={});
  //       return { success: true, search: true };
  //     } catch (err) {
  //       return { success: false, search: false, err };
  //     }
  //   }
  //   searchCompanies();
  //   return { success: true };

  // }

  // return (
  //   <BrowserRouter>
  //     <UserContext.Provider value={{ currentUser, setCurrentUser }}>
  //       <Navigation logout={logout} />
  //       <Routes
  //         login={login}
  //         signup={signup}
  //         updateProfile={updateProfile}
  //         searchCompanies={searchCompanies}
  //       />
  //     </UserContext.Provider>
  //   </BrowserRouter>
  // );

  //have links route to the correct components
  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ currentUser, setCurrentUser, hasAppliedToJob, applyForJob }}
      >
        <div className="App">
          <Navigation logout={logout} />
          <Routes
            login={login}
            signup={signup}
            updateProfile={updateProfile}
            searchCompanies={searchCompanies}
          />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
