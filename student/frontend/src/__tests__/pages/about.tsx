import { shallow } from "enzyme";
import React from "react";

import AboutPage from "../../pages/about";

it("renders without crashing", () => {
  shallow(<AboutPage/>);
});
