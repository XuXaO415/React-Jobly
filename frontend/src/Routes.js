import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Homepage';
import UserLogin  from "./Users/UserLoginForm";
import UserSignupForm from "./Users/UserSignupForm";
import JobList from './Jobs/JobList';
import CompanyList from './Company/CompanyList';
import CompanyDetail from "./Company/CompanyDetail";

function Routes() {
    return (
        <Router>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={UserLogin} />
        <Route path="/signup" component={UserSignupForm} />
        <Route path="/jobs" component={JobList} />
        <Route path="/companies" component={CompanyList} />
        <Route path="/companies/:handle" component={CompanyDetail} />
        </Router>
    );
}

export default Routes;