import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { getBreedsList, getBreed } from "../services/BreedService";

export const BreedsContext = createContext();

export function BreedsContextProvider({ children }) {
  const [breeds, setBreedsFci] = useState(null);
  const [breedsNames, setBreedsName] = useState(null);


  const { user } = useContext(UserContext);


  const breedsList = () => {
      return getBreedsList().then((response) => {
        const arrBreedsNames = []
        response.docs.forEach(element => {
          if (element.raza[1]) {
            const name = {name: element.raza[1].charAt(0).toUpperCase() + element.raza[1].toLowerCase().slice(1), id: element.id};
            arrBreedsNames.push(name)
          } else {
            const name = {name: element.raza[0].charAt(0).toUpperCase() + element.raza[0].toLowerCase().slice(1), id: element.id};
            arrBreedsNames.push(name)
          }
        }
        ); 
        setBreedsFci(response);
        setBreedsName(arrBreedsNames)
      });
  }

 
  useEffect(() => {
    if (user !== null) {
      breedsList();
    }
  }, [user]);

  const value = {
    breedsList,
    breedsNames,
    breeds,
  };
  return <BreedsContext.Provider value={value}>{children}</BreedsContext.Provider>;
}
