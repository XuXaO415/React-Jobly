import React,{ useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import useLocalStorage from "./hooks/useLocalStorage";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./Nav/Navigation";
import Routes from "./Nav/Routes";
import UserContext from "./Users/UserContext";
import jwt from "jsonwebtoken";

// Key name for storing the token in local storage
export const TOKEN_STORAGE_ID="jobly-token";

function App() {
    const [token,setToken] = useLocalStorage(TOKEN_STORAGE_ID);
    const [currentUser, setCurrentUser]=useState(null);

    // console.debug("App rendered=", Boolean, "token=", token, 
    // "currentUser=", currentUser);


  console.debug(
      "App",
      "currentUser=", currentUser,
      "token=", token,
  );


    // Check if there is a token in local storage
    useEffect(()=>{
        async function getCurrentUser() {
            if(token){
                try {
                    const { username } = jwt.decode(token);
                    JoblyApi.token = token;
                    const currentUser = await JoblyApi.getCurrentUser(username, token);
                    setCurrentUser(currentUser);
                } catch (err) {
                    console.error(err);
                    setCurrentUser(null);
                }
            }
        }
        getCurrentUser();
        }, [token]);

    // Logout the current user by clearing the token and current user and redirecting to the homepage
    // async function logout(data) {
    //     console.debug("logout success=", data);
    //     try{
    //         await JoblyApi.logout(data);
    //         setToken(null);
    //         setCurrentUser(null);
    //         return { success: true };
    //     } catch(err){
    //         console.error("Sign up failed", err);
    //         return { success : false, message : err.message };
    //     }
    // }


    function logout() {
        console.debug("logout success=", true);
        setToken(null);
        setCurrentUser(null);
        return { success: true };
    }


    // Login the user and store the token in local storage a
    async function login(data) {
        const { username, password } = data;
        try {
            const { token } = await JoblyApi.login(username, password);
            setToken(token);
            return { success: true };
        } catch (err) {
            console.error("Login failed", err);
            return { success : false, message : err.message };
        }
    }

    // Signup the user and store the token in local storage
    async function signup(data) {
        try {
            const { token } = await JoblyApi.signup(data);
            setToken(token);
            return { success: true };
        } catch (err) {
            console.error("Signup failed", err);
            return { success : false, message : err.message };
        }
    }


    return (
        <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser, login, logout, signup }}>
            <Navigation login={login} />
            <Routes login={login} signup={signup} />
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;