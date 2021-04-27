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
        <Route exact path="/CarePet/Mascotas" component={PetsScreen} />
        <Route exact path="/CarePet/pet/:id/edit" component={CarelinkScreen} />
        <Redirect to='/CarePet'/>
      </Switch>
      </div>
    </div>
  );
};


