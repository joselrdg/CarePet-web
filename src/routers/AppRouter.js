import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import { AuthRouter } from "./AuthRouter";
import { CarelinkRouter } from "./CarelinkRouter";
import { HomeScreen } from "../components/home/HomeScreen";


export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/carelink" component={CarelinkRouter} />
          <Route path="/auth" component={AuthRouter} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
