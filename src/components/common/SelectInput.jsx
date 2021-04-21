import { FormControl, Input, InputLabel, makeStyles, MenuItem, Select, useTheme } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    }
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

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


function SelectInput({ items, value, handleChange, itemname, label }) {
    const classes = useStyles();
    const theme = useTheme();

    // console.log(itemname)

    return (
        <FormControl >
            <InputLabel >{label}</InputLabel>
            <Select
                labelId="demo-mutiple-name-label"
                id={label}
                // multiple
                name={itemname}
                onChange={handleChange}
                input={<Input />}
                MenuProps={MenuProps}
                value={value}
                className={classes.formControl}
            >
                {items.map((name) => (
                    <MenuItem key={name}  value={name} style={getStyles(name, label, theme)}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default SelectInput;