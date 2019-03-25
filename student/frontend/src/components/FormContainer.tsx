import React, { FunctionComponent } from "react";

import "./FormContainer.css";

export const FormContainer: FunctionComponent<{name: string}> = ({children, name}) => (
  <>
    <h5 id="form-container-name">{name}</h5>
    {children}
  </>
);

export default FormContainer;
