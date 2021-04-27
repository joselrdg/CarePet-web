import React from "react";
import { useBreeds } from '../../../hooks/useBreed';
import Pipebar from "../../progress/Pipebar";
// import Circularbar from "../../progress/Circularbar";
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

const BreedList = () => {
    const classes = useStyles();
    const { useBreeds } = usePet();

    if (!useBreeds) {
    return "Loading...";
  }
    // const { review} = petsUser[0]

    console.log(useBreeds)

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

export default BreedList;