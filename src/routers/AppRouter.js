import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { CarelinkRouter } from "./CarelinkRouter";
import { HomeScreen } from "../components/home/HomeScreen";
import { UserContext } from "../context/UserContext";

export const AppRouter = () => {
  const { user } = useContext(UserContext);
  const pahtCareLink = user !== null ? '/CarePet' : '/auth/login'
  
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/auth" component={AuthRouter} />
          <Route path='/CarePet/' component={CarelinkRouter} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
