import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import FlippedCard from "./components/FlippedCard";

const Routes = props => (
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/heroDetail" component={FlippedCard} />
  </Switch>
);

export default Routes;
