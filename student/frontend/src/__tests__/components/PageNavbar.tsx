import { shallow } from "enzyme";
import React from "react";

import PageNavbarComponent from "../../components/PageNavbar";

it("renders without crashing", () => {
  shallow(<PageNavbarComponent/>);
});
