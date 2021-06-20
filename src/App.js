import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Games from "./pages/Games";
import SingleGame from "./pages/SingleGame";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/games/" component={Games} />
        <Route exact path="/games/:slug" component={SingleGame} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
