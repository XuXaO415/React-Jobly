import React,{ useState, useContext, Component } from "react";
import {useHistory, Redirect, NavLink, withRouter} from "react-router-dom";
import UserContext from "./UserContext";
import JoblyApi from "../JoblyApi";
import UserSignupForm from "./UserSignupForm";
import {
  Form,
  FormGroup,
  Button,
  Input,
  Label
} from "reactstrap";



// class UserLoginForm extends React.Component {
//   static contextType = UserContext;
//   constructor(props) {
//     super(props);
//     this.state = {
//       login: false, 
//       signup: false, 
//       username: "",
//       password: "",
//       isLoading: false,
//       error: null,
//       success: null,
//     };

//     console.debug("UserLoginForm", "login=", typeof this.state.login, "signup=", typeof this.state.signup);
//     this.showUserLogin = this.showUserLogin.bind(this); 
//     this.showUserSignup = this.showUserSignup.bind(this);
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

//   handleSubmit(e) {
//     e.preventDefault();
//     this.setState({ isLoading: true, error: null, success: null });
//     const { username, password } = this.state;
//     const { login } = this.context;
//     const { history } = this.props;
//     JoblyApi.login({ username, password })
//       .then(({ token }) => {
//         login(token);
//         history.push("/");
//       }).catch((err) => {
//         this.setState({ error: err.message, isLoading: false });
//       }).finally(() => {
//         this.setState({ isLoading: false });
//       }
//       );
//   }
//   showUserSignup() {
//     this.setState({ signup: true });
//   }
//   render() {
//     const { signup, username, password, isLoading, error, success } = this.state;
//     const { currentUser, setCurrentUser } = this.context;
//     const { history } = this.props;
//     if (currentUser) {
//       history.push("/companies");
//     }
//     return (
//       <div className="LoginForm">
//         <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
//           <h3 className="mb-3">{signup ? "Sign Up" : "Log In"}</h3>
//           {/* {error && <div className="alert alert-danger">{error}</div>} */}
//           {/* {success && <div className="alert alert-success">{success}</div>} */}
//           <div className="card">
//             <div className="card-body">
//               <form onSubmit={this.handleSubmit}>
//                 <div className="form-group">
//                   <label>Username: </label>
//                   <input
//                       name="username"
//                       className="form-control"
//                       value={username}
//                       onChange={this.handleChange}
//                       autoComplete="username"
//                       required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Password: </label>
//                   <input
//                       type="password"
//                       name="password"
//                       className="form-control"
//                       value={password}
//                       onChange={this.handleChange}
//                       autoComplete="current-password"
//                       required
//                   />
//                 </div>
//                 <div className="form-group mt-3">
//                   <button
//                       className="btn btn-primary float-right"
//                       onSubmit={this.handleSubmit}
//                   >
//                     {signup ? "Sign Up" : "Log In"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//          <div className="mt-3"> 
//           <NavLink to="/signup" activeClassName="active">Sign up</NavLink>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

class UserLoginForm extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      username: "",
      password: "",
      isLoading: false, // isLoading is false because we are not loading anything yet until the user submits the form
   
    };
    console.debug("UserLoginForm:", this.state.login);

    this.showUserLogin = this.showUserLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showUserLogin() {
    this.setState({ signup: false });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    let result = await JoblyApi.login({
      username: this.state.username,
      password: this.state.password,
    });
    console.debug("handleSubmit", "token=", result);
    this.setState({ isLoading: true });
// if the result is not null then we have a token and we can log the user in
    if (result.success) {
      this.context.login(result);
      this.props.history.push("/companies");
    } else {
      this.setState({ error: result.message });
    }
  }

  render() {
    const { signup, username, password, error, success } = this.state;
    const { currentUser, setCurrentUser } = this.context;
 

return (
  <div className="LoginForm">
    <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      <h3 className="mb-3">{signup ? "Signup" : "Log In"}</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert-success">{success}</div>}
      <div className="card">
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username: </label>
              <input
                  name="username"
                  className="form-control"
                  value={username}
                  onChange={this.handleChange}
                  autoComplete="username"
                  required
              />
            </div>
            <div className="form-group">
              <label>Password: </label>
              <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={password}
                  onChange={this.handleChange}
                  autoComplete="current-password"
                  required
              />
            </div>
            <div className="form-group mt-3">
              <button
                  className="btn btn-primary float-right"
                  onSubmit={this.handleSubmit}
              >
                {signup ? "Sign Up" : "Log In"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-3">
        <NavLink to="/signup" activeClassName="active">Sign up</NavLink>
      </div>
    </div>
  </div>
  );
  }
}



export default UserLoginForm;



