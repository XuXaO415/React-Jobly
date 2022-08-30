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
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';



function Navigation ({ loggedInUser, logout }) {
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/");
  }

  return (

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
              <NavLink to="/signup" activeClassName="active">Sign up</NavLink>
            </NavItem>
          </>
        )}
      </Nav>
  </Navbar>
</div>
  );
}







export default Navigation;
