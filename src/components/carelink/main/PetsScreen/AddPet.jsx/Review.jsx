import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';



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
    { id: 'name', label: 'Característica', minWidth: 170 },
    { id: 'valor', label: 'Valor', minWidth: 100 },]

export default function Review({ valuesField, open }) {
    const classes = useStyles();

    console.log(open)
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Revision de datos
      </Typography>
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
                                <TableCell>{valuesField.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Chip</TableCell>
                                <TableCell>{valuesField.chip}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Especie</TableCell>
                                <TableCell>{valuesField.species}</TableCell>
                            </TableRow>
                            {valuesField.breed &&
                                (<TableRow>
                                    <TableCell>Raza</TableCell>
                                    <TableCell>{valuesField.breed.name}</TableCell>
                                </TableRow>)}
                            <TableRow>
                                <TableCell>Sexo</TableCell>
                                <TableCell>{valuesField.sex}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Pelo</TableCell>
                                <TableCell>{valuesField.hair}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Color</TableCell>
                                <TableCell>{valuesField.color}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Estado reproductivo</TableCell>
                                <TableCell>{valuesField.sterilized}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Peso</TableCell>
                                <TableCell>{valuesField.weight.kg}</TableCell>
                            </TableRow>
                            {/* <TableRow>
                                <TableCell>Fecha de nacimiento</TableCell>
                                <TableCell>{valuesField.datebirth}</TableCell>
                            </TableRow> */}
                            <TableRow >
                                <TableCell>Historia familiar</TableCell>
                                <TableCell >{valuesField.familyhistory}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Enfermedades previas</TableCell>
                                <TableCell>{valuesField.previousdiseases}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Cirugías</TableCell>
                                <TableCell>{valuesField.surgeries}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>             
            </Paper>

        </React.Fragment>
    );
}