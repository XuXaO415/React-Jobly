import React, { useContext, Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "./Users/UserContext";
import "./Homepage.css";


    
// class Homepage extends React.Component {
//     static contextType = UserContext;

//     render() {
//         let currentUser  = this.context;
//         return (
//             <div className="Homepage">
//             <div className="container text-lg-center">
//                 <h1 className="h1-welcome">Welcome to Jobly</h1>
//                 <p className="lead-paragraph">Your next dream job awaits you here.</p>
//                 {this.props.currentUser  ? 
//                     <h2>Welcome Back, {this.props.currentUser.firstName} || {this.props.currentUser.username}!
//                     </h2>
//                     : (
//                         <center>
//                         <Link className="btn btn-primary m-3" to="/login">
//                             Login
//                         </Link>
//                         <Link className="btn btn-primary m-3" to="/signup">
//                             Signup
//                         </Link>
//                         </center>
//                     )}
//             </div>
//             </div>
//         );
//     }
// }


const Homepage = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <div className="Homepage">
            <div className="container text-lg-center">
                < className="mb-4 h1-welcome">Welcome to Jobly</
                <p className="lead-paragraph">Your next dream job awaits you here.</p>
                {currentUser ? 
                    <h2>Welcome Back, {currentUser.firstName} || {currentUser.username}!
                    </h2>
                    : (
                        <center>
                        <Link className="btn btn-primary m-3" to="/login">
                            Login
                        </Link>
                        <Link className="btn btn-primary m-3" to="/signup">
                            Signup
                        </Link>
                        </center>
                    )}
            </div>
        </div>
    );
}

export default Homepage;
