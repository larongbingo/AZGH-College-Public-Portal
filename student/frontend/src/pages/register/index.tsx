import React, { FunctionComponent } from "react";
import { Container, Form } from "react-bootstrap";

import { ENDPOINT } from "../../config";

import { ContactsForm } from "./ContactsForm";
import { CourseForm } from "./CourseForm";
import { GuardiansForm } from "./GuardiansForm";
import { PersonalDetailsForm } from "./PersonalDetailsForm";
import { ScholasticBackgroundForm } from "./ScholasticBackgroundForm";

export const register: FunctionComponent = () => (
  <Container>
    <Form action={`${ENDPOINT}/apis/user/register`} method="post">
      <CourseForm/>
      <PersonalDetailsForm/>
      <ContactsForm/>
      <ScholasticBackgroundForm/>
      <GuardiansForm/>

      <Form.Control
        type="submit"
        value="Register"
      />
    </Form>
  </Container>
);

export default register;
