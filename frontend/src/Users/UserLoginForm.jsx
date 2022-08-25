import React,{ useState, useContext } from "react";
import {useHistory} from "react-router-dom";
import UserContext from "./UserContext";
import JoblyApi from "../JoblyApi";
import {
  Form,
  FormGroup,
  Button,
  Input,
  Label
} from "reactstrap";
import {NavLink} from "react-router-dom";

// function UserLoginForm({ login }) {
//   const INITIAL_STATE = {
//     username: "",
//     password: ""
//   };
//   const [formData, setFormData] = useState(INITIAL_STATE);
//   const history = useHistory();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       const { username, password } = formData;
//       const { token } = await JoblyApi.login(username, password);
//       login(token);
//       history.push("/");
//     }
//     catch (err) {
//       console.error(err);
//     }
// }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((fData) => ({
//       ...fData,
//       [name]: value
//     }));
//   }

  
//   return (
//       <div className="LoginForm">
//         <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
//           <h3 className="mb-3">Log In</h3>

//           <div className="card">
//             <div className="card-body">
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label>Username: </label>
//                   <input
//                       name="username"
//                       className="form-control"
//                       value={formData.username}
//                       onChange={handleChange}
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
//                       value={formData.password}
//                       onChange={handleChange}
//                       autoComplete="current-password"
//                       required
//                   />
//                 </div>


//                 <button
//                     className="btn btn-primary float-right"
//                     onSubmit={handleSubmit}
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// }

function UserLoginForm({ login }) {
  const INITIAL_STATE = {
    username: "",
    password: ""
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);


  //if currentUser is logged in, don't allow them to log in again
  if (currentUser) {
    history.push("/");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const { username, password } = formData;
      const { token } = await JoblyApi.login(username, password);
      login(token);
      history.push("/");
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value
    }));
  }


    return (
      <div className="LoginForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <h3 className="mb-3">Log In</h3>

          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Username: </label>
                  <input
                      name="username"
                      className="form-control"
                      value={formData.username}
                      onChange={handleChange}
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
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      required
                  />
                </div>


                <button
                    className="btn btn-primary float-right"
                    onSubmit={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );



}











export default UserLoginForm;