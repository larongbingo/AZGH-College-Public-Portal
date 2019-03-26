import React, { FunctionComponent } from "react";
import { Col, Form } from "react-bootstrap";

import { FormContainer } from "../../components/FormContainer";

import { CourseSelections } from "./CourseSelections";

export const CourseForm: FunctionComponent = () => (
  <FormContainer name="Course Selection">
    <Form.Row>
      <Col>
        <Form.Group>
          <Form.Label>Course</Form.Label>
          <Form.Control
            as="select"
            name="course"
          >
            <CourseSelections/>
          </Form.Control>
        </Form.Group>
      </Col>
      <Col>
        <Form.Group>
          <Form.Label>{/* TODO: Add a name here */}Entry Type</Form.Label>
          {/* TODO: Change the form control name */}
          <Form.Control
            as="select"
            name="entry"
          >
            <option>Transferee</option>
            <option>Freshman</option>
          </Form.Control>
        </Form.Group>
      </Col>
    </Form.Row>
  </FormContainer>
);

export default CourseForm;
