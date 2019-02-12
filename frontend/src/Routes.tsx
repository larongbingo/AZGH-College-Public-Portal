import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";

import about from "./pages/about";
import courses from "./pages/courses";
import { index } from "./pages/index";
import login from "./pages/login";
import register from "./pages/register";

export const routes: FunctionComponent = () => (
  <Switch>
    <Route exact path="/login" component={login} />
    <Route exact path="/register" component={register} />
    <Route exact path="/courses" component={courses} />
    <Route exact path="/about" component={about} />
    <Route exact path="/" component={index} />
  </Switch>
);

export default routes;
