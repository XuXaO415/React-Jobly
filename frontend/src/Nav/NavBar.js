import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import  UserContext  from "../Users/UserContext";
import { Navbar, Nav, NavItem } from "reactstrap";

const NavBar = () => {
    const { user } = useContext(UserContext);
    return (
        <Navbar color="light" light expand="md">
            <NavLink to="/">
            </NavLink>
            <Nav className="ml-auto" navbar>
                {user ? (
                    <NavItem>
                        <NavLink to="/login">Login</NavLink>
                    </NavItem>
                ) : (
                    <NavItem>
                        <NavLink to="/signup">Sign up</NavLink>
                    </NavItem>
                )}
            </Nav>
        </Navbar>
    );
}
export default NavBar;