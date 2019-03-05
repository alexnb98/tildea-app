// third party librarys
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Game from "./pages/Game";
import Tutorial from "./pages/Tutorial"

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/dashboard/" component={Dashboard} />
            <Route path="/games/" component={Game} />
            <Route path="/tutorial/" component={Tutorial} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
