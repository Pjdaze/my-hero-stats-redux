import React from "react";

import "./App.css";
import Routes from "./routes";
import { tsPropertySignature } from "@babel/types";
import Home from "./containers/Home";

function App(props) {
  return (
    <div className="App">
      <Home />
      <Routes />
    </div>
  );
}

export default App;
