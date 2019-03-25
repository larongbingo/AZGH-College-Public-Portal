import React, { FunctionComponent } from "react";
import { Col, Form } from "react-bootstrap";

import { FormContainer } from "../../components/FormContainer";

import { GenderControl } from "./GenderControl";
import { PlainTextFormControl } from "./PlainTextFormControl";

export const PersonalDetailsForm: FunctionComponent = () => (
  <FormContainer name="Personal Information">
    <Form.Row>
      <Col>
        <PlainTextFormControl
          name="firstName"
          placeholder="First Name"
        />
      </Col>
      
      <Col>
        <PlainTextFormControl
          name="middleName"
          placeholder="Middle Name"
        />
      </Col>

      <Col>
        <PlainTextFormControl
          name="lastName"
          placeholder="Last Name"
        />
      </Col>

      <Col>
        <PlainTextFormControl
          name="suffix"
          placeholder="Suffix"
        />
      </Col>
    </Form.Row>

    <Form.Row>
      <Col>
        <GenderControl/>
      </Col>
      <Col>
        <Form.Group>
          <Form.Label>Marital Status</Form.Label>
          <Form.Control
            as="select"
            name="status"
          >
            <option>Single</option>
            <option>Married</option>
            <option>Separated</option>
            <option>Divorced</option>
            <option>Widowed</option>
          </Form.Control>
        </Form.Group>
      </Col>
      <Col>
        <PlainTextFormControl
          name="citizenship"
          placeholder="Citizenship"
        />
      </Col>
      <Col>
        <PlainTextFormControl
          name="religion"
          placeholder="Religion"
        />
      </Col>
    </Form.Row>

    <Form.Row>
      <Col>
        <PlainTextFormControl
          name="birthPlace"
          placeholder="Birth Place"
        />
      </Col>
      <Col>
        <Form.Group>
          <Form.Label>Birth Date</Form.Label>
          <Form.Control
            name="birthDate"
            type="date"
          />
        </Form.Group>
      </Col>
    </Form.Row>
  </FormContainer>
);

export default PersonalDetailsForm;
