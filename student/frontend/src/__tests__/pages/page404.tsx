import { shallow } from "enzyme";
import React from "react";

import Page404 from "../../pages/page404";

it("renders without crashing", () => {
  shallow(<Page404/>);
});
