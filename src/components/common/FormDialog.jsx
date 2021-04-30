import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(3),
    width: 200,
  },
}));

const names = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='__my-1'>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Añadir pauta
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Añadir farmaco:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Mantenga supervisión con su veterinario.
          </DialogContentText>
          <form className={classes.container} noValidate>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Farmaco"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Dosis"
              type="text"
              fullWidth
            />
            <TextField
              id="datetime-local"
              label="Día y hora primera dosis"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Select
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              multiple
              value={personName}
              onChange={handleChange}
              input={<Input />}
              MenuProps={MenuProps}
            >
              {hours.map((hour) => (
                <MenuItem key={hour} value={hour} style={getStyles(hour, personName, theme)}>
                  {hour}
                </MenuItem>
              ))}
            </Select>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Añadir
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}