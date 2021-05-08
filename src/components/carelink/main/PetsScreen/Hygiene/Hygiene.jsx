import { makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Pipebar from '../../../progress/Pipebar';
import ConfirDialog from '../../../../common/ConfirDialog'
import { usePet } from '../../../../hooks/usePet';
import { getOnePet } from "../../../../../services/PetService";



const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: 'wrap',
    },
    weight: {
        margin: '10px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center'
    }
}));

export default function Hygiene() {
    const { petSelect, setPetSelect } = usePet()
    const classes = useStyles();
    const {
        wash, willwash,
        haircut, willhaircut,
        earcleaning, willearcleaning,
        willteethcleaning, teethcleaning,
        vaccination, willvaccination,
        deworming, willdeworming,
        medication, others
    } = petSelect;

    const [render, setRender] = useState({
    })
    const   lastwash= wash[wash.length - 1] ? wash[wash.length - 1] : { startDate: new Date(1995, 11, 17) }
    const   willlastwash= willwash[willwash.length - 1] ? willwash[willwash.length - 1] : { startDate: new Date(1996, 12, 17) }

    const   lasthaircut= haircut[haircut.length - 1] ? haircut[haircut.length - 1] : { startDate: new Date(1995, 11, 17) }
    const   willlasthaircut= willhaircut[willhaircut.length - 1] ? willhaircut[willhaircut.length - 1] : { startDate: new Date(1996, 12, 17) }

    const   lastearcleaning= earcleaning[earcleaning.length - 1] ? earcleaning[earcleaning.length - 1] : { startDate: new Date(1995, 11, 17) }
    const   willlastearcleaning= willearcleaning[willearcleaning.length - 1] ? willearcleaning[willearcleaning.length - 1] : { startDate: new Date(1996, 12, 17) }

    const   lastteethcleaning= teethcleaning[teethcleaning.length - 1] ? teethcleaning[teethcleaning.length - 1] : { startDate: new Date(1995, 11, 17) }
    const   willlastteethcleaning= willteethcleaning[willteethcleaning.length - 1] ? willteethcleaning[willteethcleaning.length - 1] : { startDate: new Date(1996, 12, 17) }

    const   lastvaccination= vaccination[vaccination.length - 1] ? vaccination[vaccination.length - 1] : { startDate: new Date(1995, 11, 17) }
    const   willlastvaccination= willvaccination[willvaccination.length - 1] ? willvaccination[willvaccination.length - 1] : { startDate: new Date(1996, 12, 17) }

    const   lastdeworming= deworming[deworming.length - 1] ? deworming[deworming.length - 1] : { startDate: new Date(1995, 11, 17) }
    const   willlastdeworming= willdeworming[willdeworming.length - 1] ? willdeworming[willdeworming.length - 1] : { startDate: new Date(1996, 12, 17) }


    useEffect(() => {
        console.log('render')
        getOnePet(petSelect.id)
        .then((p)=>{
            setPetSelect(p)
        })
      }, [render]);

    console.log(petSelect.id)
    return (
        <div>
            Cuidados
            <div className='__flex __fw-w  __jc-between'>
                <div className='__flex'>
                    <Paper elevation={3} className={classes.weight}>
                        <div>
                            <i className="fas fa-bath fa-3x __mt-1 __mb-0 __mx-1 __icon-light"></i>
                            <Pipebar startDate={lastwash.startDate} endDate={willlastwash.startDate} />
                        </div>
                        <Paper elevation={3} className={classes.weight}>
                            <ConfirDialog render={render} setRender={setRender} id={petSelect.id} clave='wash' accion='último baño' />
                        </Paper>
                    </Paper>
                </div>
                <div className='__flex'>
                    <Paper elevation={3} className={classes.weight}>
                        <div>
                            <i className="fas fa-cut fa-3x __mt-1 __mb-0 __mx-1 __icon-light"></i>
                            <Pipebar startDate={lasthaircut.startDate} endDate={willlasthaircut.startDate} />
                        </div>
                        <Paper elevation={3} className={classes.weight}>
                            <ConfirDialog id={petSelect.id} clave='haircut' accion='último corte' />
                        </Paper>
                    </Paper>
                </div>
                <div className='__flex'>
                    <Paper elevation={3} className={classes.weight}>
                        <div>
                            <i className="fas fa-hand-sparkles fa-3x __mt-1 __mb-0 __mx-1 __icon-light"></i>
                            <Pipebar startDate={lastearcleaning.startDate} endDate={willlastearcleaning.startDate} />
                        </div>
                        <Paper elevation={3} className={classes.weight}>
                            <ConfirDialog id={petSelect.id} clave='earcleaning' accion='limpieza de oídos' />
                        </Paper>
                    </Paper>
                </div>
                <div className='__flex'>
                    <Paper elevation={3} className={classes.weight}>
                        <div>
                            <i className="fas fa-tooth fa-3x __mt-1 __mb-0 __mx-1 __icon-light"></i>
                            <Pipebar startDate={lastteethcleaning.startDate} endDate={willlastteethcleaning.startDate} />
                        </div>
                        <Paper elevation={3} className={classes.weight}>
                            <ConfirDialog id={petSelect.id} clave='teethcleaning' accion='limpieza de dientes' />
                        </Paper>
                    </Paper>
                </div>
                <div className='__flex'>
                    <Paper elevation={3} className={classes.weight}>
                        <div>
                            <i className="fas fa-syringe fa-3x __mt-1 __mb-0 __mx-1 __icon-light"></i>
                            <Pipebar startDate={lastvaccination.startDate} endDate={willlastvaccination.startDate} />
                        </div>
                        <Paper elevation={3} className={classes.weight}>
                            <ConfirDialog id={petSelect.id} clave='vaccination' accion='última vacuna' />
                        </Paper>
                    </Paper>
                </div>
                <div className='__flex'>
                    <Paper elevation={3} className={classes.weight}>
                        <div>
                            <i className="fas fa-bug fa-3x __mt-1 __mb-0 __mx-1 __icon-light"></i>
                            <Pipebar startDate={lastdeworming.startDate} endDate={willlastdeworming.startDate} />
                        </div>
                        <Paper elevation={3} className={classes.weight}>
                            <ConfirDialog id={petSelect.id} clave='deworming' accion='desparasitación' />
                        </Paper>
                    </Paper>
                </div>

            </div>

        </div>
    )
}