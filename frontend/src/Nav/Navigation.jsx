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
import './Navigation.css'

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext)
  console.debug('Navigation', 'currentUser=', currentUser)
  const history = useHistory()

  function loggedInNav() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/companies">
            Companies
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/jobs">
            Jobs
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={logout}>
            Log out {currentUser.first_name || currentUser.username}
          </Link>
        </li>
      </ul>
    )
  }

  function loggedOutNav() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/signup">
            Sign Up
          </NavLink>
        </li>
      </ul>
    )
  }

  return (
    <div className="Navigation">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img
              src={careerChoice}
              width="30"
              height="30"
              className="d-inline-block align-top"
              style={{ marginRight: '6px' }}
            />
            Jobly
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {currentUser ? loggedInNav() : loggedOutNav()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

// function Navigation({ logout }) {
//   const { currentUser } = useContext(UserContext)
//   const history = useHistory()

//   const handleLogin = () => {
//     history.push('/login')
//   }

//   const handleLogout = () => {
//     logout()
//     history.push('/')
//   }

//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           <img
//             src={careerChoice}
//             width="30"
//             height="30"
//             className="d-inline-block align-top"
//           />
//           Jobly
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/companies">
//               Companies
//             </Nav.Link>
//             <Nav.Link href='/jobs'>
//               Jobs
//             </Nav.Link>
//             <Nav.Link href="/profile">
//               Profile
//             </Nav.Link>
//             {currentUser ? (
//               <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
//             ) : (
//               <Nav.Link onClick={handleLogin}>
//                 Login
//               </Nav.Link>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// class Navigation extends React.Component {
//   static contextType = UserContext

//   render() {
//     const logout = this.props.logout
//     const currentUser = this.context

//     return (
//       <Navbar bg="light" expand="lg">
//         <Container fluid>
//           <Navbar.Brand href="/">
//             <span>
//               <img
//                 src={careerChoice}
//                 width="30"
//                 height="30"
//                 className="d-inline-block align-top"
//                 alt="job-image"
//               />
//             </span>
//             <span>Jobly</span>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="me-auto my-2 my-lg-0"
//               style={{ maxHeight: '100px' }}
//               navbarScroll
//             >
//               {currentUser ? (
//                 <Navbar.Collapse className="justify-content-center">
//                   {/* <Navbar.Text>Welcome back, {currentUser.firstName || currentUser.username}</Navbar.Text> */}
//                   <Navbar.Text>Welcome back, {currentUser.username}!</Navbar.Text>
//                   <Nav.Link href="/companies">Companies</Nav.Link>
//                   <Nav.Link href="/jobs">Jobs</Nav.Link>
//                   <NavDropdown title="Profile" id="basic-nav-dropdown">
//                     <NavDropdown.Item href="/profile">
//                       Edit profile
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                   {/* <Nav.Link href="/logout">Logout</Nav.Link> */}
//                 <Nav.Link className="nav-link" to="/" onClick={logout}>Logout</Nav.Link>
//                 </Navbar.Collapse>
//               ) : (
//                 <Navbar.Collapse>
//                   <NavDropdown title="Login" id="basic-nav-dropdown">
//                     <NavDropdown.Item href="/login">Login</NavDropdown.Item>
//                     <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
//                   </NavDropdown>
//                 </Navbar.Collapse>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     );
//   }
// }

export default Navigation;
