import React, { FunctionComponent } from "react";
import { Form } from "react-bootstrap";

export const GenderControl: FunctionComponent = () => (
  <Form.Group>
    <Form.Label>Gender</Form.Label>
    <Form.Control
      name="gender"
      as="select"
    >
      <option>Male</option>
      <option>Female</option>
    </Form.Control>
  </Form.Group>
);

export default GenderControl;
