import React, {useContext} from "react"; //useContext is a hook that allows us to access the context object
import { Link } from "react-router-dom"; //Link is a component that allows us to link to other pages
import { UserContext } from "./Users/UserContext"; //UserContext is a context object that allows us to access the user object in my App.js file



/** Show Homepage  */

function Homepage() {
    const { user } = useContext(UserContext); //user is a property of the user object that is stored in the UserContext context object
    return (
        <div className="Homepage">
        <h1>Jobly</h1>
        <p>Your next job awaits you here</p>
        {user ? (
            <Link to="/login">Login</Link>
        ) : (
            <Link to="/signup">Sign up</Link>
        )}
        </div>
    );
}

export default Homepage;

