import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { NavBar } from "reactstrap";
import Navigation from "./Navigation";



class NavBar extends React.Component {

    render() {
        let loggedInUser = this.props.loggedInUser;
        let loggedIn = this.props.loggedIn;
        let history = this.props.history;
        let logout = this.props.logout;
        let signup = this.props.signup;
        let login = this.props.login;
        let logoutButton = null;
        let loginButton = null;
        let signupButton = null;
        let userNav = null;
        let userNavLink = null;

        if (loggedIn) {
            logoutButton = <NavLink className="nav-link" to="/logout" onClick={logout}>Logout</NavLink>;
            userNavLink = <NavLink className="nav-link" to="/user" onClick={() => { history.push("/user") }}>{loggedInUser}</NavLink>;
            userNav = <NavBar className="navbar-nav">{userNavLink}</NavBar>;
        }
        else {
            loginButton = <NavLink className="nav-link" to="/login" onClick={() => { history.push("/login") }}>Login</NavLink>;
            signupButton = <NavLink className="nav-link" to="/signup" onClick={() => { history.push("/signup") }}>Signup</NavLink>;
        }
        return (
            <div>
                <NavBar className="navbar-nav">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/companies" onClick={() => { history.push("/companies") }}>Companies</NavLink>
                    <NavLink className="nav-link" to="/jobs" onClick={() => { history.push("/jobs") }}>Jobs</NavLink>
                    {loggedInUser ? (
                        <>
                            <NavLink className="nav-link" to="/profile" onClick={() => { history.push("/profile") }}>Profile</NavLink>
                            <NavLink className="nav-link" to="/logout" onClick={logout}>Logout</NavLink>
                        </>
                    ) : (
                            <>
                                <NavLink className="nav-link" to="/login" onClick={() => { history.push("/login") }}>Login</NavLink>
                                <NavLink className="nav-link" to="/signup" onClick={() => { history.push("/signup") }}>Signup</NavLink>
                            </>
                        )}
                </NavBar>
                {userNav}
            </div>
        );
    }
}

//we need to create a function that shows when a user is logged in their username is shown in the navbar along with a way to logout




export default NavBar;