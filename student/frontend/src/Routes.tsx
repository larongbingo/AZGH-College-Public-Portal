import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";

import about from "./pages/about";
import courses from "./pages/courses";
import { index } from "./pages/index";
import login from "./pages/login";
import page404 from "./pages/page404";
import profile from "./pages/profile";

export const routes: FunctionComponent = () => (
  <Switch>
    <Route exact path="/profile" component={profile} />
    <Route exact path="/login" component={login} />
    <Route exact path="/courses" component={courses} />
    <Route exact path="/about" component={about} />
    <Route exact path="/" component={index} />
    <Route component={page404} />
  </Switch>
);

export default routes;
