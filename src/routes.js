import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import App from "./App";

const Routes = props => (
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/App" component={App} />
  </Switch>
);

export default Routes;
