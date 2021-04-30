import { createContext, useContext, useEffect, useState } from "react";
import { getPetsUser, editPetUser } from "../services/PetService";
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
let rederpetcontext = 0
  const editPet = (body,id) => {
      return editPetUser(body, id).then((response) => {
        console.log('-----------------------------------------pet context respose edit')
        console.log(response);
        setPetSelect(response)
      });
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
  }, [user, petSelect]);

  const value = {
    getPets,
    editPet,
    petsUser,
    setPet,
    petSelect
  };
  return <PetsContext.Provider value={value}>{children}</PetsContext.Provider>;
}
