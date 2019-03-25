import { shallow } from "enzyme";
import React from "react";

import FormContainerComponent from "../../components/FormContainer";

it("renders without crashing", () => {
  shallow(<FormContainerComponent name="Testing"/>);
});
