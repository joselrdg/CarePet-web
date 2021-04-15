import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { CarelinkScreen } from "../components/carelink/CarelinkScreen";

export const CarelinkRouter = () => {
  return (
    <div className=''>
    <div className=''>
      <Switch>
        <Route exact path="/carelink" component={CarelinkScreen} />
        <Redirect to='/auth/login'/>
      </Switch>
      </div>
    </div>
  );
};