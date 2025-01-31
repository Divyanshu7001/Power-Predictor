import ReactDOM from "react-dom/client";
import React, { createContext, useState } from "react";
import App from "./App.jsx";
import "./index.css";

export const Context = createContext({ isAuthenticated: false });

const Appwrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <Appwrapper />
    </React.StrictMode>
  </>
);
