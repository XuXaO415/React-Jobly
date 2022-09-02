import React, {useState, useContext, Component } from "react";
import { useHistory, Redirect } from "react-router-dom";
import JoblyApi from "../JoblyApi";
import UserContext from "./UserContext";


class UserForms extends Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: "",
            redirect: false,
            signup: false
        };

        this.showUserSignup = this.showUserSignup.bind(this);
        this.showUserLogin = this.showUserLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showUserSignup() {
        this.setState({ signup: true });
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
        console.debug("handleSubmit formData=", this.state);
        const { username, password, firstName, lastName, email } = this.state;
        const { signup } = this.context;
        let token = null;
        if(this.state.signup) {
            try {
                token = await JoblyApi.signupUser({ username, password, firstName, lastName, email });
                this.context.setUser(token);
                this.setState({ redirect: true });
                localStorage.setItem("token", token);
            } catch (err) {
                console.error(err);
            }
        } else {
            try {
                token = await JoblyApi.login({ username, password });
                this.context.setUser(token);
                this.setState({ redirect: true });
                localStorage.setItem("token", token);
            } catch (err) {
                console.error(err);
            }
        }
    }

    renderSignupForm() {
        const { username, password, firstName, lastName, email } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username" value={username} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={password} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" value={firstName} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" value={lastName} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" id="email" name="email" value={email} onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }

    renderLoginForm() {
        const { username, password } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username" value={username} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={password} onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }

    render() {
        const { redirect, signup } = this.state;
        if (redirect) {
            return <Redirect to="/" />;
        }
        return (
            <div className="UserForms">
                <h1>{signup ? "Signup" : "Login"}</h1>
                {signup ? this.renderSignupForm() : this.renderLoginForm()}
                <button onClick={this.showUserSignup}>Signup</button>
                <button onClick={this.showUserLogin}>Login</button>
            </div>
        );
    }

    componentDidMount() {
        const { username, password } = this.state;
        if (username && password) {
            this.handleSubmit();
        }
    }
}

export default UserForms;