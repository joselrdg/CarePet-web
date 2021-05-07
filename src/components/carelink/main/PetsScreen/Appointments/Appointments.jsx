import React, { useState } from 'react';
import { usePet } from '../../../../hooks/usePet';
import Schedule from '../../ScheduleScreen/ScheduleScreen';
import ListAppointments from './ListAppointments';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import { Button } from '@material-ui/core';

export default function Appointments() {
    const [open, setOpen] = useState(false)

    const { petSelect, editPet, editPetSchedule, deletePetSchedule } = usePet();

    const {
        wash,
        willwash,
        haircut, willhaircut,
        earcleaning, willearcleaning,
        teethcleaning, willteethcleaning,
        vaccination, willvaccination,
        deworming, willdeworming,
        others
    } = petSelect;

    const data = [
        ...wash, ...willwash,
        ...haircut, ...willhaircut,
        ...earcleaning, ...willearcleaning,
        ...teethcleaning, ...willteethcleaning,
        ...vaccination, ...willvaccination,
        ...deworming, ...willdeworming,
        ...others
    ]
    const handleOnclick = () => {
        setOpen(!open)
    }

    return (
        <div className='__m-1'>
            <Button
            onClick={handleOnclick}
                className='__m-1'
                variant="contained"
                color="default"
                startIcon={<InsertInvitationIcon />}
            >
      </Button>

            <ListAppointments />
            {
                open &&
                <Schedule />
            }

        </div>
    )
}