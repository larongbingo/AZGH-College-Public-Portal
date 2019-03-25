import { shallow } from "enzyme";
import React from "react";

import RegisterPage from "../../pages/register";

it("renders without crashing", () => {
  shallow(<RegisterPage/>);
});
