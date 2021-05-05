import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import Pipebar from '../../../progress/Pipebar';
import ConfirDialog from '../../../../common/ConfirDialog'
import { usePet } from '../../../../hooks/usePet';


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
    const { petSelect } = usePet()
    const classes = useStyles();
    // const { review } = petSelect
    return (
        <div>
            Cuidados
            <div className='__flex __fw-w  __jc-between'>
                <div className='__flex'>
                    <Paper elevation={3} className={classes.weight}>
                        <div>
                            <i className="fas fa-bath fa-3x __mt-1 __mb-0 __mx-1"></i>
                            <Pipebar />
                        </div>
                        <Paper elevation={3} className={classes.weight}>
                            <ConfirDialog id={petSelect.id} clave='wash' accion='último baño' />
                        </Paper>
                    </Paper>
                </div>
                <div className='__flex'>
                    <Paper elevation={3} className={classes.weight}>
                        <div>
                            <i className="fas fa-cut fa-3x __mt-1 __mb-0 __mx-1"></i>
                            <Pipebar />
                        </div>
                        <Paper elevation={3} className={classes.weight}>
                            <ConfirDialog id={petSelect.id} clave='haircut' accion='último corte' />
                        </Paper>
                    </Paper>
                </div>
                <div className='__flex'>
                    <Paper elevation={3} className={classes.weight}>
                        <div>
                            <i className="fas fa-hand-sparkles fa-3x __mt-1 __mb-0 __mx-1"></i>
                            <Pipebar />
                        </div>
                        <Paper elevation={3} className={classes.weight}>
                            <ConfirDialog id={petSelect.id} clave='earcleaning' accion='última limpieza de oídos' />
                        </Paper>
                    </Paper>
                </div>
                <div className='__flex'>
                    <Paper elevation={3} className={classes.weight}>
                        <div>
                            <i className="fas fa-tooth fa-3x __mt-1 __mb-0 __mx-1"></i>
                            <Pipebar />
                        </div>
                        <Paper elevation={3} className={classes.weight}>
                            <ConfirDialog id={petSelect.id} clave='teethcleaning' accion='última limpieza de dientes' />
                        </Paper>
                    </Paper>
                </div>
                <div className='__flex'>
                    <Paper elevation={3} className={classes.weight}>
                        <div>
                        <i className="fas fa-syringe fa-3x __mt-1 __mb-0 __mx-1"></i>
                            <Pipebar />
                        </div>
                        <Paper elevation={3} className={classes.weight}>
                            <ConfirDialog id={petSelect.id} clave='vaccination' accion='última vacuna' />
                        </Paper>
                    </Paper>
                </div>
                <div className='__flex'>
                <Paper elevation={3} className={classes.weight}>
                        <div>
                        <i className="fas fa-bug fa-3x __mt-1 __mb-0 __mx-1"></i>
                            <Pipebar />
                        </div>
                        <Paper elevation={3} className={classes.weight}>
                            <ConfirDialog id={petSelect.id} clave='deworming' accion='última vacuna' />
                        </Paper>
                    </Paper>
                </div>

            </div>

        </div>
    )
}