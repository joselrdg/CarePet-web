import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// import { makeStyles, useTheme } from "@material-ui/core/styles";
import { usePet } from "../../hooks/usePet";
// import { useCategory } from "../../hooks/useCategory";
import DrawerBox from "./drawer";

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
  const { petsUser, petSelect } = usePet();
  // const {setCategory, stateCategory} = useCategory()

 console.log(petSelect)
  const [stateCategories, setStateCategories] = useState({
    petsName: petsUser ? petsUser.map((pet) => pet.review.name) : null,
    petNumber: 0,
    categoryNumber: 0,
    subcategoryNumber: 0,
  });
  // const [open, setOpen] = React.useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { window, classes, themeDirection } = props;
  // const classes = useStyles();
  // const theme = useTheme();

  // const setNames = () => {
  //   setStateCategories({
  //       ...stateCategories, 
  //       petsName: petsUser.map((pet) => pet.review.name)
  //     })
  // }

  // useEffect(() => {
  //   console.log('use efect de los nombres')
  //   if (petsUser && petsName=== null){
  //     setNames()
  //   }
   
  // }, [petsUser])

  
 

  const {
    petsName,
    petNumber,
    // categoryNumber,
    // subcategoryNumber,
  } = stateCategories;
 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const handleSubcategory = (subcategory) => {
  //   setStateCategories((prevState) => ({
  //     ...prevState,
  //     subcategoryNumber: subcategory,
  //   }));
  // };

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
            CarePet: {petSelect && petSelect.review.name}
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
              classes={{...classes}}
              // open={open}
              // categoryNumber={categoryNumber}
              petsName={petsName}
              // handleClick={(h) => handleClick(h)}
              // handleSubcategory={(h) => handleSubcategory(h)}
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
            // open
          >
            <DrawerBox
              classes={{...classes}}
              // open={open}
              // categoryNumber={categoryNumber}
              petsName={petsName}
              // handleClick={(h) => handleClick(h)}
              // handleSubcategory={(h) => handleSubcategory(h)}
            />
            {/* {drawer} */}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
}

export default ResponsiveDrawer;
