import React, { useContext, Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "../Homepage";
import CompanyDetails from "../Companies/CompanyDetails";
import CompanyList from "../Companies/CompanyList";
import JobList from "../Jobs/JobList";

import UserLoginForm from "../Users/UserLoginForm";
import UserSignupForm from "../Users/UserSignupForm";
import UserProfileForm from "../Users/UserProfileForm";
import UserContext from "../Users/UserContext";

import PrivateRoutes from "./PrivateRoutes";

// function Routes({ login, signup }) {
//   const { currentUser } = useContext(UserContext);
//   console.debug(
//       "Routes",
//       `login=${typeof login}`,
//       `registered=${typeof register}`,
//   );

//   console.log("Checking for currentUser =", currentUser);

//   return (
//     <div className="pt-5">
//     <Switch>
//       <Route exact path="/">
//         <Homepage />
//       </Route>
//       <Route exact path="/login">
//         <UserLoginForm login={login} />
//       </Route>
//       <Route exact path="/signup">
//         <UserSignupForm signup={signup} />
//       </Route>
//       <Route exact path="/companies">
//         <CompanyList />
//       </Route>
//       <PrivateRoutes exact path="/companies/:handle">
//         <CompanyDetails />
//       </PrivateRoutes>
//       <PrivateRoutes exact path="/jobs">
//         <JobList />
//       </PrivateRoutes>
//       <PrivateRoutes exact path="/profile">
//         <UserProfileForm />
//       </PrivateRoutes>
//       <Redirect to="/" />
//     </Switch>
//     </div>
//   );
// }

// class Routes extends React.Component {
//   render() {
//     return (
//       <div className="pt-5">
//         <Switch>
//           <Route exact path="/">
//             <Homepage />
//           </Route>
//           <Route exact path="/login">
//             <UserLoginForm login={this.props.login} />
//           </Route>
//           <Route exact path="/signup">
//             <UserSignupForm signup={this.props.signup} />
//           </Route>
//           <Route exact path="/companies">
//             <CompanyList />
//           </Route>
//           <Route exact path="/companies/:handle">
//             <CompanyDetails />
//           </Route>
//           <Route exact path="/jobs">
//             <JobList />
//           </Route>
//           <Route exact path="/profile">
//             <UserProfileForm />
//           </Route>
//           <Redirect to="/" />
//         </Switch>
//       </div>
//     );
//   }
// }

// const Routes = ({ login, signup }) => {
//   console.debug(
//     "Routes",
//     `login=${typeof login}`,
//     `registered=${typeof register}`
//   );

//     return (
//       <div className="pt-5">
//         <Switch>
//           <Route exact path="/">
//             <Homepage />
//           </Route>
//           <Route exact path="/login">
//             <UserLoginForm login={login} />
//           </Route>
//           <Route exact path="/signup">
//             <UserSignupForm signup={signup} />
//           </Route>
//           <PrivateRoutes exact path="/companies">
//             <CompanyList />
//           </PrivateRoutes>
//           <PrivateRoutes exact path="/companies/:handle">
//             <CompanyDetails />
//           </PrivateRoutes>
//           <PrivateRoutes exact path="/jobs">
//             <JobList />
//           </PrivateRoutes>
//           <PrivateRoutes exact path="/profile">
//             <UserProfileForm />
//           </PrivateRoutes>
//           <Redirect to="/" />
//           </Switch>
//           </div>
//     );
// }

function Routes({ login, signup }) {
  console.debug(
      "Routes",
      `login=${typeof login}`,
      `register=${typeof register}`,
  );

  return (
      <div className="pt-5">
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/login">
            <UserLoginForm login={login} />
          </Route>

          <Route exact path="/signup">
            <UserSignupForm signup={signup} />
          </Route>

          <PrivateRoutes exact path="/companies">
            <CompanyList />
          </PrivateRoutes>

          <PrivateRoutes exact path="/jobs">
            <JobList />
          </PrivateRoutes>

          <PrivateRoutes exact path="/companies/:handle">
            <CompanyDetails />
          </PrivateRoutes>

          <PrivateRoutes path="/profile">
            <UserProfileForm />
          </PrivateRoutes>

          <Redirect to="/" />
        </Switch>
      </div>
  );
}


export default Routes;
