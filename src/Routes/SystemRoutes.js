import React from "react";
import history from "./History";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import Events from "./../Pages/Events/Events";
import CreateEvent from "../Pages/Events/CreateEvent/CreateEvent";
import EventDetails from "../Pages/Events/EventDetails/EventDetails";
const SystemRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/events" component={Events} exact />
        <Route path="/create-event" component={CreateEvent} exact />
        <Route path="/event-details" component={EventDetails} exact />
        <Route path="/" component={Events} />
        <Redirect to="/events" />
      </Switch>
    </Router>
  );
};

export default SystemRoutes;
