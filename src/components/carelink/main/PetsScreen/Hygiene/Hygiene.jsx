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
    const {petSelect}= usePet()
    const classes = useStyles();
    const {review}= petSelect
    console.log(review)

    return (
        <div>
            Cuidados
            <div className='__flex __fw-w  __jc-between'>
                <div className='__flex'>
                    <Paper elevation={3} className={classes.weight}>
                        <div>
                            <h3>Baño</h3>
                            <Pipebar />
                        </div>
                        <Paper elevation={3} className={classes.weight}>
                            <ConfirDialog id={petSelect.id} clave='wash' accion='último baño' date={'holo'} />
                        </Paper>
                    </Paper>
                </div>
                <div className='__flex'>
                    <Paper elevation={3} className={classes.weight}>
                        <div>
                            <h3>Pelo</h3>
                            <Pipebar />
                        </div>
                        <Paper elevation={3} className={classes.weight}>
                            <h3>Pelo</h3>
                            <Pipebar />
                        </Paper>
                    </Paper>
                </div>
                <div className='__flex'>
                    <Paper elevation={3} className={classes.weight}>
                        <div>
                            <h3>Oídos</h3>
                            <Pipebar />
                        </div>
                        <Paper elevation={3} className={classes.weight}>
                            <h3>Oídos</h3>
                            <Pipebar />
                        </Paper>
                    </Paper>
                </div>
                <div className='__flex'>
                    <Paper elevation={3} className={classes.weight}>
                        <div>
                            <h3>Dientes</h3>
                            <Pipebar />
                        </div>
                        <Paper elevation={3} className={classes.weight}>
                            <h3>Dientes</h3>
                            <Pipebar />
                        </Paper>
                    </Paper>
                </div>
                <div className='__flex'>
                    <Paper elevation={3} className={classes.weight}>
                        <div>
                            <h3>Vacunación</h3>
                            <Pipebar />
                        </div>
                        <Paper elevation={3} className={classes.weight}>
                            <h3>Vacunación</h3>
                            <Pipebar />
                        </Paper>
                    </Paper>
                </div>
                <div className='__flex'>
                    <Paper elevation={3} className={classes.weight}>
                        <div>
                            <h3>Desparasitación</h3>
                            <Pipebar />
                        </div>
                        <Paper elevation={3} className={classes.weight}>
                            <h3>Desparasitación</h3>
                            <Pipebar />
                        </Paper>
                    </Paper>
                </div>
                
            </div>

        </div>
    )
}