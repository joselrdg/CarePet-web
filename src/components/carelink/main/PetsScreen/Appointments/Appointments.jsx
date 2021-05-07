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
    let actionStart = 'all'
    let actionEnd = 'all'
    const handleOnclick = (action) => {
        console.log(action === 'wash')
        if (action = 'schedule') {
            setOpen(!open)
        } else if (action === 'wash') {
            actionStart = 'wash';
            actionEnd = 'willwash';
        } else if (action === 'haircut') {
            actionStart = 'haircut';
            actionEnd = 'willhaircut';
        } else if (action === 'earcleaning') {
            actionStart = 'earcleaning';
            actionEnd = 'willearcleaning';
        } else if (action === 'teethcleaning') {
            actionStart = 'teethcleaning';
            actionEnd = 'willteethcleaning';
        } else if (action === 'vaccination') {
            actionStart = 'vaccination';
            actionEnd = 'willvaccination';
        } else if (action === 'deworming') {
            actionStart = 'deworming';
            actionEnd = 'willdeworming';
        } else if (action === 'others') {
            actionStart = 'others';
            actionEnd = 'others';
        }
    }

    const handleSchedule = (action) => {
        setOpen(!open)
    }


    return (
        <div className='__m-1'>
            <Button
                name='wash'
                onClick={() => handleOnclick('wash')}
                className='__m-1'
                variant="contained"
                color="default"
                startIcon={<i className="fas fa-bath __icon-light"></i>}
            >
            </Button>
            <Button
                onClick={handleOnclick}
                name='haircut'
                className='__m-1'
                variant="contained"
                color="default"
                startIcon={<i className="fas fa-cut  __icon-light"></i>}
            >
            </Button>
            <Button
                name='earcleaning'
                onClick={handleOnclick}
                className='__m-1'
                variant="contained"
                color="default"
                startIcon={<i className="fas fa-tooth __icon-light"></i>}
            >
            </Button>
            <Button
                name='teethcleaning'
                onClick={handleOnclick}
                className='__m-1'
                variant="contained"
                color="default"
                startIcon={<i className="fas fa-hand-sparkles __icon-light"></i>}
            >
            </Button>
            <Button
                name='deworming'
                onClick={handleOnclick}
                className='__m-1'
                variant="contained"
                color="default"
                startIcon={<i className="fas fa-bug __icon-light"></i>}
            >
            </Button>
            <Button
                name='vaccination'
                onClick={handleOnclick}
                className='__m-1'
                variant="contained"
                color="default"
                startIcon={<i className="fas fa-syringe __icon-light"></i>}
            >
            </Button>
            <Button
                name='others'
                onClick={handleOnclick}
                className='__m-1'
                variant="contained"
                color="default"
                startIcon={<i className="fas fa-syringe __icon-light"></i>}
            >
                Otros
            </Button>
            <Button
                name='schedule'
                onClick={handleSchedule}
                className='__m-1'
                variant="contained"
                color="default"
                startIcon={<InsertInvitationIcon />}
            >
            </Button>
            <ListAppointments actionStart={actionStart} actionEnd={actionEnd} />
            {
                open &&
                <Schedule />
            }

        </div>
    )
}