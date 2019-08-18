import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import Home from "./components/Home";

const Routes = props => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Home" component={Home} />
  </Switch>
);

export default Routes;
