import React from "react";

import Alimentacion from './Alimentacion'
import Desparasitacion from "./Desparasitacion";
import Higiene from "./Higiene";
import Vacunacion from "./Vacunacion";
import Legales from "./Legales";
import Esterelizacion from "./Esterilizacion";
import Manejo from "./Manejo";
import Adiestramiento from "./Adiestramiento";
import Limites from "./Limites";


const data = [
  <Alimentacion />,
  <Desparasitacion />,
  <Higiene />,
  <Vacunacion />,
  <Legales />,
  <Esterelizacion />,
  <Manejo />,
  <Adiestramiento />,
  <Limites />
]


const RecommendationsScreen = () => {

  const renderNote = (num) => {

  return data[num]
}



const num = Math.floor(Math.random() * (data.length - 1))
return (
  <>
    {renderNote(num)}
  </>
);
};

export default RecommendationsScreen;
