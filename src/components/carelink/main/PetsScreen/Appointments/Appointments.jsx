import React, { useState } from 'react';
import { usePet } from '../../../../hooks/usePet';
import Schedule from '../../ScheduleScreen/ScheduleScreen';
import ListAppointments from './ListAppointments';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import { Button } from '@material-ui/core';

export default function Appointments() {
    const [open, setOpen] = useState(false)
    const [actionOpen, setActionOpen] = useState({
        actionStart: 'all',
        actionEnd: 'all'
    })

    const { petSelect, editPet, editPetSchedule, deletePetSchedule } = usePet();

    // const {
    //     wash,
    //     willwash,
    //     haircut, willhaircut,
    //     earcleaning, willearcleaning,
    //     teethcleaning, willteethcleaning,
    //     vaccination, willvaccination,
    //     deworming, willdeworming,
    //     others
    // } = petSelect;

    // const data = [
    //     ...wash, ...willwash,
    //     ...haircut, ...willhaircut,
    //     ...earcleaning, ...willearcleaning,
    //     ...teethcleaning, ...willteethcleaning,
    //     ...vaccination, ...willvaccination,
    //     ...deworming, ...willdeworming,
    //     ...others
    // ]

    const handleOnclick = (action) => {
        console.log(action === 'wash')
        if (action === 'wash') {
            setActionOpen({
                actionStart: 'wash',
                actionEnd: 'willwash'
            })
        } else if (action === 'haircut') {
            setActionOpen({
                actionStart: 'haircut',
                actionEnd: 'willhaircut'
            })
        } else if (action === 'earcleaning') {
            setActionOpen({
                actionStart: 'earcleaning',
                actionEnd: 'willearcleaning'
            })
        } else if (action === 'teethcleaning') {
            setActionOpen({
                actionStart: 'teethcleaning',
                actionEnd: 'willteethcleaning'
            })
        } else if (action === 'vaccination') {
            setActionOpen({
                actionStart: 'vaccination',
                actionEnd: 'willvaccination'
            })
        } else if (action === 'deworming') {
            setActionOpen({
                actionStart: 'deworming',
                actionEnd: 'willdeworming'
            })
        } else if (action === 'others') {
            setActionOpen({
                actionStart: 'others',
                actionEnd: 'willothers'
            })
        } else {
            setActionOpen({
                actionStart: 'all',
                actionEnd: 'all'
            })
        }
    }

    const handleSchedule = () => {
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
                {
                    actionOpen.actionStart === 'wash' && 'Baño'
                }
            </Button>
            <Button
                onClick={() => handleOnclick('haircut')}
                name='haircut'
                className='__m-1'
                variant="contained"
                color="default"
                startIcon={<i className="fas fa-cut  __icon-light"></i>}
            >
                {
                    actionOpen.actionStart === 'haircut' && 'Pelu'
                }
            </Button>
            <Button
                name='earcleaning'
                onClick={() => handleOnclick('earcleaning')}
                className='__m-1'
                variant="contained"
                color="default"
                startIcon={<i className="fas fa-tooth __icon-light"></i>}
            >
                {
                    actionOpen.actionStart === 'earcleaning' && 'Oídos'
                }
            </Button>
            <Button
                name='teethcleaning'
                onClick={() => handleOnclick('teethcleaning')}
                className='__m-1'
                variant="contained"
                color="default"
                startIcon={<i className="fas fa-hand-sparkles __icon-light"></i>}
            >
                {
                    actionOpen.actionStart === 'teethcleaning' && 'Dientes'
                }
            </Button>
            <Button
                name='deworming'
                onClick={() => handleOnclick('deworming')}
                className='__m-1'
                variant="contained"
                color="default"
                startIcon={<i className="fas fa-bug __icon-light"></i>}
            >
                {
                    actionOpen.actionStart === 'deworming' && 'Desparasitación'
                }
            </Button>
            <Button
                name='vaccination'
                onClick={() => handleOnclick('vaccination')}
                className='__m-1'
                variant="contained"
                color="default"
                startIcon={<i className="fas fa-syringe __icon-light"></i>}
            >
                {
                    actionOpen.actionStart === 'vaccination' && 'Vacunación'
                }
            </Button>
            <Button
                name='others'
                onClick={() => handleOnclick('others')}
                className='__m-1'
                variant="contained"
                color="default"
                startIcon={<i class="fas fa-file-medical-alt __icon-light"></i>}
            >
                {
                    actionOpen.actionStart === 'others' && 'Otros'
                }
            </Button>
            {/* <i class="fas fa-deaf"></i> */}
            <Button
                name='all'
                onClick={() => handleOnclick('all')}
                className='__m-1'
                variant="contained"
                color="default"
                startIcon={<i class="fas fa-folder-open  __icon-light"></i>}
            >
                {
                    actionOpen.actionStart === 'all' && 'Todo'
                }
            </Button>
            <Button
                name='schedule'
                onClick={handleSchedule}
                className=' __m-1'
                variant="contained"
                color="default"
                startIcon={<InsertInvitationIcon className=' __icon-light'/>}
            >
            </Button>
            <ListAppointments actionOpen={actionOpen} />
            {
                open &&
                <Schedule />
            }

        </div>
    )
}