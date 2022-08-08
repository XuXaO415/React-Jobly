import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";
import JoblyApi from "../JoblyApi";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  Container,
  Row,
} from "reactstrap";

function UserLoginForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    
    const { currentUser } = useContext(UserContext);
    const history = useHistory();
    console.debug("UserLoginForm rendered=", Boolean, "currentUser=", currentUser);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.debug("handleSubmit formData=", formData);
        JoblyApi.login(formData)
        .then((res) => {
            console.debug("login response=", res);
            history.push("/");
        })
        .catch((err) => {
            console.error("login error=", err);
        }
        );
    }

    return (
        <Container className="mt-5">
        <Row className="UserLoginForm">
            <Card body>
            <h1>Login</h1>
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
                <Button type="submit">Login</Button>
            </Form>
            </Card>
        </Row>
        </Container>
    );
}

export default UserLoginForm;
