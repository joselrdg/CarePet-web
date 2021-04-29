import React from "react";
import { Switch, Route, Redirect } from "react-router";
import BreedScreen from "../components/carelink/main/BreedScreen/BreedScreen";



export const PetsRouter = () => {

  return (
    <div className=''>
          <Switch>
            <Route exact path="/CarePet/Mascotas" children={<BreedScreen folder={0}/>} />
            <Route exact path="/CarePet/Citas" children={<BreedScreen folder={1}/>} />
            <Route exact path="/CarePet/Higiene" children={<BreedScreen folder={2}/>} />
            <Route exact path="/CarePet/Medicación" children={<BreedScreen folder={3}/>} />
            <Route exact path="/CarePet/Reseña" children={<BreedScreen folder={4}/>} />
            <Route exact path="/CarePet/Raza" children={<BreedScreen folder={5}/>} />
            <Route exact path="/CarePet/Add" children={<BreedScreen folder={6}/>} />
            <Redirect to="/" />
          </Switch>
    </div>
  );
}