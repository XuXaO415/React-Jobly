import React, { useContext, Component } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../Users/UserContext";

// class PrivateRoutes extends React.Component {
//     static contextType = UserContext;

//     render() {
//         const {currentUser} = this.context;
//         console.debug("PrivateRoutes", "currentUser=", currentUser);
//         if (!currentUser) {
//         return <Redirect to="/login" />;
//         }

//         return <Route {...this.props} />;
//     }
// }

// class PrivateRoutes extends React.Component {
//     static contextType = UserContext;

//     render() {
//         const {currentUser} = this.context;
//         console.debug("PrivateRoutes", "currentUser=", currentUser);
//         if (!currentUser) {
//         return <Redirect to="/login" />;
//         }

//         return <Route {...this.props} />;
//     }
// }

// const PrivateRoutes = ({ component: Component, ...rest }) => {
//   const { currentUser } = useContext(UserContext);
//   console.debug("PrivateRoutes", "currentUser=", currentUser);
//   if (currentUser === null) {
//     return <Redirect to="/login" />;
//   }
//   return <Route {...rest} render={(props) => <Component {...props} />} />;
// };



function PrivateRoutes({ exact, path, children }) {
    //why is currentUser coming back null?
  const { currentUser } = useContext(UserContext);
  console.log("Logging currentUser =", currentUser);

  console.debug(
      "PrivateRoute",
      "exact=", exact,
      "path=", path,
      "currentUser=", currentUser,
  );

  if (currentUser === null) {
    return <Redirect to="/login" />;
  }


  return (
      <Route exact={exact} path={path}>
        {children}
      </Route>
  );
}


export default PrivateRoutes;
