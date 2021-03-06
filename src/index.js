import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Todo from "./todo";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Todo />
  </StrictMode>,
  rootElement
);
