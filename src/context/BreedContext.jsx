import { createContext, useContext, useEffect, useState } from "react";
import { getAccessToken } from "../stores/AccessTokenStore";
import { UserContext } from "./UserContext";
import { getBreedsList } from "../services/BreedService";

export const BreedsContext = createContext();

export function BreedsContextProvider({ children }) {
  const [breedsFci, setBreedsFci] = useState(null);
  const { user } = useContext(UserContext);

  const getBreeds = () => {
    if (user !== null || user !== undefined) {
      return getBreedsList().then((response) => setBreedsFci(response));
    }
  };

  useEffect(() => {
    if (user !== null && getAccessToken()) {
      const id = user.id;
      getBreeds(id);
    }
  }, [user]);

  const value = {
    getBreeds: getBreeds,
    breedsFci: breedsFci,
  };
  return (
    <BreedsContext.Provider value={value}>{children}</BreedsContext.Provider>
  );
}
