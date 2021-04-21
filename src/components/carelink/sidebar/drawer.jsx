import React from "react";
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
import Avatar from '@material-ui/core/Avatar';
import { useCategory } from "../../hooks/useCategory";
import { CATEGORIES } from "../../../constants/constants";
import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   toolbar: theme.mixins.toolbar,
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// }));

function DrawerBox({
  classes,
  // handleClick,
  // open,
  // categoryNumber,
  petsName,
  // handleSubcategory,
}) {
  const { setCategory, stateCategory } = useCategory();
  const [open, setOpen] = React.useState(true);
  const { category, subcategory } = stateCategory;

  const handleSubcategory = (subcategory) => {
    setCategory((prevState) => ({
      ...prevState,
      subcategory: subcategory,
      folder: 0,
    }));
  };

  const handleClick = (index) => {
    setOpen(!open);
    if (index !== category) {
      setTimeout(() => {
        setCategory({
          category: index,
          subcategory: 0,
          folder: 0,
        });
        setOpen(true);
      }, 280);
    }
  };

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
                <ListItemIcon><Avatar className={classes.pink}>{item.icon}</Avatar></ListItemIcon>
                <ListItemText primary={item.name} />
                {open && category === index ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            </Link>

            {category === index
              ? CATEGORIES[category].subcategory.map((subcategoryMap, idex) => (
                  <div key={subcategoryMap.name}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {category === 0
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
                          <ListItemText primary={subcategoryMap.name} />
                        </ListItem>
                      </List>
                    </Collapse>
                  </div>
                ))
              : null}
          </div>
        ))}
      </List>
      <Divider />
    </div>
  );
}

export default DrawerBox;
