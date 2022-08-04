import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { useHistory } from "react-router-dom"; // hook to get the user from the context is not working --> https://bobbyhadz.com/blog/react-export-usehistory-was-not-found-in-react-router-dom
import { useNavigate } from "react-router-dom";
import { Container, Row, Card, Button, Form, FormGroup, Label, Input} from "reactstrap";


function UserSignupForm({ signup }) {
    const [user, setUser] = useState({
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: ""
    });
    // const history = useHistory();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        signup(user)
            .then(() => {
                navigate.push("/");
            }).catch(err => {
                setError(err.message);
            }
            );
    }
    return (
        <Router>
                <Route exact path="/signup">
                    <Container>
                        <Row>
                            <Card body>
                                <h2>Sign up</h2>
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <Label for="username">Username</Label>
                                        <Input type="text" name="username" id="username" onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input type="password" name="password" id="password" onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="first_name">First Name</Label>
                                        <Input type="text" name="first_name" id="first_name" onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="last_name">Last Name</Label>
                                        <Input type="text" name="last_name" id="last_name" onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input type="text" name="email" id="email" onChange={handleChange} />
                                    </FormGroup>
                                    <Button type="submit">Sign up</Button>
                                </Form>
                                <p>{error}</p>
                            </Card>
                        </Row>
                    </Container>
                </Route>
        </Router>
    );
}

export default UserSignupForm;