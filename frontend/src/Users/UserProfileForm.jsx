// Super simple skeleton for a user profile form

import React, { Component, useState, useEffect, useContext } from "react";
import UserContext from "./UserContext";
import JoblyApi from "../JoblyApi";
import Alert from "../Common/Alert";
import { Form, FormGroup, Button, Input, Label, Badge } from "reactstrap";


//changed from function to class. Also changed name from UserProfileForm to plain Profile
//May change all file names 
class Profile extends React.Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    console.debug("handleSubmit formData=", this.state);
    const { username, password, firstName, lastName, email } = this.state;
    const { updateUser } = this.context;
    let token = null;
    try {
      token = await JoblyApi.updateUser({
        username,
        firstName,
        lastName,
        email,
        password,
      });
      this.context.setUser(token);
      this.setState({ redirect: true });
      localStorage.setItem("token", token);
    } catch (err) {
      console.error(err);
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((st) => ({...st, [name]: value,}));
  }

  render() {
    return (
      <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <div className="Profile">
          <h1>Profile</h1>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="username">Username
              <Badge pill bg="primary">    
              {/* Hi, {this.context.currentUser.username}!  */}
              </Badge>
              </Label>
              
              
              <p>
              <Badge pill bg="primary">
              {/* Hi, {this.context.currentUser.username}! */}
              {/* {this.context.currentUser.firstName} {this.context.currentUser.lastName} */}
              </Badge>
              </p>
      
            </FormGroup>

            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="password">Confirm password to make changes:</Label>
              <Input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </FormGroup>
            {this.state.errors.length ? (
              <Alert type="danger" messages={this.state.errors} />
            ) : null}
            <Button color="primary">Save Changes</Button>
          </Form>
        </div>
      </div>
    );
  }
}

//Add a feature where the logged-in user can edit their profile. Make sure that when a user saves changes here, those are reflected elsewhere in the app.




export default Profile;
