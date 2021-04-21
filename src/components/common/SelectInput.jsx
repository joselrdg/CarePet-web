import { FormControl, Input, InputLabel, makeStyles, MenuItem, Select, useTheme } from '@material-ui/core';
import React from 'react'
import { DOGBREED } from '../../constants/constants';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
            padding:0
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        width: 200,
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function SelectInput({ items, itemname, label }) {
    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel >{label}</InputLabel>
            <Select
                displayEmpty
                name={itemname}
                value={personName}
                onChange={handleChange}
                input={<Input />}
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
            >

                {items.map((name) => (
                    <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>

    );
}

export default SelectInput;