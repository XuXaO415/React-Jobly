import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {Navbar, NavItem} from "reactstrap";
import UserContext from "../Users/UserContext";

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Jobly</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink to="/companies" className="nav-link" activeClassName="active">Companies</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/jobs" className="nav-link" activeClassName="active">Jobs</NavLink>
          </li>
          {currentUser ? (
            <>
              <li className="nav-item">
                <NavLink to="/profile" className="nav-link" activeClassName="active">Profile</NavLink>
              </li>
              <li className="nav-item">
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/signup" className="nav-link" activeClassName="active">Signup</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
  
}


// function Navigation() {
//   const { currentUser } = useContext(UserContext);
//   const history = useHistory();

//   const handleLogout = () => {
//     history.push("/");
//   }


  // return (
  //   <nav class="Navigation navbar navbar-expand-md">
  //     <a class="navbar-brand" href="/">Jobly</a>
  //     <ul class="navbar-nav ml-auto">
  //       {currentUser ? (
  //         <>
  //           <li class="nav-item">
  //             <NavLink to="/profile" class="nav-link" activeClassName="active">Profile</NavLink>
  //           </li>
  //           <li class="nav-item">
  //             <button class="btn btn-danger" onClick={handleLogout}>Logout</button>
  //           </li>
  //         </>
  //       ) : (
  //         <>
  //           <li class="nav-item">
  //             <NavLink to="/login" class="nav-link" activeClassName="active">Login</NavLink>
  //           </li>
  //           <li class="nav-item">
  //             <NavLink to="/signup" class="nav-link" activeClassName="active">Signup</NavLink>
  //           </li>
  //         </>
  //       )}
  //     </ul>
  //   </nav>
  
  // )
//}


export default Navigation;
