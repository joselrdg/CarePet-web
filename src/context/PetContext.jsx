import { createContext, useContext, useEffect, useState } from "react";
import { getPetsUser } from "../services/PetService";
import { getAccessToken } from "../stores/AccessTokenStore";
import { UserContext } from "./UserContext";

export const PetsContext = createContext();

export function PetsContextProvider({ children }) {
  const [petsUser, setPetsUser] = useState(null);
  const { user } = useContext(UserContext);

  const getPets = (id) => {
    if (id) {
      return getPetsUser(id).then((response) => setPetsUser(response));
    }
  };

  useEffect(() => {
    if (user !== null && getAccessToken()) {
      const id = user.id;
      getPets(id);
    }
  }, [user]);

  const value = {
    getPets,
    petsUser,
  };
  return <PetsContext.Provider value={value}>{children}</PetsContext.Provider>;
}
