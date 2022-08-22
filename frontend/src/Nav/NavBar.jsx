// import * as React from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Nav, NavItem } from "reactstrap";
// import { useContext } from "react";
// import UserContext from "../Users/UserContext";


// function NavBar () {
//     const { user } = useContext(UserContext);
//     console.debug("NavBar.user", user);
//     return (
//         <Navbar color="light" light expand="md">
//             <NavLink to="/" className="navbar-brand">Jobly</NavLink>
//             <Nav className="ml-auto" navbar>
//                 <NavItem>
//                     <NavLink to="/companies" className="nav-link">Companies</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink to="/jobs" className="nav-link">Jobs</NavLink>
//                 </NavItem>
//                 {user ? (
//                     <>
//                         <NavItem>
//                             <NavLink to="/profile" className="nav-link">Profile</NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink to="/logout" className="nav-link">Logout</NavLink>
//                         </NavItem>
//                     </>
//                 ) : (
//                     <>
//                         <NavItem>
//                             <NavLink to="/login" className="nav-link">Login</NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
//                         </NavItem>
//                     </>
//                 )}
//             </Nav>
//         </Navbar>
//     );
// }

// export default NavBar;