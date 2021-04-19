import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import { CarelinkScreen } from "../components/carelink/CarelinkScreen";
import PetsScreen from "../components/carelink/main/PetsScreen";



export const CategoryRouter = () => {
  useEffect(()=>{

  },[])

  return (
    <div className='journal__main-content'>
    <div className=''>
      <Switch>
        <Route exact path="/carelink/pets" component={PetsScreen} />
        <Route exact path="/carelink/pet/:id/edit" component={CarelinkScreen} />
        <Redirect to='/carelink'/>
      </Switch>
      </div>
    </div>
  );
};


