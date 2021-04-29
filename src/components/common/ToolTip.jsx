import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    fab: {
        margin: theme.spacing(2),
    },
    btnleft: {
        width: '30px',
        height: '5px',
        position: 'absolute',
        right: theme.spacing(4),
        bottom: theme.spacing(0),

    },
}));

export default function SimpleTooltips() {
    const classes = useStyles();

    return (
        <div>
            <Tooltip title="Add" aria-label="add">
                <Fab color="secondary" className={classes.btnleft}>
                    <AddIcon />
                </Fab>
            </Tooltip>
        </div>
    );
}