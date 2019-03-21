import { shallow } from "enzyme";
import React from "react";

import ProfilePage from "../../pages/profile";

it("renders without crashing", () => {
  shallow(<ProfilePage/>);
});
