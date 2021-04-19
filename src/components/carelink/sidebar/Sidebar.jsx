import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// import { makeStyles, useTheme } from "@material-ui/core/styles";
import { usePet } from "../../hooks/usePet";
import { CATEGORIES } from "../../constants/constants";
import Pet from "../../pet/Pet";
import DrawerBox from "./drawer";
import { CategoryRouter } from "../../../routers/CategoryRouter";
// import CategoryRouter from "../../../routers/CategoryRouter";

// const drawerWidth = 260;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   drawer: {
//     [theme.breakpoints.up("sm")]: {
//       width: drawerWidth,
//       flexShrink: 0,
//     },
//   },
//   appBar: {
//     [theme.breakpoints.up("sm")]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: drawerWidth,
//     },
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up("sm")]: {
//       display: "none",
//     },
//   },
//   // necessary for content to be below app bar
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   content: {
//     maxWidth: "100%",
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// }));

function ResponsiveDrawer(props) {
  const { petsUser } = usePet();

  const [stateCategories, setStateCategories] = useState({
    petsName: petsUser && petsUser.map((pet) => pet.review.name),
    petNumber: 0,
    categoryNumber: 0,
    subcategoryNumber: 0,
  });
  const [open, setOpen] = React.useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { window, classes, themeDirection } = props;
  // const classes = useStyles();
  // const theme = useTheme();

  const {
    petsName,
    petNumber,
    categoryNumber,
    subcategoryNumber,
  } = stateCategories;
  const {
    name,
    allergies,
    breed,
    chip,
    color,
    familyhistory,
    hair,
    previousdiseases,
    species,
    sterilized,
    surgeries,
  } = petsUser[petNumber].review;


  const handleClick = (index) => {
    console.log('index click ', index)

    if (categoryNumber === index) {
      setOpen(!open);
    } else {
      setOpen(true);
    }
    setStateCategories((prevState) => ({
      ...prevState,
      categoryNumber: index,
    }));
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mainContainer = (category) => {
    if (category === "pet") {
      return <Pet {...petsUser[subcategoryNumber].review} />;
    }
  };

  const handleSubcategory = (subcategory) => {
    console.log('subcategoria', subcategory)
    setStateCategories((prevState) => ({
      ...prevState,
      subcategoryNumber: subcategory,
    }));
  };

  // const drawer = (
  //   <div>
  //     <div className={classes.toolbar} />
  //     <Divider />
  //     <List>
  //       {CATEGORIES.map((item, index) => (
  //         <div key={item.name}>
  //           <ListItem button onClick={() => handleClick(index)}>
  //             <ListItemIcon>{item.icon}</ListItemIcon>
  //             <ListItemText primary={item.name} />
  //             {open && categoryNumber === index ? (
  //               <ExpandLess />
  //             ) : (
  //               <ExpandMore />
  //             )}
  //           </ListItem>

  //           {categoryNumber === index
  //             ? CATEGORIES[categoryNumber].subcategory.map(
  //                 (subcategory, idex) => (
  //                   <div key={index}>
  //                     <Collapse in={open} timeout="auto" unmountOnExit>
  //                       <List component="div" disablePadding>
  //                         {categoryNumber === 0
  //                           ? petsName.map((name, index) => (
  //                               <ListItem
  //                                 button
  //                                 onClick={() => handleSubcategory(index)}
  //                                 className={classes.nested}
  //                               >
  //                                 <ListItemIcon>
  //                                   <StarBorder />
  //                                 </ListItemIcon>
  //                                 <ListItemText primary={name} />
  //                               </ListItem>
  //                             ))
  //                           : null}
  //                         <ListItem button className={classes.nested}>
  //                           <ListItemIcon>
  //                             <StarBorder />
  //                           </ListItemIcon>
  //                           <ListItemText primary={subcategory} />
  //                         </ListItem>
  //                       </List>
  //                     </Collapse>
  //                   </div>
  //                 )
  //               )
  //             : null}
  //         </div>
  //       ))}
  //     </List>
  //     <Divider />
  //     {/* <List>
  //       {CATEGORIES.map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>{ICONSCATEGORIES[index]}</ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List> */}
  //     <Divider />
  //   </div>
  // );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            CarePet: {name}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={themeDirection === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerBox
              classes={{ toolbar: classes.toolbar, nested: classes.nested }}
              open={open}
              categoryNumber={categoryNumber}
              petsName={petsName}
              handleClick={(h)=>handleClick(h)}
              handleSubcategory={(h)=>handleSubcategory(h)}
            />

            {/* {drawer} */}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <DrawerBox
              classes={{ toolbar: classes.toolbar, nested: classes.nested }}
              open={open}
              categoryNumber={categoryNumber}
              petsName={petsName}
              handleClick={(h)=>handleClick(h)}
              handleSubcategory={(h)=>handleSubcategory(h)}
            />
            {/* {drawer} */}
          </Drawer>
        </Hidden>
      </nav>
     
    </>
  );
}

export default ResponsiveDrawer;
