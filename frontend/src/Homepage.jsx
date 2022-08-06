import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "./Users/UserContext";

//Show Homepage with simple welcome message

function Homepage() {
    return (
        <div>
        <h1>Welcome to Jobly</h1>
        <p>
            Jobly is a full-stack job board.
        </p>
        </div>
    );
}

export default Homepage;
