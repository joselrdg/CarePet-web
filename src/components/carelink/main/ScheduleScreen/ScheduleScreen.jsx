import React from 'react';
import { usePet } from '../../../hooks/usePet';
// import {Schedule} from './Schedule';
import Schedule from './Schedule';
// import TabPanel from "../main/TabPanel";


const ScheduleScreen = () => {
    const { petSelect, editPet, editPetSchedule, deletePetSchedule } = usePet();


    if (petSelect) {
        const {
            wash, 
            willwash,
            haircut, willhaircut,
            earcleaning, willearcleaning,
            teethcleaning, willteethcleaning,
            vaccination, willvaccination,
            deworming, willdeworming,
            medication, others
        } = petSelect;

        const datap = [
            ...wash, ...willwash,
            ...haircut, ...willhaircut,
            ...earcleaning, ...willearcleaning,
            ...teethcleaning, ...willteethcleaning,
            ...vaccination, ...willvaccination,
            ...deworming, ...willdeworming,
            ...medication, ...others
        ]

        // const datap = data.map((e, i) => { e.id = i; e.startDate = new Date(e.startDate); return e })
        return (
            <div>
                <Schedule
                    datap={datap}
                    editPet={editPet}
                    editPetSchedule={editPetSchedule}
                    deletePetSchedule={deletePetSchedule}
                    idp={petSelect.id} />
            </div>
        )
    } else {
        const datap = [{id: 0, startDate: new Date(), allday: true, title: 'Añade una mascota'}]
        return (
            <div>
                <Schedule
                    datap={datap}
                    editPet={editPet}
                    editPetSchedule={editPetSchedule}
                    deletePetSchedule={deletePetSchedule}
                    // idp={petSelect.id}
                     />
            </div>
        )

    }
}

export default ScheduleScreen


