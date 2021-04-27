import React from "react";
import { Switch, Route, Redirect } from "react-router";
import BreedScreen from "../components/carelink/main/BreedScreen/BreedScreen";



export const BreedsRouter = () => {

  return (
    <div className=''>
          <Switch>
            {/* <Route exact path="/carelink/breeds/list" component={getBreedsList} /> */}
            <Route exact path="/CarePet/Razas" component={BreedScreen} />
            {/* <Route exact path="/carelink/schedule" component={ScheduleScreen} /> */}
            <Redirect to="/" />
          </Switch>
    </div>
  );
};
