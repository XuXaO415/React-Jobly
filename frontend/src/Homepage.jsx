import React, { useContext, Component } from "react";
import { Link } from "react-router-dom";

import UserContext from "./Users/UserContext";
import "./Homepage.css";



// function Homepage() {
//     const { currentUser } = useContext(UserContext);
//     const history = useHistory();

//     return (
//         <div className="Homepage">
//             <h1>Welcome to Jobly</h1>
//             <p className="lead">Your next dream job awaits.</p>
//             {currentUser  ? 
//             <h2>Welcome Back, {currentUser.first_name} || {currentUser.username}!
//             </h2>
//             : (
//                 <p>
//                     <Link className="btn btn-primary" to="/login">
//                         Login
//                         </Link>
//                     <Link className="btn btn-primary" to="/signup">
//                         Signup
//                         </Link>
//                 </p>
//             )}
//         </div>
//     );
// }



class Homepage extends React.Component {
    static contextType = UserContext;

    render() {
        const { currentUser } = this.context;

        return (
            <div className="homepage">
                <h1 className="h1-welcome">Welcome to Jobly</h1>
                <p className="lead-paragraph">Your next dream job awaits here.</p>
                {this.props.currentUser  ? (
                    <h2>Welcome Back, {this.props.currentUser.first_name} || {this.props.currentUser.username}!
                    </h2>
                ) : (
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
        );

    }
}
    



export default Homepage;
