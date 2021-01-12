import React, { Component } from "react";
import Login from "./Login";
import Registration from "./Registration";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Register" component={Registration} />
        </Switch>
      </Router>
    );
  }
}
