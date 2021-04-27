import React, { useEffect, useState } from "react";
import { getBreedsList } from "../../../../services/BreedService";
import { useCategory } from "../../../hooks/useCategory";
// import { usePet } from '../../hooks/usePet';
import TabPanel from "../TabPanel";
import BreedList from "./BreedList";
// import PetCharacteristics from './PetCharacteristics';

const folderBox = (folder) => {
  switch (folder) {
    case 0:
      return <BreedList />;
    case 1:
      return;
    case 2:
      return;
    // break;

    default:
      break;
  }
};

const BreedScreen = () => {
  const [breedsState, setBreeds] = useState();
  const { stateCategory } = useCategory();
  const { folder } = stateCategory;

  useEffect(() => {
    if (!breedsState) {
      getBreedsList().then((response) => setBreeds(response));
    }
  }, []);
  console.log(breedsState);

  if (!breedsState) {
    return <p>Loading...</p>;
  }

  // const { petsUser } = usePet();
  return (
    <>
      <TabPanel category={1} />
      {
        // folderBox(folder)
      }
    </>
  );
};

export default BreedScreen;
