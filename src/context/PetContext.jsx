import { createContext, useContext, useEffect, useState } from "react";
import { getPetsUser, editPetUser, editPetUserSchedule, deletePetUserSchedule } from "../services/PetService";
import { UserContext } from "./UserContext";

export const PetsContext = createContext();

export function PetsContextProvider({ children }) {
  const [petsUser, setPetsUser] = useState(null);
  const [petSelect, setPetSelect] = useState(null)
  const [renderPets, setRenderPets] = useState(0)
  const [stateCategories, setStateCategories] = useState({
    petsName: null,
    petNumber: 0,
    categoryNumber: 0,
    subcategoryNumber: 0,
  });
  const { user } = useContext(UserContext);

  const getPets = (id) => {
    if (id) {
      console.log('getPets')
      return getPetsUser(id).then((response) => {
        setPetsUser(response);
      });
    }
  }

  const editPet = (body, id) => {
    return editPetUser(body, id).then((response) => {
      setPetSelect(response)
    });
  };

  const setPetRenSelected = (r) => {
    setPetSelect(r)
  }

  const editPetSchedule = (body, id) => {
    return editPetUserSchedule(body, id).then((response) => {
      setPetSelect(response)
    });
  };
  const deletePetSchedule = (body, id) => {
    return deletePetUserSchedule(body, id).then((response) => {
      setPetSelect(response)
    });
  };

  const setPet = (pet = 0) => {
    petsUser !== null &&
      setPetSelect(petsUser[pet])
  }


  


  useEffect(() => {
    console.log('useefect pets. rederpets: ' + renderPets)
    if (user !== null ) {
      const id = user.id;
      getPets(id);

    }
  }, [user, renderPets]);

  const value = {
    getPets,
    editPet,
    setPetsUser,
    setPetSelect,
    petsUser,
    setPet,
    petSelect,
    editPetSchedule,
    deletePetSchedule,
    setRenderPets,
    stateCategories,
    setStateCategories
  };
  return <PetsContext.Provider value={value}>{children}</PetsContext.Provider>;
}
