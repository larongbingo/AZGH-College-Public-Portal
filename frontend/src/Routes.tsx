import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";

import { index } from "./pages/index";

export const routes: FunctionComponent = () => (
  <Switch>
    <Route exact path="/" component={index} />
  </Switch>
);

export default routes;
