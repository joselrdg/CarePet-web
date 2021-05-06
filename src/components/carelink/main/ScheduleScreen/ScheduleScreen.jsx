import React from 'react';
import { usePet } from '../../../hooks/usePet';
// import {Schedule} from './Schedule';
import Schedule from './Schedule';
// import TabPanel from "../main/TabPanel";


const ScheduleScreen = () => {
    const { petSelect, editPet } = usePet();

    const {
        wash, willwash,
        haircut, willhaircut,
        earcleaning, willearcleaning,
        teethcleaning, willteethcleaning,
        vaccination, willvaccination,
        deworming, willdeworming
    } = petSelect;

    const data = [
        ...wash, ...willwash,
        ...haircut, ...willhaircut, 
        ...earcleaning, ...willearcleaning,
        ...teethcleaning, ...willteethcleaning,
        ...vaccination, ...willvaccination,
        ...deworming, ...willdeworming
        ]

    const datap = data.map((e, i) => { e.id = i; e.startDate = new Date(e.startDate); return e })
    return (
        <div>
            <Schedule datap={datap} editPet={editPet}/>
        </div>
    )
}

export default ScheduleScreen


