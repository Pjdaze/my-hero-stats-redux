import React from "react";
import Home from "./components/Home";
import "./App.css";
import Routes from "./routes";
import { tsPropertySignature } from "@babel/types";

function App(props) {
  return (
    <div className="App">
      <Home />
      <Routes />
    </div>
  );
}

export default App;
