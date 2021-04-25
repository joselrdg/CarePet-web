import React, { useContext } from "react";
import { PetsContext } from "../../context/PetContext";

import Pet from "./Pet";

const Pets = () => {
  const { petsUser } = useContext(PetsContext);
 
  if(!petsUser){
    return (<p>Loading...</p>)
  }
// aldfskljadfs
  return (
    <div className="">
      <h1>Pets:</h1>
      {petsUser.map((pet) => (
        <Pet {...pet} key={pet.id} />
      ))}
    </div>
  );
};

export default Pets;
