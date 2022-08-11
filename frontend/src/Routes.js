import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Homepage from './Homepage';
import UserLogin  from "./Users/UserLoginForm";
import UserSignupForm from "./Users/UserSignupForm";
import UserProfileForm from "./Users/UserProfileForm";
import JobList from './Jobs/JobList';
import CompanyList from './Company/CompanyList';
import CompanyDetail from "./Company/CompanyDetails";
import UserContext from './Users/UserContext';


// function Routes() {
//     return (
//         <Router>
//         <Route exact path="/" component={Homepage} />
//         <Route path="/login" component={UserLogin} />
//         <Route path="/signup" component={UserSignupForm} />
//         <Route path="/jobs" component={JobList} />
//         <Route path="/companies" component={CompanyList} />
//         <Route path="/companies/:handle" component={CompanyDetail} />
//         </Router>
//     );
// }
//login and logout
function Routes() {
    const [loggedInUser, setLoggedInUser] = React.useState(null);
    const { currentUser } = useContext(UserContext);
    const history = useHistory();

    async function handleLogout() {
        await currentUser.logout();
        setLoggedInUser(null);
        history.push("/");
    }

    async function handleLogin(user) {
        const loggedInUser = await currentUser.login(user);
        setLoggedInUser(loggedInUser);
    }

    return (
        <Router>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={UserLogin} />
            <Route path="/signup" component={UserSignupForm} />
            <Route path="/jobs" component={JobList} />
            <Route path="/companies" component={CompanyList} />
            <Route path="/companies/:handle" component={CompanyDetail} />
            <Route path="/profile" component={UserProfileForm} />
        </Router>
    );
}

export default Routes;
