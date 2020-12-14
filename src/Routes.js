import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import App from "./App";
import Admin from "./Admin";
<<<<<<< HEAD
import { Post } from "./Post";
=======
import Post from "./Post";
>>>>>>> 2ac9b4ccf8d8a81b4777a5a1dfcc9a810d0e3d8b

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/admin" component={Admin} />
<<<<<<< HEAD
          <Route exact path="/posts/:id" component={Post} />
=======
          <Route exact path="/post/:id" component={Post}/>
>>>>>>> 2ac9b4ccf8d8a81b4777a5a1dfcc9a810d0e3d8b
        </Switch>
      </BrowserRouter>
    );
  }
}
