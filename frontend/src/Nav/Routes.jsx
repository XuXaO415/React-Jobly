import React, { useContext, Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "../Homepage";
import CompanyDetails from "../Companies/CompanyDetails";
import CompanyList from "../Companies/CompanyList";
import JobList from "../Jobs/JobList";

import UserLoginForm from "../Users/UserLoginForm";
import UserSignupForm from "../Users/UserSignupForm";
import UserProfileForm from "../Users/UserProfileForm";

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
      <Route exact path="/companies">
        <CompanyList />
      </Route>
      <Route exact path="/companies/:handle">
        <CompanyDetails />
      </Route>
      <Route exact path="/jobs">
        <JobList />
      </Route>
      <Route exact path="/profile">
        <UserProfileForm />
      </Route>
      <Redirect to="/" />
    </Switch>
    </div>
  );
}


export default Routes;
