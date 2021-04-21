import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';


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
    { id: 'name', label: 'Key', minWidth: 170 },
    { id: 'valor', label: 'Valor', minWidth: 100 },]

// const rows = [
    // { id: 'idd', code:'fads', label: 'Key', minWidth: 170 },
    // { id: 'valodfr',code:'fgh', label: 'Valor', minWidth: 100 },]

export default function Review({ valuesField }) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
    const rows = Object.entries(valuesField)
    
    console.log(rows)
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

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

                        {/* {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        {columns.map((column, i) => {
                                            const value = row[i][0];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                {value[0]}
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })} */}
                            
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
                            <TableRow>
                                <TableCell>Raza</TableCell>
                                <TableCell>{valuesField.breed}</TableCell>
                            </TableRow>
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
                                <TableCell>{valuesField.weight}</TableCell>
                            </TableRow>
                            {/* <TableRow>
                                <TableCell>Fecha de nacimiento</TableCell>
                                <TableCell>{valuesField.datebirth}</TableCell>
                            </TableRow> */}
                            <TableRow  className={classes.listItem}>
                                <TableCell>Historia familiar</TableCell>
                                <TableCell  className={classes.total}>{valuesField.familyhistory}</TableCell>
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
                {/* <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={17}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                /> */}
            </Paper>
            {/* <List disablePadding>

                <ListItem className={classes.listItem}>
                    <ListItemText primary='Nombre' />
                    <Typography variant="subtitle1" className={classes.total}>
                        {valuesField.name}
                    </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary='Chip' />
                    <Typography variant="subtitle1" className={classes.total}>
                        {valuesField.chip}
                    </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary='Especie' />
                    <Typography variant="subtitle1" className={classes.total}>
                        {valuesField.species}
                    </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary='Raza' />
                    <Typography variant="subtitle1" className={classes.total}>
                        {valuesField.breed}
                    </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary='Sexo' />
                    <Typography variant="subtitle1" className={classes.total}>
                        {valuesField.sex}
                    </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary='Pelo' />
                    <Typography variant="subtitle1" className={classes.total}>
                        {valuesField.hair}
                    </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary='Color' />
                    <Typography variant="subtitle1" className={classes.total}>
                        {valuesField.color}
                    </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary='Estado reproductivo' />
                    <Typography variant="subtitle1" className={classes.total}>
                        {valuesField.sterilized}
                    </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary='Peso' />
                    <Typography variant="subtitle1" className={classes.total}>
                        {valuesField.weight} Kg
                    </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary='Fecha de nacimiento' />
                    <Typography variant="subtitle1" className={classes.total}>
                        {valuesField.datebirth}
                    </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary='Historia familiar' />
                    <Typography variant="subtitle1" className={classes.total}>
                        {valuesField.familyhistory}
                    </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary='Enfermedades previas' />
                    <Typography variant="subtitle1" className={classes.total}>
                        {valuesField.previousdiseases}
                    </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary='Cirugías' />
                    <Typography variant="subtitle1" className={classes.total}>
                        {valuesField.surgeries ? 'Si' : 'No'}
                    </Typography>
                </ListItem>
            </List> */}

        </React.Fragment>
    );
}