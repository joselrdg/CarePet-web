import React from "react";
import { useCategory } from "../../../hooks/useCategory";
// import { usePet } from '../../hooks/usePet';
import TabPanel from "../TabPanel";
import AddPet from "./AddPet.jsx/AddPet";
import Hygiene from "./Hygiene/Hygiene";
import Appointments from "./Appointments/Appointments";
import Medication from "./Medication";
// import PetCharacteristics from './PetCharacteristics';
import PetProfile from "./PetProfile/PetProfile";
import Review from "./Review/Review";

const folderBox = (folder, createpet) => {
  switch (folder) {
    case 0:
      return <PetProfile />;
    case 1:
      return <Appointments />;
    case 2:
      return <Hygiene />;
    case 3:
      return <Medication />;
    case 4:
      return <Review />;
    case 5:
      return <AddPet action={createpet ?'add' : 'edit'  } />;
    // case 6:
    //   return <AddPet action=/>;
    default:
      break;
  }
};

const PetsScreen = () => {
  const { stateCategory } = useCategory();
  const { folder, createpet } = stateCategory;
  // const { petsUser } = usePet();
  return (
    <>
      <TabPanel category={0} />
      {folderBox(folder, createpet)}
    </>
  );
};

export default PetsScreen;
