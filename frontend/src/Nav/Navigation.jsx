import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import {Navbar, NavItem, Nav} from "reactstrap";
import careerChoice from "../career-choice.png";
import UserContext from "../Users/UserContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';


// function Navigation({ logout }) {
//   const { currentUser } = useContext(UserContext);
//   const history = useHistory();

//   const handleLogout = () => {
//     logout();
//     history.push("/");
//   }
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link to="/" className="navbar-brand">Jobly</Link>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           {/* <li className="nav-item">
//             <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
//           </li> */}
//           <li className="nav-item">
//             <NavLink to="/companies" className="nav-link" activeClassName="active">Companies</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/jobs" className="nav-link" activeClassName="active">Jobs</NavLink>
//           </li>
//           {currentUser ? (
//             <>
//               <li className="nav-item">
//                 <NavLink to="/profile" className="nav-link" activeClassName="active">Profile</NavLink>
//               </li>
//               <li className="nav-item">
//                 <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
//               </li>
//             </>
//           ) : (
//             <>
//               <li className="nav-item">
//                 <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to="/signup" className="nav-link" activeClassName="active">Signup</NavLink>
//               </li>
//             </>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
  
// }

function Navigation ({ loggedInUser, logout }) {
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/");
  }

  return (
    // <Nav>
    //   <NavItem>
    //     <NavLink to="/" exact activeClassName="active">Home</NavLink>
    //   </NavItem>
    //   <NavItem>
    //     <NavLink to="/companies" activeClassName="active">Companies</NavLink>
    //   </NavItem>
    //   <NavItem>
    //     <NavLink to="/jobs" activeClassName="active">Jobs</NavLink>
    //   </NavItem>
    //   {loggedInUser ? (
    //     <>
    //       <NavItem>
    //         <NavLink to="/profile" activeClassName="active">Profile</NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
    //       </NavItem>
    //     </>
    //   ) : (
    //     <>
    //       <NavItem>
    //         <NavLink to="/login" activeClassName="active">Login</NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink to="/signup" activeClassName="active">Signup</NavLink>
    //       </NavItem>
    //     </>
    //   )}
    // </Nav>

    <div>
  <Navbar
    expand="lg"
    color="light"
    dark={false}
  >
    <NavbarBrand href="/">
      <img src={careerChoice} className="d-inline-block align-top" alt="job-image"/>
      Jobly
    </NavbarBrand>
  </Navbar>
  <Navbar>
  
  
      <Nav className="me-auto" navbar>
        <NavItem>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
        </NavItem>
        
        <NavItem>
          <NavLink to="/companies" activeClassName="active">Companies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/jobs" activeClassName="active">Jobs</NavLink>
        </NavItem>
        {loggedInUser ? (
          <>
            <NavItem>
              <NavLink to="/profile" activeClassName="active">Profile</NavLink>
            </NavItem>
            <NavItem>
              <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem>
              <NavLink to="/login" activeClassName="active">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup" activeClassName="active">Signup</NavLink>
            </NavItem>
          </>
        )}
      </Nav>
  </Navbar>
</div>
  );
}





export default Navigation;
