import React, { useContext, Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CompanySearchForm from '../Companies/CompanySearchForm'
import careerChoice from '../career-choice.png'
import UserProfileForm from '../Users/UserProfileForm'
import UserContext from '../Users/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useHistory } from 'react-router-dom'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText,
// } from 'reactstrap';

class Navigation extends React.Component {
  static contextType = UserContext;

  render() {
    const currentUser = this.context;

    return (
    <Navbar bg="light" expand="lg">

      <Container fluid>
        <Navbar.Brand href="/">
        <span>
        <img src={careerChoice}
        width="30" height="30"
        className="d-inline-block align-top"
        alt="job-image"
        />
        </span>
        <span>Jobly</span>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Nav.Link href="companies" className="active">Companies</Nav.Link>
          <Nav.Link href="jobs" className="active">Jobs</Nav.Link>
          <Nav.Link href="login" className="active">Login</Nav.Link>
          <Nav.Link href="signup" className="active">Signup</Nav.Link>
          <Nav.Link href="logout" className="active">Logout</Nav.Link>
            <NavDropdown title="Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item href="userProfileForm">Edit Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
}



// function Navigation({ logout }) {
//   const currentUser = useContext(UserContext)

//   function handleClick() {
//     logout()
//   }
//   function loggedInNav() {
//     return (
//       <ul className="navbar-nav ml-auto">
//         <li className="nav-item mr-4">
//           <NavLink className="nav-link" to="/companies">
//             Companies
//           </NavLink>
//         </li>
//         <li className="nav-item mr-4">
//           <NavLink className="nav-link" to="/jobs">
//             Jobs
//           </NavLink>
//         </li>
//         <li className="nav-item mr-4">
//           <NavLink className="nav-link" to="/profile">
//             Profile
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <button
//             onClick={handleClick}
//             className="nav-link btn btn-link nav-link-btn"
//           >
//             Logout {currentUser.username}
//           </button>
//         </li>
//       </ul>
//     )
//   }
//   function loggedOutNav() {
//     return (
//       <ul className="navbar-nav ml-auto">
//         <li className="nav-item mr-4">
//           <NavLink className="nav-link" to="/login">
//             Login
//           </NavLink>
//         </li>
//         <li className="nav-item mr-4">
//           <NavLink className="nav-link" to="/signup">
//             Signup
//           </NavLink>
//         </li>
//       </ul>
//     )
//   }
//   return (
//     <nav className="Nav navbar navbar-expand-lg navbar-light bg-light">
//       <NavLink key="home" exact to="/" className="navbar-brand">
//         Jobly
//       </NavLink>
//       <button
//         class="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarToggleExternalContent"
//         aria-controls="navbarToggleExternalContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div
//         className="collapse navbar-collapse"
//         id="navbarToggleExternalContent"
//       >
//         <NavbarCollapse className="navbar-nav ml-auto">
//           {currentUser ? loggedInNav() : loggedOutNav()}
//         </NavbarCollapse>
//       </div>
//     </nav>
//   );
// }

export default Navigation;
