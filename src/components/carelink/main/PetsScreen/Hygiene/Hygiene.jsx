import { makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Pipebar } from '../../../progress/Pipebar';
import ConfirDialog from '../../../../common/ConfirDialog'
import { usePet } from '../../../../hooks/usePet';
import { editPetUser } from "../../../../../services/PetService";

import TodayIcon from '@material-ui/icons/Today';
import { PieChart, Pie, Cell, } from "recharts";


const data = [
    { name: "Group A", value: 100 },
    { name: "Group B", value: 2 },
];
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const COLORS = ["#55f9aa", "#e91e63"];


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
    const lastwash = wash[wash.length - 1] ? wash[wash.length - 1] : { startDate: new Date(1995, 11, 17) }
    const willlastwash = willwash[willwash.length - 1] ? willwash[willwash.length - 1] : { startDate: new Date(1996, 12, 17) }

    const lasthaircut = haircut[haircut.length - 1] ? haircut[haircut.length - 1] : { startDate: new Date(1995, 11, 17) }
    const willlasthaircut = willhaircut[willhaircut.length - 1] ? willhaircut[willhaircut.length - 1] : { startDate: new Date(1996, 12, 17) }

    const lastearcleaning = earcleaning[earcleaning.length - 1] ? earcleaning[earcleaning.length - 1] : { startDate: new Date(1995, 11, 17) }
    const willlastearcleaning = willearcleaning[willearcleaning.length - 1] ? willearcleaning[willearcleaning.length - 1] : { startDate: new Date(1996, 12, 17) }

    const lastteethcleaning = teethcleaning[teethcleaning.length - 1] ? teethcleaning[teethcleaning.length - 1] : { startDate: new Date(1995, 11, 17) }
    const willlastteethcleaning = willteethcleaning[willteethcleaning.length - 1] ? willteethcleaning[willteethcleaning.length - 1] : { startDate: new Date(1996, 12, 17) }

    const lastvaccination = vaccination[vaccination.length - 1] ? vaccination[vaccination.length - 1] : { startDate: new Date(1995, 11, 17) }
    const willlastvaccination = willvaccination[willvaccination.length - 1] ? willvaccination[willvaccination.length - 1] : { startDate: new Date(1996, 12, 17) }

    const lastdeworming = deworming[deworming.length - 1] ? deworming[deworming.length - 1] : { startDate: new Date(1995, 11, 17) }
    const willlastdeworming = willdeworming[willdeworming.length - 1] ? willdeworming[willdeworming.length - 1] : { startDate: new Date(1996, 12, 17) }


    const setPetSel = (pet) => {
        setPetSelect(pet)
    }

    const datap = (thisstartDate, thisendDate) => {
        // dias que llevamos
        const fecha = new Date();
        const fechaGetTime = fecha.getTime();

        const lastdate = thisstartDate ? new Date(thisstartDate) : new Date();
        const date = thisendDate ? new Date(thisendDate) : new Date();

        let resta = date.getTime() - fechaGetTime;
        const daysMas = Math.round(resta / (1000 * 60 * 60 * 24));

        resta = fechaGetTime - lastdate.getTime();
        // const daysMenos = Math.round(resta / (1000 * 60 * 60 * 24));


        resta = date.getTime() - lastdate.getTime();
        const total = Math.round(resta / (1000 * 60 * 60 * 24));
        const percentage = (daysMas * 100) / total
        return [
            { name: "Group A", value: percentage },
            { name: "Group B", value: 100 - percentage },
        ];
    }


    console.log(lastwash.startDate)
    console.log(willlastwash.startDate)
    console.log(datap(lastwash.startDate, willlastwash.startDate))

    useEffect(() => {
        // console.log('render')
        // getOnePet(petSelect.id)
        // .then((p)=>{
        //     setPetSelect(p)
        // })
    }, [render]);

    const charwash = datap(lastwash.startDate, willlastwash.startDate)
    console.log(petSelect.id)
    return (
        <div>
            Cuidados
            <div className='__flex __fw-w  __jc-between'>
                <div className='__flex'>
                    <Paper elevation={3} className={classes.weight}>
                        <div>
                            <i className="fas fa-bath fa-3x __mt-1 __mb-0 __mx-1 __icon-light"></i>
                            <Pipebar data={datap(lastwash.startDate, willlastwash.startDate)} />
                        </div>
                        <Paper elevation={3} className={classes.weight}>
                            <ConfirDialog render={render} setPetSelect={setPetSelect} setRender={setRender} id={petSelect.id} clave='wash' accion='último baño' />
                        </Paper>
                    </Paper>
                </div>
                <div className='__flex'>
                    <Paper elevation={3} className={classes.weight}>
                        <div>
                            <i className="fas fa-cut fa-3x __mt-1 __mb-0 __mx-1 __icon-light"></i>
                            <Pipebar data={datap(lasthaircut.startDate, willlasthaircut.startDate)} />
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
                            <Pipebar data={datap(lastearcleaning.startDate, willlastearcleaning.startDate)} />
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
                            <Pipebar data={datap(lastteethcleaning.startDate, willlastteethcleaning.startDate)} />
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
                            <Pipebar data={datap(lastvaccination.startDate, willlastvaccination.startDate)} />
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
                            <Pipebar data={datap(lastdeworming.startDate, willlastdeworming.startDate)} />
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