import React, { useState, useContext, Component } from 'react'
import { useHistory, Redirect, NavLink, withRouter } from 'react-router-dom'
import UserContext from './UserContext'
import JoblyApi from '../JoblyApi'
import UserSignupForm from './UserSignupForm'
import { Form, FormGroup, Button, Input, Label } from 'reactstrap'
import PropTypes from 'prop-types'



function UserLoginForm({ login }) {
  const initialState = {
    username: '',
    password: '',
  }
  const [formData, setFormData] = useState(initialState)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const { currentUser } = useContext(UserContext)
  const { history } = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // JoblyApi.login(formData)
    let result = await JoblyApi.login(formData)
    // let result = await JoblyApi.login(formData.username, formData.password);
      .then((result) => {
        //
        if (result.success) {
          setError(null);
          login(result);

          currentUser(result);
          React.history.push(`/companies`);
        } else {
          setError(result.message);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }


  return (
    <div className="LoginForm">
      <div className="container col-md-6">
        <h3 className="mt-3">Log In</h3>

        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  name="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button
                className="btn btn-primary float-left mt-3"
                onSubmit={handleSubmit}
              >
                Submit
              </button>
              <div className="mt-3">
            
                <NavLink to="/signup" activeClassName="active">
                  Sign up
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}



// class UserLoginForm extends React.Component {
//   static contextType = UserContext;
//   constructor(props) {
//     super(props);
//     this.state = {
//       login: false,
//       username: "",
//       password: "",
//       isLoading: false, // isLoading is false because we are not loading anything yet until the user submits the form

//     };
//     console.debug("UserLoginForm:", this.state.login);

//     this.showUserLogin = this.showUserLogin.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }


//   showUserLogin() {
//     this.setState({ signup: false });
//   }

//   handleChange(e) {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   }

//   async handleSubmit(e) {
//     e.preventDefault();
//     let result = await JoblyApi.login({
//       username: this.state.username,
//       password: this.state.password,
//     });
//     console.debug("handleSubmit", "token=", result);
//     this.setState({ isLoading: true });
//     // const { login } = this.context;
//     if (result.success) {
//       this.context.login(result);
//       this.props.history.push("/companies");
//     } else {
//       this.setState({ error: result.message });
//     }
//   }

//   render() {
//     const { signup, username, password, error, success } = this.state;
//     const { currentUser, setCurrentUser } = this.context;

// return (
//   <div className="LoginForm">
//     <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
//       <h3 className="mb-3">{signup ? "Signup" : "Log In"}</h3>
//       {error && <div className="alert alert-danger">{error}</div>}
//       {success && <div className="alert-success">{success}</div>}
//       <div className="card">
//         <div className="card-body">
//           <form onSubmit={this.handleSubmit}>
//             <div className="form-group">
//               <label>Username: </label>
//               <input
//                   name="username"
//                   className="form-control"
//                   value={username}
//                   onChange={this.handleChange}
//                   autoComplete="username"
//                   required
//               />
//             </div>
//             <div className="form-group">
//               <label>Password: </label>
//               <input
//                   type="password"
//                   name="password"
//                   className="form-control"
//                   value={password}
//                   onChange={this.handleChange}
//                   autoComplete="current-password"
//                   required
//               />
//             </div>
//             <div className="form-group mt-3">
//               <button
//                   className="btn btn-primary float-right"
//                   onSubmit={this.handleSubmit}
//               >
//                 {signup ? "Sign Up" : "Log In"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className="mt-3">
//         <NavLink to="/signup" activeClassName="active">Sign up</NavLink>
//       </div>
//     </div>
//   </div>
//   );
//   }
// }


// class UserLoginForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       login: false,
//       username: "",
//       password: "",
//       isLoading: false,
//     };
//     console.debug("UserLoginForm:", this.state.login, this.state.isLoading);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     JoblyApi.login({
//       username: this.state.username,
//       password: this.state.password,
//     });
//   }

//   render() {
//     const { signup, username, password, error, success } = this.state;
//     return (
//       <div className="LoginForm">
//         <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
//           <h3 className="mb-3">{signup ? "Signup" : "Log In"}</h3>
//           {error && <div className="alert alert-danger">{error}</div>}
//           {success && <div className="alert-success">{success}</div>}
//           <div className="card">
//             <div className="card-body">
//               <form onSubmit={this.handleSubmit}>
//                 <div className="form-group">
//                   <label>Username: </label>
//                   <input
//                     name="username"
//                     className="form-control"
//                     value={username}
//                     onChange={this.handleChange}
//                     autoComplete="username"
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Password: </label>
//                   <input
//                     type="password"
//                     name="password"
//                     className="form-control"
//                     value={password}
//                     onChange={this.handleChange}
//                     autoComplete="current-password"
//                     required
//                   />
//                 </div>
//                 <div className="form-group mt-3">
//                   <button
//                     className="btn btn-primary float-right"
//                     onSubmit={this.handleSubmit}
//                   >
//                     {signup ? "Sign Up" : "Log In"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="mt-3">
//             <NavLink to="/signup" activeClassName="active">
//               Sign up
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }



export default UserLoginForm
