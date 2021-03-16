import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoAutorizado from "./pages/No-Autorizado";

import Home from "./pages/Home";
import Autorizado from "./pages/Autorizado";
import NotFound from "./pages/NotFound";

import "./assets/css/App.css";
import logo from "./assets/img/rcnlogo.png";

export default function App() {
  return (
    <Router>
      <div>
        <header className="header-logo">
          <a href="/">
            <img src={logo} alt="logo rcn" />
          </a>
        </header>
        <Switch>
          <Route path="/autorizado">
            <Autorizado />
          </Route>
          <Route path="/noautorizado">
            <NoAutorizado />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
