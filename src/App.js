import React from "react";
import "./App.css";
import MyRoutes from "./MyRoutes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
