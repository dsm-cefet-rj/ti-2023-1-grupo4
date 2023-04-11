import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.scss";
import "./styles/root.scss";
import AppRouter from "./router";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  </React.StrictMode>
);
