import React from 'react';
import { usePet } from '../../../hooks/usePet';
import Schedule from './Schedule';
// import TabPanel from "../main/TabPanel";


const ScheduleScreen = () => {
    const { petSelect, setPet } = usePet();
    const { wash, haircut, earcleaning, teethcleaning, vaccination, deworming } = petSelect;
    const data = [...wash, ...haircut, ...earcleaning, ...teethcleaning, ...vaccination, ...deworming]
    let datadate = []
  
    return (
        <div>
            <Schedule data={datadate}/>
        </div>
    )
}

export default ScheduleScreen


