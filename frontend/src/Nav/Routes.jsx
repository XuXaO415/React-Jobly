import React, {useContext} from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "../Homepage";
import CompanyDetails from "../Company/CompanyDetails";
import CompanyList from "../Company/CompanyList";
import JobList from "../Jobs/JobList";
import UserContext from "../Users/UserContext";
import UserLoginForm from "../Users/UserLoginForm";
import UserSignupForm from "../Users/UserSignupForm";
import UserProfileForm from "../Users/UserProfileForm";

function Routes() {
    const {currentUser} = useContext(UserContext);
    return (
        <Router>
            <Route path="/" exact component={Homepage} />
            <Route path="/companies" exact component={CompanyList} />
            <Route path="/companies/:id" exact component={CompanyDetails} />
            <Route path="/jobs" exact component={JobList} />
            <Route path="/login" exact component={UserLoginForm} />
            <Route path="/signup" exact component={UserSignupForm} />
            <Route path="/profile">{currentUser ? 
                <Route path="/profile" exact component={UserProfileForm} /> :
                <Route path="/profile" exact component={UserLoginForm} />
            }</Route>
        </Router>
    );
}


export default Routes;