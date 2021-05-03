
import React from "react";
import { useCategory } from "../../../hooks/useCategory";
import TabPanel from "../TabPanel";
import BreedList from "./BreedList";
import Groups from "./Groups";
// import PetCharacteristics from './PetCharacteristics';

const folderBox = (folder, breeds) => {
  switch (folder) {
    case 0:
      return <Groups breeds={breeds}/>;
    case 1:
      return <BreedList breeds={breeds}/>;
    case 2:
      return;

    default:
      break;
  }
};

const BreedScreen = () => {
  const { stateCategory } = useCategory();
  const { folder } = stateCategory;

  // useEffect(() => {
  //   getBreeds()
  // }, [getBreeds]);


  // if (breeds !== null) {
  //   return <p>Loading...</p>;
  // }

  // const { petsUser } = usePet();
  return (
    <>
      <TabPanel category={1} />
      {
        folderBox(folder)
      }
    </>
  );
};

export default BreedScreen;
