import React, { useState, useContext, Component } from "react";
// https://bobbyhadz.com/blog/react-export-usehistory-was-not-found-in-react-router-dom
import { useHistory, Redirect, NavLink, history } from "react-router-dom";
import UserContext from "./UserContext";
import {
  Container,
  Row,
  Card,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import JoblyApi from "../JoblyApi";

// use form data to signup a new user using the JoblyApi. signup method


class UserSignupForm extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      redirect: false,
      signup: true,
    };

    console.debug("UserSignupForm:", this.props);

    this.showUserSignup = this.showUserSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  showUserSignup() {
    this.setState({ signup: true });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }


  async handleSubmit(e) {
    e.preventDefault();
     const { username, password, firstName, lastName, email } = this.state;
     let token = null;
     try {
      if(this.state.signup) {
        token = await JoblyApi.signupUser({ username, password, firstName, lastName, email });
      } else {
        // redirect user to login page if they already have an account
        token = await JoblyApi.login({ username, password });
      }
      this.UserContext.setUser(token);
      this.setState({ redirect: true });
      this.props.history.push("/companies");
      localStorage.setItem("token", token);
     } catch (err) {
        console.error(err);
      }
  } 


  renderSignupForm() {
    const { username, password, firstName, lastName, email } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="username"> Username </Label>
          <Input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password"> Password </Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="firstName"> First Name </Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName"> Last Name </Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email"> Email </Label>
          <Input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Sign Up
        </Button>
        <div className="mt-3 float-right">
        <NavLink to="/login" activeClassName="active">Login</NavLink>
        </div>
      </Form>
    );
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/signup" />;
    }
    return (
      <Container className="mt-5">
      <h1>Sign Up</h1>
        <Row>
          <Card body>
            {this.renderSignupForm()}
          </Card>
        </Row>
      </Container>
    );
  }
}


export default UserSignupForm;
