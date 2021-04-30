import React from "react";
import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { CATEGORIES } from "../../../constants/constants";
import { useCategory } from "../../hooks/useCategory";
import {Link, useHistory} from 'react-router-dom'
import { usePet } from "../../hooks/usePet";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
    return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

export default function ScrollableTabsButtonAuto() {
  const {stateCategory, setCategory} = useCategory()
  const {petsUser } = usePet


  const handleChange = (event, newValue) => {
     setCategory((prevState) => ({...prevState, folder: newValue}));
  };

  const { category, subcategory, folder} = stateCategory


  return (
    <>
    {/* <div className={classes.root}> */}
      <AppBar position="static" color="default">
        <Tabs
          value={folder ? folder : 0}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
        {
          category !== 0 
          ? CATEGORIES[category].subcategory[subcategory].folders.map((category, index) => (
            <Tab key={category} label={`${category}`} {...a11yProps(index)} />
          )): CATEGORIES[category].subcategory[0].folders.map((category, index) => (
            <Tab key={category} label={`${category}`} {...a11yProps(index)} />))
        }
          
        </Tabs>
      </AppBar>
      {/* {CATEGORIES[0].subcategory[subcategory].folders.map((category, index) => (
        <TabPanel key={index} value={value} index={index}>
          {category}
        </TabPanel>
      ))} */}
    {/* </div> */}
    </>
  );
}
