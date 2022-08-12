import React,{ useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import useLocalStorage from "./hooks/useLocalStorage";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./Nav/Navigation";
import Routes from "./Nav/Routes";
import UserContext from "./Users/UserContext";
import jwt from "jsonwebtoken";
import axios from "axios";



// Key name for storing the token in local storage
export const TOKEN_STORAGE_ID = "jobly-token";


function App() {

    const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
    const [user, setCurrentUser] = useState(null);
    const [data, setData] = useState(false);

    useEffect(() => { 
        async function getUser() {
            try {
                const { username } = jwt.decode(token);
                const user = await JoblyApi.getCurrentUser(username);
                setCurrentUser(user);
            } catch (err) {
                setCurrentUser(null);
        }
        setData(true);
    }
    setData(false);
    getUser();
    }, [token]);

    const logout = () => {
        setToken(null);
        setCurrentUser(null);
    };

    const login = async (username, password) => {
        try {
            const { token } = await JoblyApi.login(username, password);
            setToken(token);
        } catch (err) {
            console.error(err);
        }
    }



}

// function App() {
//     // const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
//     const [token, setToken] = useLocalStorage("token", null);
//     const [currentUser, setCurrentUser] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);

//   console.debug(
//       "App",
//       "currentUser=", currentUser,
//       "token=", token,
//         "isLoading=", isLoading
//   );

//   useEffect(function loadUserInfo() {
//     console.debug("App", "loadUserInfo", "token=", token);
//   });

//     async function handleLogin(user) {
//         if(!user.username || !user.password) {
//             return Promise.reject("username and password are required");
//         }
//         setIsLoading(true);
//         try {
//             const { data } = await axios.post("/login", user);
//             setToken(data.token);
//             setCurrentUser(data.user);
//         } catch (err) {
//             console.error("App", "handleLogin", "err=", err);
//             return Promise.reject(err.response.data.error);
//         } finally {
//             setIsLoading(false);
//         }
//     }

//     async function handleSignup(user) {
//         if(!user.username || !user.password) {
//             return Promise.reject("username and password are required");
//         }
//         setIsLoading(true);
//         try {
//             const { data } = await axios.post("/users", user);
//             setToken(data.token);
//             setCurrentUser(data.user);
//         } catch (err) {
//             console.error("App", "handleSignup", "err=", err);
//             return Promise.reject(err.response.data.error);
//         } finally {
//             setIsLoading(false);
//         }
//     }

//     async function handleLogout() {
//         setToken(null);
//         setCurrentUser(null);
//     }

//     return (
//         <BrowserRouter>
//             <UserContext.Provider value={{
//                 currentUser,
//                 isLoading,
//                 handleLogin,
//                 handleSignup,
//                 handleLogout
//             }}>
//                 <Navigation />
//                 <Routes />
//             </UserContext.Provider>
//         </BrowserRouter>
//     );
// }



    // useEffect(() => {
    //     async function getCurrentUser() {
    //         if (token) {
    //             const currentUser = await jwt.verify(token, process.env.REACT_APP_JWT_SECRET);
    //             setCurrentUser(currentUser);
    //         }
    //         setIsLoading(false);
    //     }
    //     getCurrentUser();
    // }, [token]);

    // // Check if there is a token in local storage
    // useEffect(()=>{
    //     async function getCurrentUser() {
    //         if(token){
    //             try {
    //                 const { username } = jwt.decode(token);
    //                 JoblyApi.token = token;
    //                 const currentUser = await JoblyApi.getCurrentUser(username, token);
    //                 setCurrentUser(currentUser);
    //             } catch (err) {
    //                 console.error(err);
    //                 setCurrentUser(null);
    //             }
    //         }
    //     }
    //     getCurrentUser();
    //     }, [token]);



    // function logout() {
    //     console.debug("logout success=", true);
    //     setToken(null);
    //     setCurrentUser(null);
    //     return { success: true };
    // }


    // // Login the user and store the token in local storage a
    // async function login(data) {
    //     const { username, password } = data;
    //     try {
    //         const { token } = await JoblyApi.login(username, password);
    //         setToken(token);
    //         return { success: true };
    //     } catch (err) {
    //         console.error("Login failed", err);
    //         return { success : false, message : err.message };
    //     }
    // }

    // // Signup the user and store the token in local storage
    // async function signup(data) {
    //     try {
    //         const { token } = await JoblyApi.signup(data);
    //         setToken(token);
    //         return { success: true };
    //     } catch (err) {
    //         console.error("Signup failed", err);
    //         return { success : false, message : err.message };
    //     }
    // }


//     return (
//         <BrowserRouter>
//         <UserContext.Provider value={{ currentUser, setCurrentUser, login, logout, signup }}>
//             <Navigation login={login} />
//             <Routes login={login} signup={signup} />
//             </UserContext.Provider>
//         </BrowserRouter>
//     );
// }

export default App;