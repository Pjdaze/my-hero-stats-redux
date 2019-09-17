import React from "react";

import "./App.css";
import Routes from "./routes";
import { tsPropertySignature } from "@babel/types";
import Home from "./containers/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.store);
  }
  render() {
    return (
      <div className="App">
        <Home />
        <Routes />
      </div>
    );
  }
}

export default App;
