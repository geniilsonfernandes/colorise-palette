import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Navegation from "./components/Navegation/Navegation";
import Footer from "./components/Footer/Footer";
import { ColorsProvider } from "./Hook/colors/index";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <ColorsProvider>
        <Navegation />
        <Router />
        <Footer />
      </ColorsProvider>
    </BrowserRouter>
  );
}

export default App;
