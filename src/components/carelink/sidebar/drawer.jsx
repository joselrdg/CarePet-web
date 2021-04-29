import React, { useEffect } from "react";
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
import { Link, useHistory } from "react-router-dom";
import SimpleTooltips from "../../common/ToolTip";
import { usePet } from "../../hooks/usePet";


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
  const { category } = stateCategory;
  const {petSelect, setPet}= usePet()
  const { push } = useHistory();


  const handleSubcategoryPets = (subcategory) => {
    
    setCategory((prevState) => ({
      ...prevState,
      subcategory: subcategory,
      folder: 0,
    }));
    setPet(subcategory)
  };

  const set = (index) => {
    setCategory({
      category: index,
      subcategory: 0,
      folder: 0,
    });
  }

  console.log(stateCategory)

  const handleClick = (index) => {
    const srtLink = CATEGORIES[index].name.replaceAll(' ', '-')
    setOpen(!open);
    if (index !== category) {
      push(srtLink);
      setTimeout(() => {
        set(index)
      }, 280);
      setOpen(true);
    }
  };


  useEffect(() => {
    setPet(0)
      // setPet(stateCategory.subcategory)

  }, []);

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
            {/* <Link to={`/CarePet/${item.name}`}> */}
            <ListItem button onClick={() => handleClick(index)}>
              <ListItemIcon><Avatar className={classes.pink}>{item.icon}</Avatar></ListItemIcon>
              <ListItemText primary={item.name} />
              {open && category === index ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {/* </Link> */}

            {category === index
              ? CATEGORIES[category].subcategory.map((subcategoryMap, idex) => (
                <div key={subcategoryMap.name}>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {category === 0
                        ?petsName && petsName.map((name, index) => (
                          <ListItem
                            button
                            onClick={() => handleSubcategoryPets(index)}
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
                      {category
                        !== 0 && (<ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary={subcategoryMap.name} />
                        </ListItem>
                        )}
                      {
                        category === 0 && (
                          <ListItem>
                            <SimpleTooltips />
                          </ListItem>)
                      }
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
