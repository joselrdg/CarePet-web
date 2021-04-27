import { createContext, useContext, useEffect, useState } from "react";
import { getAccessToken } from "../stores/AccessTokenStore";
import { UserContext } from "./UserContext";
import { getBreedsList } from "../services/BreedService";

export const BreedsContext = createContext();

export function BreedsContextProvider({ children }) {
  const [breeds, setBreedsFci] = useState(null);
  const { user } = useContext(UserContext);

  const getBreeds = (id) => {
    if (id) {
      console.log(id)
      return getBreedsList().then((response) => setBreedsFci(response));
    }
  };

  useEffect(() => {
    if (user !== null) {
      const id = user.id;
      getBreeds(id);
    }
  }, [user]);

  const value = {
    getBreeds,
    breeds,
  };
  return <BreedsContext.Provider value={value}>{children}</BreedsContext.Provider>;
}
