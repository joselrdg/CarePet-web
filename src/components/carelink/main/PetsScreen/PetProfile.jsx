import React from "react";
import { usePet } from '../../../hooks/usePet';
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
    const classes = useStyles();
    const { petsUser } = usePet();

    if (!petsUser) {
    return "Loading...";
  }
    const { review} = petsUser[0]

// console.log(
//     fecha.toLocaleDateString("es-ES", options)
//   );

    return (
        <>
            <h1>PetProfile</h1>
            <div className={classes.root}>
                <Paper elevation={3} className={classes.weight}>
                    <Pipebar />
                    <h3>hkasjl</h3>
                    <h5>fjasdlfhkas</h5>
                </Paper>
            </div>
        </>
    );
};

export default PetProfile;
