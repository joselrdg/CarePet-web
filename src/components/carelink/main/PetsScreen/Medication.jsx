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
    notes:{
        maxWidth:120
    }
}));


const columns = [
    { id: 'name', label: 'Fármaco', minWidth: 170 },
    { id: 'Dosis', label: 'Dosis', minWidth: 100 },
    { id: 'Intervalo', label: 'Intervalo', minWidth: 100 },
    { id: 'inicio', label: 'Fecha inicio', minWidth: 100 },
    { id: 'final', label: 'Fecha final', minWidth: 100 },
    { id: 'notas', label: 'Notas', minWidth: 100 },
]



export default function Review({ valuesField }) {
    const { petSelect } = usePet();
    const classes = useStyles();
    const { medication } = petSelect
    console.log(medication)
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
                                medication.map((pauta) => (

                                    <TableRow key={pauta.id}>
                                        <TableCell>{pauta.name}</TableCell>
                                        <TableCell>{pauta.dosage}</TableCell>
                                        <TableCell>{pauta.hours}</TableCell>
                                        <TableCell>{pauta.startdate}</TableCell>
                                        <TableCell>{pauta.lastday}</TableCell>
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