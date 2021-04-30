import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { DatePicker } from '@material-ui/pickers';
import { usePet } from '../hooks/usePet';

const options = [
  '1 semana',
  '2 semanas',
  '3 semanas',
  '4 semanas',
  '6 semanas',
  '8 semanas',
];

function ConfirmationDialogRaw(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = useState(valueProp);
  const [selectedDate, handleDateChange] = useState(new Date());
  const radioGroupRef = useRef(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value, selectedDate);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">Ulima fecha y configuración de aviso:</DialogTitle>
      <div className='__flex __jc-center'>
        <DatePicker
          disableFuture
          openTo="year"
          format="dd/MM/yyyy"
          label="Ultimo baño:"
          views={["year", "month", "date"]}
          value={selectedDate}
          onChange={handleDateChange}

        />
      </div>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="ringtone"
          name="ringtone"
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: '80%',
    maxHeight: 435,
  },
}));

export default function ConfirDialog({ accion, clave }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('Dione');
  const [valueDate, setValueDate] = React.useState(new Date());
  const { editPet, petSelect } = usePet()


  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue, date) => {
    console.log(clave)
    let days = newValue.split(' ')[0]
    days = parseInt(days);
    const dateDays = date+days;
    const id = petSelect.id
    editPet({
      review:
      {
        [clave]: {
          date: date,
          days: dateDays
        }
      }
    }, id)

    console.log(date)
    setOpen(false);

    if (newValue) {
      setValueDate(date)
      setValue(newValue);
    }
  };

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = valueDate ? valueDate.toLocaleDateString("es-ES", options) : null

  return (
    <div className={classes.root}>
      <List component="div" role="list">
        <ListItem divider role="listitem">
          <ListItemText primary={`Días desde el ${accion}:`} secondary={value} />
        </ListItem>
        <ListItem divider role="listitem">
          <ListItemText primary="Fecha:" secondary={dateStr} />
        </ListItem>
        <ListItem
          button
          divider
          aria-haspopup="true"
          aria-controls="ringtone-menu"
          aria-label="phone ringtone"
          onClick={handleClickListItem}
          role="listitem"
        >
          <ListItemText primary="Añadir nuevo" />
        </ListItem>
        {/* <ListItem button divider role="listitem">
          <ListItemText primary="Estadisticas" />
        </ListItem> */}
        <ConfirmationDialogRaw
          classes={{
            paper: classes.paper,
          }}
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
        />
      </List>
    </div>
  );
}