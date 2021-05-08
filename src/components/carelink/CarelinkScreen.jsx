import React, { useEffect } from "react";
// import Copyright from "../copyright/Copyright";
import { usePet } from "../hooks/usePet";
// import { useBreeds } from "../hooks/useBreed";
import { green, pink, indigo } from '@material-ui/core/colors';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Sidebar from "./sidebar/Sidebar";
// import {getRaza }from "../../services/ScraperService";



const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    maxWidth: "100%",
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  avatar: {
    color: theme.palette.getContrastText(indigo[500]),
    backgroundColor: indigo[500],
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
}));

export const CarelinkScreen = () => {
// const [groupSelect, setGroupSelect] = useState({group: 1})
  const { getPets } = usePet();
  // const {breeds, getBreedsList  } = useBreeds();
  const classes = useStyles();
  const theme = useTheme();
 
  useEffect(() => {
    getPets();
    // getBreedsList()
  }, [getPets]);

  // if (!petsUser ) {
  //   return "Loading...";
  // }


  return (
    <>
      <Sidebar classes={classes} themeDirection={theme.direction}/>
      
    </>
  );
};
