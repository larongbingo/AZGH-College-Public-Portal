import React, { FunctionComponent } from "react";
import { Col, Form } from "react-bootstrap";

import { FormContainer } from "../../components/FormContainer";

import { PlainTextFormControl } from "./PlainTextFormControl";

export const ScholasticBackgroundForm: FunctionComponent = () => (
  <FormContainer name="Scholastic Background">
    <PlainTextFormControl
      name="lrn"
      placeholder="Learner's Reference Number"
    />
    
    <Form.Row>
      <Col>
        <PlainTextFormControl
          name="elementaryName"
          placeholder="Elemetary School Name"
        />
      </Col>
      <Col>
        <PlainTextFormControl
          name="elementaryYear"
          placeholder="Year Graduated at Elementary"
        />
      </Col>
    </Form.Row>

    <Form.Row>
      <Col>
        <PlainTextFormControl
          name="juniorName"
          placeholder="Junior High School Name"
        />
      </Col>
      <Col>
        <PlainTextFormControl
          name="juniorYear"
          placeholder="Year Graduated at Junior High"
        />
      </Col>
    </Form.Row>

    <Form.Row>
      <Col>
        <PlainTextFormControl
          name="seniorName"
          placeholder="Senior High School Name"
        />
      </Col>
      <Col>
        <PlainTextFormControl
          name="seniorTract"
          placeholder="Program/Track & Strand/Specialization"
        />
      </Col>
      <Col>
        <PlainTextFormControl
          name="seniorYear"
          placeholder="Year Graduated at Senior High"
        />
      </Col>
    </Form.Row>
  </FormContainer>
);
