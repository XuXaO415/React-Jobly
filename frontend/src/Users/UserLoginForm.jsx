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




// function UserLoginForm({ login }) {
//   const INITIAL_STATE = {
//     username: "",
//     password: ""
//   };
//   const [formData, setFormData] = useState(INITIAL_STATE);
//   // const [error, setError] = useState(null);
//   const history = useHistory();
//   const { setUser: setUserContext } = useContext(UserContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { username, password } = formData;
//       const { token } = await JoblyApi.login(username, password);
//       setUserContext(token);
//       history.push("/");
//     } catch (err) {
//       // setError(err.message);
//       console.error(err);
//     }
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value
//     }));
//   }

//   return (
//     <Container>
//       <Row>
//         <Card body>
//           <Form onSubmit={handleSubmit}>
//             <FormGroup>
//               <Label for="username">Username</Label>
//               <Input
//                 type="text"
//                 name="username"
//                 id="username"
//                 value={formData.username}
//                 placeholder="Username"
//                 onChange={handleChange}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 type="password"
//                 name="password"
//                 id="password"
//                 value={formData.password}
//                 placeholder="Password"
//                 onChange={handleChange}
//               />
//             </FormGroup>
//             <Button type="submit">Login</Button>
//           </Form>
//         </Card>
//       </Row>
//     </Container>
//   );
// }

function UserLoginForm({ login }) {
  const INITIAL_STATE = {
    username: "",
    password: ""
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { username, password } = formData;
      const { token } = await JoblyApi.login(username, password);
      login(token);
      history.push("/");
    }
    catch (err) {
      console.error(err);
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


  // async function handleSubmit(evt) {
  //   evt.preventDefault();
  //   let result = await login(formData);
  //   if (result.success) {
  //     history.push("/companies");
  //   } else {
  //     setFormErrors(result.errors);
  //   }
  // }

//   /** Update form data field */
//   function handleChange(evt) {
//     const { name, value } = evt.target;
//     setFormData(l => ({ ...l, [name]: value }));
//   }

// //what is state? State is a plain JS object that represents the current state of the component.
// //how to use state?
// // 

//   return (
//     <Form>
//       <FormGroup>
//         <Label for="username">Username: </Label>
//         <Input
//           type="text"
//           name="username"
//           id="username"
//           value={formData.username}
//           placeholder="Username"
//           onChange={handleChange}
//         />
//       </FormGroup>
//       <FormGroup>
//         <Label for="password">Password: </Label>
//         <Input
//           type="password"
//           name="password"
//           id="password"
//           value={formData.password}
//           placeholder="Password"
//           onChange={handleChange}
//         />
//       </FormGroup>
//       <Button type="submit" onClick={handleSubmit}>Login</Button>
//     </Form>
//   );
// }


export default UserLoginForm;