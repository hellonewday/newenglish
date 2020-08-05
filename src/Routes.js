import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import App from "./App";
import Admin from "./Admin";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </BrowserRouter>
    );
  }
}
