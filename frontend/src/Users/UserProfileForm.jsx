// Super simple skeleton for a user profile form

import React, { Component, useState, useEffect, useContext } from "react";
import UserContext from "./UserContext";
import JoblyApi from "../JoblyApi";
import { Redirect } from "react-router-dom";
import Alert from "../Common/Alert";
import { Form, FormGroup, Button, Input, Label, Badge } from "reactstrap";


//changed from function to class. Also changed name from UserProfileForm to plain Profile
//May change all file names 
// class Profile extends React.Component {
//   static contextType = UserContext;

//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   async handleSubmit(e) {
//     e.preventDefault();
//     console.debug("handleSubmit formData=", this.state);
//     const { username, password, firstName, lastName, email } = this.state;
//     const { updateUser } = this.context;
//     let token = null;
//     try {
//       token = await JoblyApi.updateUser({
//         username,
//         firstName,
//         lastName,
//         email,
//         password,
//       });
//       this.context.setUser(token);
//       this.setState({ redirect: true });
//       localStorage.setItem("token", token);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   handleChange(e) {
//     const { name, value } = e.target;
//     this.setState((st) => ({...st, [name]: value,}));
//   }

//   render() {
//     return (
//       <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
//         <div className="Profile">
//           <h1>Profile</h1>
//           <Form onSubmit={this.handleSubmit}>
//             <FormGroup>
//               <Label for="username">Username
//               <Badge pill bg="primary">    
//               {/* Hi, {this.context.currentUser.username}!  */}
//               </Badge>
//               </Label>
              
              
//               <p>
//               <Badge pill bg="primary">
//               {/* Hi, {this.context.currentUser.username}! */}
//               {/* {this.context.currentUser.firstName} {this.context.currentUser.lastName} */}
//               </Badge>
//               </p>
      
//             </FormGroup>

//             <FormGroup>
//               <Label for="firstName">First Name</Label>
//               <Input
//                 type="text"
//                 className="form-control"
//                 id="firstName"
//                 name="firstName"
//                 value={this.state.firstName}
//                 onChange={this.handleChange}
//               />
//             </FormGroup>

//             <FormGroup>
//               <Label for="lastName">Last Name</Label>
//               <Input
//                 type="text"
//                 className="form-control"
//                 id="lastName"
//                 name="lastName"
//                 value={this.state.lastName}
//                 onChange={this.handleChange}
//               />
//             </FormGroup>

//             <FormGroup>
//               <Label for="email">Email</Label>
//               <Input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={this.state.email}
//                 onChange={this.handleChange}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Confirm password to make changes:</Label>
//               <Input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 name="password"
//                 value={this.state.password}
//                 onChange={this.handleChange}
//               />
//             </FormGroup>
//             {this.state.errors.length ? (
//               <Alert type="danger" messages={this.state.errors} />
//             ) : null}
//             <Button color="primary">Save Changes</Button>
//           </Form>
//         </div>
//       </div>
//     );
//   }
// }

// function Profile({ updateProfile }) {
//   const currentUser = useContext(UserContext);
//   const [formData, setFormData] = useState({
//     username: currentUser.username,
//     firstName: currentUser.firstName,
//     lastName: currentUser.lastName,
//     email: currentUser.email,
//     password: "",
//   });
//   const [formErrors, setFormErrors] = useState([]);

//   console.debug(
//     "Profile",
//     "currentUser=",
//     currentUser,
//     "formData=",
//     formData,
//     "formErrors=",
//     formErrors
//   );

// async function handleSubmit(e) {
//     e.preventDefault();
//     console.debug("handleSubmit formData=", formData);
//     let profileData = {
//       username: formData.username,
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       email: formData.email,
//       password: formData.password,
//     };

//     let username = currentUser.username;
//     let updatedUser;
//     try {
//       updatedUser = await JoblyApi.updateUser(username, profileData);
//     } catch (errors) {
//       setFormErrors(errors);
//       return;
//     }

//     setFormErrors([]);
//     updateProfile(updatedUser);
//   }


//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData(f => ({ ...f, [name]: value }));
//   }

//   // let alert = formErrors.length ? 
//   //   <Alert type="danger" messages={formErrors} />
//   // : null;

//   return (
//     <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
//       <div className="Profile">
//         <h1>Profile</h1>
//         <Form onSubmit={handleSubmit}>
//           <FormGroup>
//             <Label for="username">Username</Label>
//             <Badge pill bg="primary">
//               {UserContext.username}
//             </Badge>
//           </FormGroup>

//           <FormGroup>
//             <Label for="firstName">First Name</Label>
//             <Input
//               type="text"
//               className="form-control"
//               id="profile-firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//             />
//           </FormGroup>

//           <FormGroup>
//             <Label for="lastName">Last Name</Label>
//             <Input
//               type="text"
//               className="form-control"
//               id="profile-lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//             />
//           </FormGroup>

//           <FormGroup>
//             <Label for="email">Email</Label>
//             <Input
//               type="email"
//               className="form-control"
//               id="profile-email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="password">Confirm password to make changes:</Label>
//             <Input
//               type="password"
//               className="form-control"
//               id="profile-password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </FormGroup>
//           {alert}
//           <Button color="primary">Save Changes</Button>
//         </Form>
//       </div>
//     </div>
//   );
// }



