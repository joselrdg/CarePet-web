
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { usePet } from '../../../../hooks/usePet';
import Schedule from '../../ScheduleScreen/ScheduleScreen';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
    listItem: {
        padding: theme.spacing(1, 0),
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'between'
    },
    total: {
        fontWeight: 400,
        maxWidth: 250,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

const columns = [
    { id: 'titulo', label: 'Título', minWidth: 170 },
    { id: 'startdate', label: 'Fecha de inicio', minWidth: 100 },
    { id: 'enddate', label: 'Fecha final', minWidth: 100 },]
export default function ListAppointments() {
    const classes = useStyles()

    const { petSelect, editPet, editPetSchedule, deletePetSchedule } = usePet();

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

    const data = [
        ...wash, ...willwash,
        ...haircut, ...willhaircut,
        ...earcleaning, ...willearcleaning,
        ...teethcleaning, ...willteethcleaning,
        ...vaccination, ...willvaccination,
        ...deworming, ...willdeworming,
        ...medication, ...others
    ]

    // const datap = data.map((e) => {
    //     // const con = [];
    //     if (e.action === 'medication') {
    //         e.endDate = new Date();  return e
    //     }
    //     return e
    // })

    console.log(data)
    // const datap = data.map((e, i) => { e.startDate = new Date(e.startDate); return e })
    // console.log(datap)
    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((appointment, i) => (
                                <TableRow key={i}>
                                    <TableCell>{appointment.title}</TableCell>
                                    <TableCell>{(appointment.startDate)}</TableCell>
                                    <TableCell>{(appointment.endDate)}</TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}




