import { createContext, useContext, useEffect, useState } from "react";
import { getBreedsList } from "../services/BreedService";
import { UserContext } from "./UserContext";

export const BreedsContext = createContext();

export function BreedsContextProvider({ children }) {
  const [breeds, setBreeds] = useState(null);
  const { user } = useContext(UserContext);

  const getBreeds = (id) => {
      return getBreedsList(id).then((response) => setBreeds(response));
  };

  useEffect(() => {
    if (user !== null) {
      getBreeds();
    }
  }, [user]);

  const value = {
    getBreeds,
    breeds,
  };
  return <BreedsContext.Provider value={value}>{children}</BreedsContext.Provider>;
}