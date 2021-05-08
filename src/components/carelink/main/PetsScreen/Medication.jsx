import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import FormDialog from '../../../common/FormDialog';
import { usePet } from '../../../hooks/usePet';


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
    tooltips: {
        bottom: theme.spacing(0),
    },
    notes: {
        maxWidth: 120
    }
}));


const columns = [
    { id: 'name', label: 'Fármaco', minWidth: 120 },
    { id: 'Dosis', label: 'Dosis', minWidth: 100 },
    { id: 'Intervalo', label: 'Intervalo', minWidth: 100 },
    { id: 'inicio', label: 'Fecha inicio', minWidth: 100 },
    { id: 'final', label: 'Fecha final', minWidth: 100 },
    { id: 'notas', label: 'Notas', minWidth: 170 },
]



export default function Review({ valuesField }) {
    const { petSelect } = usePet();
    const classes = useStyles();

    if (!petSelect) {
        return (
            'Loading...'
        )
    }

    const { medication } = petSelect
    // const data = medication.map((e) => {
    //     // const con = [];
    //     const da = e.startDate.substring(0, 10).replace('-', '/')
    //     // con.push(d[2]).push(d[1]).push(d[0]);
    //     // const date = con.join('-');
    //     e.endDate = new Date(e.endDate); e.startDate = (da); return e
    // })

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const datap = medication.map((e, i) => {
        const timeSt = new Date(e.startDate).getTime()
        const timeEnd = new Date(e.endDate).getTime()
         e.startDate = (timeSt);
         e.endDate = (timeEnd); 
         return e 
        })

    return (
        <div className='__m-2'>
            {/* <Typography variant="h6" gutterBottom>
                Revision de datos
      </Typography> */}
            <FormDialog />
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
                                datap.map((pauta) => (

                                    <TableRow key={pauta.id}>
                                        <TableCell>{pauta.title}</TableCell>
                                        <TableCell>{pauta.dosage}</TableCell>
                                        <TableCell> {pauta.hours} h</TableCell>
                                        <TableCell >{new Date(pauta.startDate).toLocaleDateString("es-ES", options)}</TableCell>
                                    <TableCell>{new Date(pauta.endDate).toLocaleDateString("es-ES", options)}</TableCell>
                                        <TableCell className={classes.notes}>{pauta.notes}</TableCell>
                                    </TableRow>

                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

        </div>
    );
}