import React, { useState, useContext } from "react";
// https://bobbyhadz.com/blog/react-export-usehistory-was-not-found-in-react-router-dom
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";
import {
  Container,
  Row,
  Card,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";


function UserSignupForm() {
    const INITIAL_STATE = {
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: ""
    };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const { currentUser } = useContext(UserContext);
    const history = useHistory();
    console.debug("UserSignUpForm rendered=", Boolean, "currentUser=", currentUser);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.debug("handleSubmit formData=", formData);
        history.push("/");
    }

    return (
        <Container className="mt-5">
            <Row className="UserSignupForm">
                <Card body>
                    <h1>Sign Up</h1>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder="Username" 
                            onChange={handleChange} 
                            value={formData.username}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={formData.password}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="first_name">First Name</Label>
                            <Input
                            type="text"
                            name="first_name"
                            id="first_name"
                            placeholder="First Name"
                            onChange={handleChange}
                            value={formData.first_name}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="last_name">Last Name</Label>
                            <Input
                            type="text"
                            name="last_name"
                            id="last_name"
                            placeholder="Last Name"
                            onChange={handleChange}
                            value={formData.last_name}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={handleChange}
                            value={formData.email}
                            />
                        </FormGroup>
                        <Button color="primary" type="submit">Sign Up</Button>
                    </Form>
                </Card>
            </Row>
        </Container>
    );
}


export default UserSignupForm;
