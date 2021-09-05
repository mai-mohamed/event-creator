import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import history from "./History";
import Login from "./../Pages/Auth/Login/Login";

const AuthRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default AuthRoutes;
