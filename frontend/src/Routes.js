import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './Homepage';
import UserLogin  from "./Users/UserLoginForm";
import UserSignupForm from "./Users/UserSignupForm";
import JobList from './Jobs/JobList';
import CompanyList from './Companies/CompanyList';
import CompanyDetail from "./Companys/CompanyDetail";

function Routes() {
    return (
        <Router>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={UserLogin} />
            <Route exact path="/signup" component={UserSignupForm} />
            <Route exact path="/jobs" component={JobList} />
            <Route exact path="/companies" component={CompanyList} />
            <Route exact path="/companies/:handle" component={CompanyDetail} />
            <Redirect to="/" />
        </Switch>
        </Router>
    );
}

export default Routes;