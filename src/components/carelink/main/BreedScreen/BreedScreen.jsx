
import React, { useEffect, useState } from "react";
import { getBreedsList } from "../../../../services/BreedService";
import { useBreeds } from "../../../hooks/useBreed";
import { useCategory } from "../../../hooks/useCategory";
import { usePet } from "../../../hooks/usePet";
// import { usePet } from '../../hooks/usePet';
import TabPanel from "../TabPanel";
import BreedList from "./BreedList";
// import PetCharacteristics from './PetCharacteristics';

const folderBox = (folder, breeds) => {
  switch (folder) {
    case 0:
      return <BreedList breeds={breeds}/>;
    case 1:
      return;
    case 2:
      return;

    default:
      break;
  }
};

const BreedScreen = () => {
  const { breeds, getBreeds } = useBreeds();
  const { stateCategory } = useCategory();
  const { folder } = stateCategory;

  // useEffect(() => {
  //   if (breeds !== null) {
  //     getBreeds()
  //   }
  // }, [breeds]);

  console.log(breeds)

  if (!breeds) {
    return <p>Loading...</p>;
  }

  // const { petsUser } = usePet();
  return (
    <>
      <TabPanel category={1} />
      {
        folderBox(folder, breeds)
      }
    </>
  );
};

export default BreedScreen;
