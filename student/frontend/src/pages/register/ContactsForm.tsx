import React, { FunctionComponent } from "react";
import { Col, Form } from "react-bootstrap";

import { FormContainer } from "../../components/FormContainer";

import { PlainTextFormControl } from "./PlainTextFormControl";

export const ContactsForm: FunctionComponent = () => (
  <FormContainer name="Contact Details">
    <Form.Row>
      <Col>
        <PlainTextFormControl
          name="cellphoneNumber"
          placeholder="Cellphone Number"
        />
      </Col>
      <Col>
        <PlainTextFormControl
          name="emailAddress"
          placeholder="Email Address"
        />
      </Col>
    </Form.Row>

    <PlainTextFormControl
      name="homeAddress"
      placeholder="Home Address"
    />
  </FormContainer>
);

export default ContactsForm;
