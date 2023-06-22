import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "https://s3-eu-west-1.amazonaws.com/static.wizrocket.com/js/sw_webpush.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(
      "https://s3-eu-west-1.amazonaws.com/static.wizrocket.com/js/sw_webpush.js"
    )
    .then(function (registration) {
      console.log("===success");
    })
    .catch(function (err) {
      console.log("===error", err);
    });
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
