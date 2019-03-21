import { shallow } from "enzyme";
import React from "react";

import LogInPage from "../../pages/login";

it("renders without crashing", () => {
  shallow(<LogInPage/>);
});
