import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Users/UserContext";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button, Card, Container, Row } from "reactstrap";
import JoblyApi from "../JoblyApi";

function UserLoginForm() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const { username, password } = e.target;
    try {
      const user = await JoblyApi.login(username.value, password.value);
      setUser(user);
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }


  return (
    <Container>
      <Row>
        <Card body>
          <h2>Login</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="username" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" />
            </FormGroup>
            <Button type="submit">Login</Button>
          </Form>
        </Card>
      </Row>
    </Container>
  );
}

export default UserLoginForm;