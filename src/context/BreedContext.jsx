import { createContext, useContext, useEffect, useState } from "react";
import { getAccessToken } from "../stores/AccessTokenStore";
import { UserContext } from "./UserContext";
import { getBreedsList } from "../services/BreedService";
import { UserContext } from "./UserContext";

export const BreedsContext = createContext();

export function BreedsContextProvider({ children }) {
<<<<<<< HEAD
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
=======
  const [breeds, setBreeds] = useState(null);
  const { user } = useContext(UserContext);

  const getBreeds = (id) => {
      return getBreedsList(id).then((response) => setBreeds(response));
  };

  useEffect(() => {
    if (user !== null) {
      getBreeds();
>>>>>>> 00da904febe7161870bb819dad172d2ffa8d99ff
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
