import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles, useTheme } from "@material-ui/core";
import clsx from "clsx";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(3),
    width: 200,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(hour, hours, theme) {
  return {
    fontWeight:
      hours.indexOf(hour) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const names = [
  "1 hora",
  "2 horas",
  "3 horas",
  "4 horas",
  "5 horas",
  "6 horas",
  "7 horas",
  "8 horas",
  "9 horas",
  "10 horas",
  "11 horas",
  "12 horas",
  "13 horas",
  "14 horas",
  "15  horas",
  "16  horas",
  "17  horas",
  "18  horas",
  "19  horas",
  "20  horas",
  "21  horas",
  "22  horas",
  "23  horas",
  "24  horas",
];

export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const [hours, setHours] = React.useState([]);

  const handleChange = (event) => {
    console.log(event.target);
    setHours(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="__my-1">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Añadir pauta
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
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
              <InputLabel className='__mt-1 __px-4' id="demo-mutiple-name-label">Pauta</InputLabel>
              <Select
              className='__mt-2'
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                value={hours}
                onChange={handleChange}
                input={<Input />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, hours, theme)}
                  >
                    {name}
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
