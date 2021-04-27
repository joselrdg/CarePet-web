import { useContext } from "react";
import { BreedsContext } from "../../context/BreedContext";

export const useBreeds = () => useContext(BreedsContext);