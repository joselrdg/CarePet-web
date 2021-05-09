
import React, { useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { usePet } from '../../../../hooks/usePet';
import { makeStyles } from '@material-ui/core/styles';


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
export default function ListAppointments({ actionOpen }) {
    const classes = useStyles()

    const { petSelect, alert, setAlert } = usePet();

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


    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    // console.log(
    //     fecha.toLocaleDateString("es-ES", options)
    //   );
    let alarmtime = 0
    let datap = data.map((e, i) => {
        const timeSt = new Date(e.startDate).getTime()
        const timeEnd = new Date(e.endDate).getTime()
        const fecha = new Date()
        const fechetime = fecha.getTime()
        if (timeEnd < fechetime + 86400000 && timeEnd > fechetime - 86400000) {
            alarmtime++
        }
        e.startDate = (timeSt);
        e.endDate = (timeEnd);
        return e
    })

    datap.sort(function (a, b) {
        return b.startDate - a.startDate
    })

    useEffect(() => {
        if (alert === 0 || alert < alarmtime) {
            setAlert(alarmtime)
        }
    }, [])

    const dataFilter = []
    datap.map((e) => {

        if (actionOpen.actionStart === 'all') {
            dataFilter.push(e)
            return e
        } else if (e.action === actionOpen.actionStart || e.action === actionOpen.actionEnd) {
            dataFilter.push(e)
            return e
        } else {
            return e
        }
    })
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
                            dataFilter.map((appointment, i) => (
                                <TableRow key={i}>
                                    <TableCell>{appointment.title}</TableCell>
                                    <TableCell >{new Date(appointment.startDate).toLocaleDateString("es-ES", options)}</TableCell>
                                    <TableCell>{new Date(appointment.endDate).toLocaleDateString("es-ES", options)}</TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}




