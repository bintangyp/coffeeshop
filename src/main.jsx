import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/output.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { PrimeReactProvider } from "primereact/api";
// import "primereact/resources/themes/lara-light-cyan/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <PrimeReactProvider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </PrimeReactProvider> */}
  </React.StrictMode>
);
