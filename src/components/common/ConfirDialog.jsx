import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { DatePicker } from "@material-ui/pickers";
import { usePet } from "../hooks/usePet";

const options = [
  "1 semana",
  "2 semanas",
  "3 semanas",
  "4 semanas",
  "6 semanas",
  "8 semanas",
  "3 meses",
  "6 meses",
  "Anual",
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
      <DialogTitle id="confirmation-dialog-title">
        Ulima fecha y configuración de aviso:
      </DialogTitle>
      <div className="__flex __jc-center">
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
            <FormControlLabel
              value={option}
              key={option}
              control={<Radio />}
              label={option}
            />
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
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    width: "80%",
    maxHeight: 435,
  },
}));


export default function ConfirDialog({ accion, clave }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Dione");
  // const [valueDate, setValueDate] = useState();
  const { editPet, petSelect } = usePet();
  const { wash, haircut, earcleaning, teethcleaning, vaccination, deworming } = petSelect;

  const lastwash = wash[wash.length - 1]
  const lasthaircut = haircut[haircut.length - 1]
  const lastearcleaning = earcleaning[earcleaning.length - 1]
  const lastteethcleaning = teethcleaning[teethcleaning.length - 1]
  const lastvaccination = vaccination[vaccination.length - 1]
  const lastdeworming = deworming[deworming.length - 1]

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue, date) => {

    setOpen(false);

    if (newValue) {
      let days = 0;
      if (newValue === '3 meses') {
        days = 90;
      } if (newValue === '6 meses') {
        days = 180;
      } if (newValue === 'Anual') {
        days = 365;
      } else {
        days = newValue.split(" ")[0];
        days = parseInt(days);
        days = days * 7;
      }
      const d = date.getTime() + days * 24 * 60 * 60 * 1000;
      const dateDays = new Date(d);
      const id = petSelect.id;
      const idlength = petSelect[clave].length
      let starTitle = ''
      let endTitle = ''
      if (clave === 'wash') {
        starTitle = 'Se dio un baño a'
        endTitle = 'Bañar a'
      } else if (clave === 'haircut') {
        starTitle = 'Se corto el pelo a'
        endTitle = 'Cortar el pelo a'
      } else if (clave === 'earcleaning') {
        starTitle = 'Se limpio los oidos a'
        endTitle = 'Limpiar los oidos a'
      } else if (clave === 'teethcleaning') {
        starTitle = 'Se hizo limpieza de dientes a'
        endTitle = 'Limpieza de dientes programada para'
      } else if (clave === 'deworming') {
        starTitle = 'Se desparasitó a'
        endTitle = 'Desparasitar a'
      } else if (clave === 'vaccination') {
        starTitle = 'Se vacunó a'
        endTitle = 'Vacunar a'
      }
    
      editPet(
        {
          [clave]:
          {
            // id: `${clave}start${idlength}`,
            startDate: date,
            endDate: date,
            allDay: false,
            title: `${starTitle} ${petSelect.name}`,
            action: clave
          },
          [`will${clave}`]: {
            // id: `${clave}end${idlength}`,
            startDate: dateDays,
            endDate: dateDays,
            allDay: false,
            title: `${endTitle} ${petSelect.name}`,
            action: `will${clave}`
          }
        },
        id
      );
      setValue(newValue);
    }
  };

  const lastdate = (clave) => {
    let date = "";
    if (clave === "wash") {
      date = lastwash ? new Date(lastwash.startDate) : new Date();
    } else if (clave === "haircut") {
      date = lasthaircut ? new Date(lasthaircut.startDate) : new Date();
    } else if (clave === "earcleaning") {
      date = lastearcleaning ? new Date(lastearcleaning.startDate) : new Date();
    } else if (clave === "teethcleaning") {
      date = lastteethcleaning ? new Date(lastteethcleaning.startDate) : new Date();
    } else if (clave === "vaccination") {
      date = lastvaccination ? new Date(lastvaccination.startDate) : new Date();
    } else if (clave === "deworming") {
      date = lastdeworming ? new Date(lastdeworming.startDate) : new Date();
    } else {
      date = new Date()
    }
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("es-ES", options)
  };

  const subtraction = (clave) => {
    let date = "";
    if (clave === "wash") {
      date = lastwash ? new Date(lastwash.startDate) : new Date();
    } else if (clave === "haircut") {
      date = lasthaircut ? new Date(lasthaircut.startDate) : new Date();
    } else if (clave === "earcleaning") {
      date = lastearcleaning ? new Date(lastearcleaning.startDate) : new Date();
    } else if (clave === "teethcleaning") {
      date = lastteethcleaning ? new Date(lastteethcleaning.startDate) : new Date();
    } else if (clave === "vaccination") {
      date = lastvaccination ? new Date(lastvaccination.startDate) : new Date();
    } else if (clave === "deworming") {
      date = lastdeworming ? new Date(lastdeworming.startDate) : new Date();
    } else {
      date = new Date()
    }
    const fecha = new Date();
    const resta = fecha.getTime() - date.getTime();
    const result = Math.round(resta / (1000 * 60 * 60 * 24));
    return result
  };

  return (
    <div className={classes.root}>
      <List component="div" role="list">
        <ListItem divider role="listitem">
          <ListItemText
            primary={`Desde ${accion}:`}
            secondary={`${subtraction(clave)} días`}
          />
        </ListItem>
        <ListItem divider role="listitem">
          <ListItemText primary="Fecha del siguiente:" secondary={lastdate(clave)} />
        </ListItem>
        <ListItem
          button
          divider
          // aria-haspopup="true"
          aria-controls="ringtone-menu"
          aria-label="phone ringtone"
          onClick={handleClickListItem}
          role="listitem"
        >
          <ListItemText primary={"Añadir nuevo"} />
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
