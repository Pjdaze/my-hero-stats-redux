import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import FlippedCard from "./components/FlippedCard";

const Routes = props => (
  <Switch>
    <Route path="/heroDetail" component={FlippedCard} />
    <Route path="/" exact component={App} />
  </Switch>
);

export default Routes;
