import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UserContext from "./Users/UserContext";

//Show Homepage with simple welcome message

function Homepage() {
    const { currentUser } = useContext(UserContext);
    const history = useHistory();

    return (
        <div className="Homepage">
            <h1>Welcome to Jobly</h1>
            <p className="lead">Your next dream job awaits.</p>
            {currentUser  ? 
            <h2>Welcome Back, {currentUser.first_name} || {currentUser.username}!
            </h2>
            : (
                <p>
                    <Link className="btn btn-primary" to="/login">
                        Login
                        </Link>
                    <Link className="btn btn-primary" to="/signup">
                        Signup
                        </Link>
                </p>
            )}
        </div>
    );
}
    



    // if(!currentUser) {
    //     return (
    //         <div className="Homepage">
    //             <div className="container text-center">
    //                 <h1>Jobly</h1>
    //                 <p className="lead">Find your dream job</p>
    //                 {/* <div>
    //                     <Link to="/login" className="btn btn-primary">Login</Link>
    //                     <Link to="/signup" className="btn btn-secondary">Signup</Link>
    //                 </div> */}
    //             </div>
    //             </div>
    //     );

    // } else {
    //     return (
    //         <div className="Homepage">
    //             <div className="container text-center">
    //                 <h1>Welcome back, {currentUser.first_name} || {currentUser.username}!</h1>
    //                 <p className="lead">Find your dream job</p>
    //                 <div>
    //                     <Link to="/companies" className="btn btn-primary">Companies</Link>
    //                     <Link to="/jobs" className="btn btn-secondary">Jobs</Link>
    //                 </div>
    //             </div>
    //             </div>
    //     );
    // }


export default Homepage;
