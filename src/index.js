import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Reset } from "styled-reset";
import Main from "page/Main";
import User from "page/User";
import Test from "page/Test";
import New from "page/New";
Amplify.configure(config);
const root = ReactDOM.createRoot(document.getElementById("root"));
const rootElement = document.getElementById("root");
root.render(
  <>
    <BrowserRouter>
      <Reset />
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<Main />} />
        <Route path="new" element={<New />} />
        {/* <Route path="user" element={<User />} /> */}
        <Route path="test" element={<Test />} />
        {/* <Route path="order" element={<Order />} /> */}
      </Routes>
    </BrowserRouter>

    {/* <React.StrictMode>
      <App />
    </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
