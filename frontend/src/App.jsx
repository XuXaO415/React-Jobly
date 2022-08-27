import React,{ useState, useEffect, Component } from "react";
import JoblyApi from "./JoblyApi";
import useLocalStorage from "./hooks/useLocalStorage";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./Nav/Navigation";
import Routes from "./Nav/Routes";
import UserContext from "./Users/UserContext";
import jwt from "jsonwebtoken";

export const TOKEN_STORAGE_ID = "jobly-token";

class App extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            // token: useLocalStorage(TOKEN_STORAGE_ID),
            token: null,
            currentUser: null,
            data: false, 
            isLoading: true
        };

        this.logout = this.logout.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    async componentDidMount() {
        if(this.state.token) {
            try {
                const { username } = jwt.decode(this.state.token); 
                const user = await JoblyApi.getCurrentUser(username);
                this.setState({ currentUser: user, isLoading: false });
            } catch (err) {
                this.setState({ currentUser: null, isLoading: false });
            }
        } else {
            this.setState({ isLoading: false });
        }
    }

    async logout() {
        localStorage.removeItem(TOKEN_STORAGE_ID);
        this.setState({ token: null, currentUser: null });
    }

    async login(username, password) {
        try {
            const { token } = await JoblyApi.login(username, password);
            localStorage.setItem(TOKEN_STORAGE_ID, token);
            this.setState({ token });
            return { success: true, login: true };
        } catch (err) {
            return { success: false, login: false, err };
        }
    }

    async signup(username, password, firstName, lastName, email) {
        try {
            const { token } = await JoblyApi.signupUser(username, password, firstName, lastName, email);
            localStorage.setItem(TOKEN_STORAGE_ID, token);
            this.setState({ token });
            return { success: true, register: true };
        } catch (err) {
            return { success: false, register: false, err };
        }
    }

    async updateUser(username, password, firstName, lastName, email) {
        try {
            const { token } = await JoblyApi.updateUser(username, password, firstName, lastName, email);
            localStorage.setItem(TOKEN_STORAGE_ID, token);
            this.setState({ token });
            return { success: true, update: true };
        } catch (err) {
            return { success: false, update: false, err };
        }
    }

    async appliedToJob(jobId) {
        try {
            const { token } = await JoblyApi.appliedToJob(jobId);
            localStorage.setItem(TOKEN_STORAGE_ID, token);
            this.setState({ token });
            return { success: true, applied: true };
        } catch (err) {
            return { success: false, applied: false, err };
        }
    }


    render() {
        if(this.state.isLoading) {
            return <div>Loading...</div>;
        }
        return (
            <div className="App">
            <BrowserRouter>
                <UserContext.Provider value={{
                    currentUser: this.state.currentUser,
                    logout: this.logout,
                    login: this.login,
                    signup: this.signup,
                    updateUser: this.updateUser,
                    appliedToJob: this.appliedToJob
                }}>
                    <Navigation currentUser login signup />
                    <Routes  />
                </UserContext.Provider>
            </BrowserRouter>
            </div>
        );
    }
}


export default App;