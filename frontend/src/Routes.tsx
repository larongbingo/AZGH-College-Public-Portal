import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";

import about from "./pages/about";
import courses from "./pages/courses";
import { index } from "./pages/index";

export const routes: FunctionComponent = () => (
  <Switch>
    <Route exact path="/courses" component={courses} />
    <Route exact path="/about" component={about} />
    <Route exact path="/" component={index} />
  </Switch>
);

export default routes;
