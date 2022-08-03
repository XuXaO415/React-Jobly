import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "./Users/UserContext";


function NavBar() {
    const { user } = useContext(UserContext);
    return (
        <div className="NavBar">
            <NavLink to="/">Home</NavLink>
            {user ? (
                <NavLink to="/login">Login</NavLink>
            ) : (
                <NavLink to="/signup">Sign up</NavLink>
            )}
        </div>
    );
}

export default NavBar;