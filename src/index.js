import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import FormContextProvider from "./components/contexts/FormContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <FormContextProvider>
      <App />
    </FormContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
