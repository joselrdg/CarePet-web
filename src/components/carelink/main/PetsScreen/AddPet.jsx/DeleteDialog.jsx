import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { deletePetUser } from "../../../../../services/PetService";
import { useHistory } from 'react-router';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


export default function DeleteDialog({id}) {
  const { push } = useHistory();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };
  
 
  const handleDelete = () => {
    console.log(id)
    deletePetUser(id)
    setOpen(false);
    push("/CarePet/delete")
  };

  const handleClose = (idp) => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Eliminar mascota
      </Button> */}
      <IconButton aria-label="delete" onClick={handleClickOpen} >
          <DeleteIcon className='__mt-1' fontSize="large" />
        </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Esta seguro de eliminar a su mascota?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Está acción no se podrá revertir.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}