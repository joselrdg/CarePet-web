import React from "react";
import Pet from "./Pet";

 const Pets = ({pets}) => {
     return (
         <div className=""> 
         <h1>Pets:</h1>
         {pets.map(pet => <Pet {...pet} key={pet.id}/>)}       
    </div>
  );
};

export default Pets