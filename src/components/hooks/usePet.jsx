import { useContext } from "react";
import { PetsContext } from "../../context/PetContext";

export const usePet = () => useContext(PetsContext);