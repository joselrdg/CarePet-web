import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
    root: {
        width: '80%',
    },
    bar:{
        height: 10,
        borderRadius: 5,

    }
});

export default function LinearDeterminate({ petprogess }) {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(0);

const progresstart = (mas) => {
    if (progress < petprogess){
      setProgress(mas)}     

}

React.useEffect(() => {
    if (progress < petprogess){
        progresstart(progress + 2)}   
    }, [progress]);

    return (
        <div className={classes.root}>
            <LinearProgress className={classes.bar} variant="determinate" value={progress} />
        </div>
    );
}