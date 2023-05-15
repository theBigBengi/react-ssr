// startup point for client side application
import React from "react";
import ReactDom from "react-dom";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

ReactDom.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.querySelector("#root")
);
