import React from "react";
// import { usePet } from '../../hooks/usePet';
import Pipebar from "../../progress/Pipebar";
import Circularbar from "../../progress/Circularbar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignContent: "center",
  },
  weight: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      alignItems: 'center'
  }
}));

const PetProfile = () => {
  // const { petsUser } = usePet();
  const classes = useStyles();

  return (
    <>
      <h1>PetProfile</h1>
      <div className={classes.root}>
        <Paper elevation={3}>
          <h1>hkasjl</h1>
          <Pipebar />
        </Paper>
      </div>
      <div className={classes.root}>
        <Paper elevation={3} className={classes.weight}>
          <h1>hkasjl</h1>
          <Circularbar />
          <h5>fjasdlfhkas</h5>
        </Paper>
      </div>
    </>
  );
};

export default PetProfile;
