// Import necessary modules from React, ReactDOM, and Redux
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./components/Redux/store";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  // Wrap the app with Redux Provider to make the store available to all components
  <Provider store={store}>
    <App />
  </Provider>
  
  // </React.StrictMode>,
);
