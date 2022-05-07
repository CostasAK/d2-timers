import "./App.scss";

import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes as Switch,
} from "react-router-dom";

import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Links } from "./pages/Links/index";
import Navigation from "./components/Navigation";
import React from "react";
import { Timers } from "./pages/Timers";

export default function App() {
  // Changes to routes should also go in site.webmanifest
  const routes = [
    { name: "Timers", path: "/Timers", component: <Timers /> },
    { name: "Links", path: "/Links", component: <Links /> },
  ];

  return (
    <div id="app">
      <Header />

      <Router>
        <Navigation routes={routes} />

        <main id="main">
          <Background />
          <Switch>
            <Route exact path="/" element={<Navigate to="/Timers" />} />
            {routes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={<div id="page-content">{route.component}</div>}
              />
            ))}
          </Switch>
        </main>
      </Router>

      <Footer />
    </div>
  );
}