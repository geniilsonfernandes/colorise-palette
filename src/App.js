import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Navegation from "./components/Navegation/Navegation";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Navegation />
      <Router />
    </BrowserRouter>
  );
}

export default App;
