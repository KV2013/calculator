import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./js/redux/configureStore";
import App from "./js/App";
import "./css/main.css";

const initialState = {
  expressionStack: [],
  history: [],
  negativeNumberMode: false,
};

const store = configureStore(initialState);
const wrapper = document.getElementById("container");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  wrapper
);
