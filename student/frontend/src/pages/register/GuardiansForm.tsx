import React, { FunctionComponent } from "react";
import { Col, Form } from "react-bootstrap";

import { FormContainer } from "../../components/FormContainer";

import { PlainTextFormControl } from "./PlainTextFormControl";

export const GuardiansForm: FunctionComponent = () => (
  <FormContainer name="Guardian Information">
    <Form.Row>
      <Col>
        <PlainTextFormControl
          name="guadiansFirstName"
          placeholder="Guardian's First Name"
        />
      </Col>
      <Col>
        <PlainTextFormControl
          name="guardiansMiddleName"
          placeholder="Guardian's Middle Name"
        />
      </Col>
      <Col>
        <PlainTextFormControl
          name="guardianLastName"
          placeholder="Guardian's Last Name"
        />
      </Col>
      <Col>
        <PlainTextFormControl
          name="guadiansSuffix"
          placeholder="Guardian's Suffix"
        />
      </Col>
    </Form.Row>
    <Form.Row>
      <Col>
        <PlainTextFormControl
          name="guardiansRelationship"
          placeholder="Relationship"
        />
      </Col>
      <Col>
        <PlainTextFormControl
          name="guardiansOccupation"
          placeholder="Occupation"
        />
      </Col>
      <Col>
        <PlainTextFormControl
          name="guardiansPhoneNumber"
          placeholder="Phone Number"
        />
      </Col>
    </Form.Row>
  </FormContainer>
);

export default GuardiansForm;
