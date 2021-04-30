import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import SimpleTooltips from '../../../common/ToolTip';
import FormDialog from '../../../common/FormDialog';


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
    tooltips:{
        bottom: theme.spacing(0),
    }
}));

const columns = [
    { id: 'name', label: 'Fármaco', minWidth: 170 },
    { id: 'valor', label: 'Dosis', minWidth: 100 },
    { id: 'name', label: 'Intervalo', minWidth: 100 },
    { id: 'valor', label: 'Fecha inicio', minWidth: 100 },
    { id: 'valor', label: 'Fecha final', minWidth: 100 }]

    

export default function Review({ valuesField }) {
    const classes = useStyles();

    return (
        <div className='__m-2'>
            {/* <Typography variant="h6" gutterBottom>
                Revision de datos
      </Typography> */}
            <FormDialog/>
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
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Valor</TableCell>
                            </TableRow>                           
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

        </div>
    );
}