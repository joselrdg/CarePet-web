import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { CarelinkRouter } from "./CarelinkRouter";
import { HomeScreen } from "../components/home/HomeScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/carelink" component={CarelinkRouter} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
