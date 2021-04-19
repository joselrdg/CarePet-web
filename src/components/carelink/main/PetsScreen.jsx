import React from 'react';
import { usePet } from '../../hooks/usePet';
import TabPanel from "../main/TabPanel";


const PetsScreen = () => {
    const { petsUser } = usePet();
    console.log(petsUser)


    return (
        <div>
        <h1>PetsScreen</h1>
        </div>
    )
}

export default PetsScreen