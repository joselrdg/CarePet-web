import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import StarBorder from "@material-ui/icons/StarBorder";

import { CATEGORIES } from "../../constants/constants";
import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   toolbar: theme.mixins.toolbar,
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// }));

function DrawerBox({
  classes,
  handleClick,
  open,
  categoryNumber,
  petsName,
  handleSubcategory,
}) {
  console.log(categoryNumber);
  if (!classes) {
    return "Loading...";
  }
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {CATEGORIES.map((item, index) => (
          <div key={item.name}>
            <Link to={`/carelink/pets`}>
              <ListItem button onClick={() => handleClick(index)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
                {open && categoryNumber === index ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )}
              </ListItem>
            </Link>

            {categoryNumber === index
              ? CATEGORIES[categoryNumber].subcategory.map(
                  (subcategory, idex) => (
                    <div key={subcategory}>
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {categoryNumber === 0
                            ? petsName.map((name, index) => (
                                <ListItem
                                  button
                                  onClick={() => handleSubcategory(index)}
                                  className={classes.nested}
                                  key={index}
                                >
                                  <ListItemIcon>
                                    <StarBorder />
                                  </ListItemIcon>
                                  <ListItemText primary={name} />
                                </ListItem>
                              ))
                            : null}
                          <ListItem button className={classes.nested}>
                            <ListItemIcon>
                              <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary={subcategory} />
                          </ListItem>
                        </List>
                      </Collapse>
                    </div>
                  )
                )
              : null}
          </div>
        ))}
      </List>
      <Divider />
      {/* <List>
        {CATEGORIES.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{ICONSCATEGORIES[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      {/* <Divider /> */}
    </div>
  );
}

export default DrawerBox;
