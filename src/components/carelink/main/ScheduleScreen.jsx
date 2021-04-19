import React from 'react';
import { usePet } from '../../hooks/usePet';
import TabPanel from "../main/TabPanel";


const ScheduleScreen = () => {
    const { petsUser } = usePet();
    console.log(petsUser)


    return (
        <div>
        <h1>ScheduleScreen</h1>
        </div>
    )
}

export default ScheduleScreen