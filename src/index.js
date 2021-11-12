import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./components/App/App.jsx";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
