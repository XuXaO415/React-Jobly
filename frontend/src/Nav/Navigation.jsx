import React, { useState, useEffect, useContext } from "react";
import {Link, NavLink } from "react-router-dom";
import UserContext from "../Users/UserContext";

function Navigation() {
    const { currentUser } = useContext(UserContext);

    function logout() {
        localStorage.removeItem("jobly-token");
        window.location.reload();
    }

    function login() {
        window.location.href = "/login";
    }

    function signup() {
        window.location.href = "/signup";
    }

    return (
        <div className="Navigation">
            <NavLink to="/">
            </NavLink>
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            {currentUser ? (
                <div className="Navigation-user">
                    <NavLink to="/profile">Profile</NavLink>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div className="Navigation-user">
                    <button onClick={login}>Login</button>
                    <button onClick={signup}>Sign up</button>
                </div>
            )}
        </div>
    );
}
    


export default Navigation;