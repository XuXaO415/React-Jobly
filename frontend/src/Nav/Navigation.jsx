import React, { useContext, Component } from "react";
import { Link, NavLink } from "react-router-dom";
import CompanySearchForm from "../Companies/CompanySearchForm";
import careerChoice from "../career-choice.png";
import UserProfileForm from "../Users/UserProfileForm";
import UserContext from "../Users/UserContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
            <NavDropdown title="Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/profile">View Profile</NavDropdown.Item>

              {currentUser.user ? (
                <>
                  <NavDropdown.Item href="userProfileForm">Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={currentUser.logout}>Logout</NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                  <NavDropdown.Item href="/signup">Sign up</NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
           {/* <Form className="d-flex">
           <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
}


export default Navigation;
