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

class Navigation extends React.Component {
  static contextType = UserContext

  render() {
    const currentUser = this.context

    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <span>
              <img
                src={careerChoice}
                width="30"
                height="30"
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
              {currentUser ? (
                <Navbar.Collapse className="justify-content-center">
                  <Navbar.Text>Welcome back, {currentUser.firstName || currentUser.username}</Navbar.Text>
                  <Nav.Link href="/companies">Companies</Nav.Link>
                  <Nav.Link href="/jobs">Jobs</Nav.Link>
                  <NavDropdown title="Profile" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/profile">
                      Edit profile
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/logout">Logout</Nav.Link>
                </Navbar.Collapse>
              ) : (
                <Navbar.Collapse>
                  <NavDropdown title="Login" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
                  </NavDropdown>
                </Navbar.Collapse>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}



// function Navigation({ logout }) {

//   const { currentUser } = useContext(UserContext);
//   console.debug('Navigation', 'logout=', typeof logout);

//   function loggedInNav() {
//     return (
//       <Nav className="me-auto">
//         <NavLink className={NavLink} to="/companies">
//           Companies
//         </NavLink>
//         <NavLink className={NavLink} to="/jobs">
//           Jobs
//         </NavLink>
//         <NavLink className={NavLink} to="/profile">
//           Profile
//         </NavLink>
//         <Link to="/" onClick={logout}>
//           Log out {currentUser.username || currentUser.firstName}
//         </Link>
//       </Nav>
//     );
//   }

//   function loggedOutNav() {
//     return (
//       <Nav className="me-auto">
//         <Nav.Link as={NavLink} to="/login">
//           Login
//         </Nav.Link>
//         <Nav.Link as={NavLink} to="/signup">
//           Signup
//         </Nav.Link>
//       </Nav>
//     );
//   }

//   return (
//     <Navbar bg="light" expand="lg">
//       <Container fluid>
//         <Navbar.Brand as={Link} to="/">
//           <span>
//             <img
//               src={careerChoice}
//               width="30"
//               height="30"
//               className="d-inline-block align-top"
//               alt="job-image"
//             />
//           </span>
//           <span>Jobly</span>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           {currentUser ? loggedInNav() : loggedOutNav()}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }



export default Navigation;
