import React from "react";
import { Form } from "react-bootstrap";

export function PlainTextFormControl({name, placeholder}: {name: string, placeholder: string}) {
  return (
    <Form.Group>
      <Form.Label>{placeholder}</Form.Label>
      <Form.Control
        name={name}
        type="text"
        placeholder={placeholder}
      />
    </Form.Group>
  );
}

export default PlainTextFormControl;
