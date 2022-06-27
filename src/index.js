import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reactAxe from "@axe-core/react";

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV !== "production") {
  reactAxe(React, ReactDOM, 1000, undefined, undefined, ({ violations }) => {
    violations.forEach(({ nodes = [] }) => {
      nodes.forEach(({ target }) => {
        const node = document.querySelector(target);
        node.style.border = "2px dotted blue";
        node.style["box-sizing"] = "border-box";
      });
    });
  });
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
