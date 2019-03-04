// third party librarys
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/Dashboard/" component={Dashboard} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
