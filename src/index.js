import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { HashRouter } from "react-router-dom";
import Routes from "./routes";

import {
  searchHeroes,
  setHeroID,
  setOnClick,
  requestHeroes,
  selectedHero
} from "./reducers";
import * as serviceWorker from "./serviceWorker";

const logger = createLogger();
const rootReducer = combineReducers({
  searchHeroes,
  requestHeroes,
  setHeroID,
  setOnClick,
  selectedHero
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <Routes />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
