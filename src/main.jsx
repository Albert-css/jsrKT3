import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter basename={window.location.pathname.includes('github.io') ? `/${window.location.pathname.split('/')[1]}` : "/"}>
  <App />
</BrowserRouter>
);