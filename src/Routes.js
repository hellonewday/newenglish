import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import App from "./App";
import Admin from "./Admin";
import { Post } from "./Post";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/posts/:id" component={Post} />
        </Switch>
      </BrowserRouter>
    );
  }
}
