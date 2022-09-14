import React,{useState,useEffect,Component} from "react";
import JoblyApi from "./JoblyApi";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./Nav/Navigation";
import Routes from "./Nav/Routes";
import UserContext from "./Users/UserContext";
import jwt from "jsonwebtoken";
import useLocalStorage from "./hooks/useLocalStorage";

export const TOKEN_STORAGE_ID="jobly-token";



//   const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID, null);


  /* Make login, signup, and logout functions in the App component.

By passing login, logout, and signup functions down to the login and signup forms and the navigation bar, 
they’ll be able to call centralized functions to perform these processes.

Add token as a piece of state in App, along with state for the currentUser.

Create an effect triggered by a state change of the token: this should call the backend to get
 information on the newly-logged-in user and store it in the currentUser state.

Expose the current user throughout the app with a context provider. 

This will make it easy to refer to the current app in navigation, on pages, and so on.

This would be an excellent place to use useContext, so you can store the current user’s info high up in your hierarchy, 
like on the App component. */

function App() {
  const [token, setToken] = useLocalStorage('token', null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  console.debug("App", { token, currentUser, isLoading, isLoggedIn });


  useEffect(function updateUserInfo() {
    async function getCurrentUser() {
      try {
        JoblyApi.token = token;
        let { username } = jwt.decode(token);
        let user = await JoblyApi.getCurrentUser(username);
        setCurrentUser(user);
        setIsLoggedIn(false);
      } catch (err) {
        console.error("App error", err);
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
  }, [token]);

  function login(data) {
    async function loginUser() {
      try {
        let newToken  = await JoblyApi.login(data); // returns a token
        // localStorage.setItem(newToken); // sets the token in local storage
        setToken(newToken); // sets the token in the state
        return { success: true, login: true };
      } catch (err) {
        return { success: false, login: false, err };
      }
    }
    setIsLoggedIn(true);
    loginUser(); 
  }

  function signup(data) {
    async function signupUser() {
      try {
        let newToken  = await JoblyApi.signupUser(data); // returns a token
        setToken(newToken); // sets the token in the state
        return { success: true, signup: true };
      } catch (err) {
        return { success: false, signup: false, err };
      }
    }
    setIsLoggedIn(true);
    signupUser();
  }

      function logout() {
        setToken(null);
        setCurrentUser(null);
  }

  function updateProfile(username, data={}) {
    async function updateUser() {
      try {
        let user = await JoblyApi.updateUser(username, data={});
        setCurrentUser(user);
        return { success: true, update: true };
      } catch (err) {
        return { success: false, update: false, err };
      }
    }
    updateUser();
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

    searchCompanies();
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


  return (
    <BrowserRouter>
      <UserContext.Provider value={{currentUser, setCurrentUser }}>

        <Navigation logout={logout}  />
        <Routes login={login} signup={signup} updateProfile={updateProfile} searchCompanies={searchCompanies}/>
      </UserContext.Provider>
    </BrowserRouter>
  );      
}




export default App;