import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Badge from '@material-ui/core/Badge';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../../stores/AccessTokenStore";
import { usePet } from "../../hooks/usePet";
import DrawerBox from "./drawer";


function ResponsiveDrawer(props) {
  const { petsUser, petSelect } = usePet();

  const { stateCategories, setStateCategories } = usePet();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { window, classes, themeDirection } = props;

  const {
    petsName,
  } = stateCategories;

  useEffect(() => {
    if (petsUser && petsName === null) {
      setStateCategories({
        ...stateCategories,
        petsName: petsUser.map((pet) => pet.name)
      })
    }

  }, [petsUser])


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const container =
    window !== undefined ? () => window().document.body : undefined;


  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className='__flex __jc-between __ai-center'>
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
            CarePet: {petSelect && petSelect.name}
          </Typography>
          <div className='__flex __jc-between __ai-center'>
            <div className='__px-1'>
              <Badge badgeContent={4} color="secondary" >
                <NotificationsIcon />
              </Badge>
            </div>
            <button onClick={logout} className="btn btn-tra"><i class="fas fa-sign-out-alt fa-2x"></i></button>
          </div>
        </Toolbar>

      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
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
              keepMounted: true,
            }}
          >
            <DrawerBox
              classes={{ ...classes }}
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
              classes={{ ...classes }}
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
