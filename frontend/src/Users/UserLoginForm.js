import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button, Card, Container, Row } from "reactstrap";
import JoblyApi from "../JoblyApi";

function UserLoginForm() {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        JoblyApi.login(user)
            .then(() => {
                navigate.push("/");
            }).catch(err => {
                setError(err.message);
            }
            );
    }
    return (
        <Container>
            <Row>
                <Card body>
                    <h2>Log in</h2>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" onChange={handleChange} />
                        </FormGroup>
                        <Button type="submit">Log in</Button>
                    </Form>
                    <p>{error}</p>
                </Card>
            </Row>
        </Container>
    );
}

export default UserLoginForm;