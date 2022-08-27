import React,{ useState, useEffect, Component } from "react";
import JoblyApi from "./JoblyApi";
import useLocalStorage from "./hooks/useLocalStorage";
import {BrowserRouter} from "react-router-dom";
import Navigation from "./Nav/Navigation";
import Routes from "./Nav/Routes";
import UserContext from "./Users/UserContext";
import jwt from "jsonwebtoken";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            token: null, 
            isLoading: false,
        };

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }


    async login(token) {
        this.setState({ isLoading: true });
        const { currentUser } = await JoblyApi.getCurrentUser(token);
        this.setState({ currentUser, token, isLoading: false });
    }
    async logout() {
        this.setState({ currentUser: null, token: null });
    }
    async updateUser(token) {
        const { currentUser } = await JoblyApi.getCurrentUser(token);
        this.setState({ currentUser });
    }
    componentDidMount() {
        const token = localStorage.getItem("token");
        if (token) {
            this.login(token);
        }
    }
    render() {
        const { currentUser, token, isLoading } = this.state;
        return (
            <BrowserRouter>
                <UserContext.Provider value={{ currentUser, token, login: this.login, logout: this.logout, updateUser: this.updateUser }}>
                    <Navigation currentUser={currentUser} logout={this.logout} isLoading={isLoading} />
                    <Routes />
                </UserContext.Provider>
            </BrowserRouter>
        );
    }
}
export default App;