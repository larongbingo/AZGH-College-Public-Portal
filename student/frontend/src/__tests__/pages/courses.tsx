import { shallow } from "enzyme";
import React from "react";

import CoursesPage from "../../pages/courses";

it("renders without crashing", () => {
  shallow(<CoursesPage/>);
});
