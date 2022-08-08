import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "./Users/UserContext";

//Show Homepage with simple welcome message

function Homepage() {
    const { currentUser } = useContext(UserContext);
    console.debug("Homepage rendered=", Boolean, "currentUser=", currentUser);

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Welcome to Jobly</h1>
                <p className="lead">
                    A simple application to find jobs and companies.
                </p>
                <hr className="my-4" />
                <p>
                    I'm still working on this application.
                </p>
                <p>
                    <Link className="btn btn-primary btn-lg" to="/companies" role="button">
                        Find a Company
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Homepage;
