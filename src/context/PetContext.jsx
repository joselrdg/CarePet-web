import { createContext, useContext, useEffect, useState } from "react";
import { getPetsUser } from "../services/PetService";
import { getAccessToken } from "../stores/AccessTokenStore";
import { UserContext } from "./UserContext";

export const PetsContext = createContext();

export function PetsContextProvider({ children }) {
  const [petsUser, setPetsUser] = useState(null);
  const [petSelect, setPetSelect] = useState()
  const { user } = useContext(UserContext);

  const getPets = (id) => {
    if (id) {
      return getPetsUser(id).then((response) => {
        setPetsUser(response)
      });
    }
  };

  const setPet = (pet = 0) => {
    petsUser !== null &&
    setPetSelect(petsUser[pet])
  }

  useEffect(() => {
    if (user !== null) {
      const id = user.id;
      getPets(id);
    }
  }, [user]);

  const value = {
    getPets,
    petsUser,
    setPet,
    petSelect
  };
  return <PetsContext.Provider value={value}>{children}</PetsContext.Provider>;
}
