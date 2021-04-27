import React from 'react';
import { useCategory } from '../../../hooks/useCategory';
// import { usePet } from '../../hooks/usePet';
import TabPanel from "../TabPanel";
import AddPet from './AddPet.jsx/AddPet';
import AddPetForm from './AddPetForm';
// import PetCharacteristics from './PetCharacteristics';
import PetProfile from './PetProfile';

const folderBox = (folder) => {
    switch (folder) {
        case 0:
            return <BreedList />
        case 1:
            return <AddPetForm />
        case 2:
            return <AddPet />
            // break;

        default:
            break;
    }
}

const PetsScreen = () => {
    const { stateCategory } = useCategory()
    const { folder } = stateCategory
    // const { petsUser } = usePet();
    return (
        <>
            <TabPanel category={0} />
            {
                folderBox(folder)
            }
        </>
    )
}

export default PetsScreen