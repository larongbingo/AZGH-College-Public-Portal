import { shallow } from "enzyme";
import React from "react";

import IndexPage from "../../pages/index";

it("renders without crashing", () => {
  shallow(<IndexPage/>);
});
