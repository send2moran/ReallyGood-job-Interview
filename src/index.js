import React from "react";
import ReactDOM from "react-dom";
import ColorPicker from "/components/color-picker";
import { Provider } from "mobx-react";
import { ColorStore } from "../models/ColorStore.js";

import "./styles.css";

function App() {
  return <ColorPicker />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider ColorStore={ColorStore}>
    <App />
  </Provider>,
  rootElement
);
