// Super simple skeleton for a user profile form

import React, {
    useContext
} from "react";
import UserContext from "./UserContext";
function UserProfileForm() {
    const {
        user,
        updateUser
    } = useContext(UserContext);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            updateUser(user.username, {
                first_name: e.target.first_name.value,
                last_name: e.target.last_name.value,
                email: e.target.email.value,
                password: e.target.password.value
            });
        }}>
            <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    name="first_name"
                    defaultValue={user.first_name}
                />
            </div>
            <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    name="last_name"
                    defaultValue={user.last_name}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    defaultValue={user.email}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Update Profile
            </button>
        </form>
    );

}

export default UserProfileForm;