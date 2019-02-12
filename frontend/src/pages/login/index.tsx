import React, { FunctionComponent } from "react";
import { Container, Form, FormGroup } from "react-bootstrap";

export const login: FunctionComponent = () => (
  <Container>
    <Form>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control name="email" placeholder="Email Address" />
      </Form.Group>

      <FormGroup>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </FormGroup>

      <Form.Control type="submit" />
    </Form>
    <a href="/register">Don't have an account? Register here</a>
  </Container>
);

export default login;
