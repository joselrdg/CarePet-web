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
import { useHistory } from "react-router-dom";
import SimpleTooltips from "../../common/ToolTip";
import { usePet } from "../../hooks/usePet";
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import Expand from './Expand'

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
  const { setPet } = usePet()
  const { push } = useHistory();


  const handleSubcategoryPets = (subcategory) => {

    setCategory((prevState) => ({
      ...prevState,
      subcategory: subcategory,
      createpet: false
    }));
    setPet(subcategory)
  };

  const set = (index) => {
    setCategory({
      category: index,
      subcategory: 0,
      folder: 0,
      createpet: false
    });
  }

  const handletooltip = () => {
    setCategory((prevState) => ({
      ...prevState,
      folder: 5,
      createpet: true
    }))
  }

  const handleClick = (index) => {
    const srtLink = CATEGORIES[index].name.replaceAll(' ', '-')
    set(index)
    setOpen(!open);
    setTimeout(() => {
      if (index !== category) {
        push(srtLink);
        setOpen(true);
      }
    }, 280);
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
            {/* <Link to={`/CarePet/${item.name}`}> */}
            <ListItem button onClick={() => handleClick(index)}>
              <ListItemIcon><Avatar className={classes.avatar}>{item.icon}</Avatar></ListItemIcon>
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
                        ? petsName && petsName.map((name, index) => (
                          <ListItem
                            button
                            onClick={() => handleSubcategoryPets(index)}
                            className={classes.nested}
                            key={index}
                          >
                          <div className='__flex __jc-between __ai-center'>
                            <ListItemIcon>
                            <i className="fas fa-dog __px-1 __icon-light "></i>
                            </ListItemIcon>
                            <ListItemText primary={name} />
                            </div>
                          </ListItem>
                        ))
                        : null}
                      {category
                        !== 0 && (<ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <ScatterPlotIcon className="__icon-light "></ScatterPlotIcon>
                          </ListItemIcon>
                          <ListItemText primary={subcategoryMap.name} />
                        </ListItem>
                        )}
                      {
                        category === 0 && (
                          <ListItem button onClick={() => handletooltip(7)}>
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
