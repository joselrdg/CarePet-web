import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import { CarelinkScreen } from "../components/carelink/CarelinkScreen";
import Pet from "../components/pet/Pet";

export const CarelinkRouter = () => {
  useEffect(()=>{

  },[])
  return (
    <div className='journal__main-content'>
    <div className=''>
      <Switch>
        <Route exact path="/carelink" component={CarelinkScreen} />
        <Route exact path="/carelink/pet/:id/edit" component={CarelinkScreen} />
        <Route exact path="/carelink/pet/:id" component={Pet} />
        <Redirect to='/auth/login'/>
      </Switch>
      </div>
    </div>
  );
};