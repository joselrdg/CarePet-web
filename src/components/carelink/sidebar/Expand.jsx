import React from 'react';

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const Expand = ({ok}) => {
    if (ok) {
        return (
            <div>
                <ExpandLess />
            </div>
        );
    } else {
        return (
            <div>
                <ExpandMore />
            </div>
        );
    }
};


export default Expand;