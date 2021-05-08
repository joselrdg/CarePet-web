import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    fab: {
        margin: theme.spacing(2),
    },
    btnleft: {
        width: '28px',
        height: '1px',
        position: 'absolute',
        right: theme.spacing(4),
        bottom: theme.spacing(0),

    },
    icon:{
width:'20px',
height:'20px'
    }
}));

export default function SimpleTooltips() {
    const classes = useStyles();

    return (
        <div>
            <Tooltip title="Add" aria-label="add">
                <Fab color="primary" className={classes.btnleft}>
                    <AddIcon className={classes.icon} />
                </Fab>
            </Tooltip>
        </div>
    );
}