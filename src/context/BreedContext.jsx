import { createContext, useContext, useEffect, useState } from "react";
import { getBreedsList } from "../services/BreedService";

export const BreedsContext = createContext();

export function BreedsContextProvider({ children }) {
  const [breeds, setBreeds] = useState(null);

  const getBreeds = () => {
    console.log('por queeeeeeeeeeeeeeeeee')
      // return getBreedsList().then((response) => setBreeds(response));
  };

  useEffect(() => {
      getBreeds();
  },[breeds]);

  const value = {
    getBreeds,
    breeds,
  };
  return <BreedsContext.Provider value={value}>{children}</BreedsContext.Provider>;
}