// React Error: A component is changing an uncontrolled input of type text to be controlled. 
// This is likely caused by the value changing from undefined to a defined value, which should not happen.
// Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components

// class Profile extends React.Component {
//   static contextType = UserContext;
//   constructor(props) {
//     super(props);
//     this.state = {
     
//       // username: this.props.username,
//   //     firstName: this.props.firstName,
//   //     lastName: this.props.lastName,
//   //     email: this.props.email,
//   //     password: "",
//   //     errors: [],
//   //   };


//   //   this.handleChange = this.handleChange.bind(this);
//   //   this.handleSubmit = this.handleSubmit.bind(this);
//   // }


//       username: this.props.username,
//       firstName: this.props.firstName,
//       lastName: this.props.lastName,
//       email: this.props.email,
//       password: "",
//       errors: [],

//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   } 



//   handleChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }

//   async handleSubmit(e) {
//     e.preventDefault();
//     let profileData = {
//       username: this.state.username,
//       firstName: this.state.firstName,
//       lastName: this.state.lastName,
//       email: this.state.email,
//       password: this.state.password,
//     };

//     // let username = this.props.currentUser.username;
//     let username = this.context.username;
//     let updatedUser;
//     try {
//       updatedUser = await JoblyApi.updateUser(username, profileData);
//     } catch (errors) {
//       this.setState({ errors });
//       return;
//     }

//     this.setState({ errors: [] });
//     this.props.updateProfile(updatedUser);
//   }

//   render() {
//     return (
//       <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
//         <div className="Profile">
//           <h1>Profile</h1>
//           <Form onSubmit={this.handleSubmit}>
//             <FormGroup>
//               <Label for="username">Username</Label>
//               <Badge pill bg="primary">
//                 {this.props.username}
//                 {/* {this.props.currentUser.username} */}
//                 {this.context.username}
//               </Badge>
//             </FormGroup>

//             <FormGroup>
//               <Label for="firstName">First Name</Label>
//               <Input
//                 type="text"
//                 className="form-control"
//                 id="firstName"
//                 name="firstName"
//                 value={this.state.firstName}
//                 onChange={this.handleChange}
//               />
//             </FormGroup>

//             <FormGroup>
//               <Label for="lastName">Last Name</Label>
//               <Input
//                 type="text"
//                 className="form-control"
//                 id="lastName"
//                 name="lastName"
//                 value={this.state.lastName}
//                 onChange={this.handleChange}
//               />
//             </FormGroup>

//             <FormGroup>
//               <Label for="email">Email</Label>
//               <Input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={this.state.email}
//                 onChange={this.handleChange}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for ="password">Confirm password to make changes:</Label>
//               <Input
//                 type="password" 
//                 className="form-control" 
//                 id="profile-password"
//                 name="password" 
//                 value={this.state.password}
//                 valid={this.state.password.length > 0} 
//                 onChange={this.handleChange} 
//                 />
//                 </FormGroup>
//                 {this.state.errors.length ? <Alert type="danger" messages={this.state.errors} /> : null}
//             <Button color="primary">Save Changes</Button>
//           </Form>
//         </div>
//       </div>
//     );
// }
// }

const Profile = ({ username, firstName, lastName, email, updateProfile }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: username,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: "",
  });


  const [errors, setErrors] = useState([]);
  const [formErrors, setFormErrors] = useState([]);
  const [updated, setUpdated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };
    let username = currentUser.username;
    let updatedUser;
    try {
      updatedUser = await JoblyApi.updateUser(username, profileData);
    } catch (errors) {
      setFormErrors(errors);
      return;
    }
    setFormErrors([]);
    setFormData((f) => ({ ...f, password: "" }));
    // updateProfile(updatedUser);
    setCurrentUser(updatedUser);
    setUpdated(true);
  };

  return (
    <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
      <div className="Profile">
        <h1>Profile</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="profile-username">Username </Label>
            <p> 
            <Badge pill bg="primary">
              {/* {currentUser.username || firstName}
              {formData.username} */}
            </Badge>
            </p>
          </FormGroup>

          <FormGroup>
            <Label for="profile-firstName">First Name</Label>
            <Input
              type="text"
              className="form-control"
              id="profile-firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="profile-lastName">Last Name</Label>
            <Input
              type="text"
              className="form-control"
              id="profile-lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="profile-email">Email</Label>
            <Input
              type="email"
              className="form-control"
              id="profile-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="profile-password">Confirm password to make changes:</Label>
            <Input
              type="password"
              className="form-control"
              id="profile-password"
              name="password" 
              value={formData.password} 
              // valid={formData.password.length > 5}
              onChange={handleChange} 
              />
              </FormGroup> 
              {formErrors.length ? <Alert type="danger" messages={formErrors} /> : null}
              {updated ? <Alert type="success" flash messages={["Your profile updated successfully."]} /> : null}
              {errors.length ? <Alert type="danger" messages={errors} /> : null}
              
          <Button color="primary">Save Changes</Button>
        </Form>
      </div>
    </div>
  );
}



export default Profile; 
