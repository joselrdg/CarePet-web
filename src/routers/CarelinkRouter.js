import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { makeStyles } from "@material-ui/core/styles";

import { CarelinkScreen } from "../components/carelink/CarelinkScreen";

import PetsScreen from "../components/carelink/main/PetsScreen";
import ScheduleScreen from "../components/carelink/main/ScheduleScreen";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    maxWidth: "100%",
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  main: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export const CarelinkRouter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CarelinkScreen />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.main}>
          <Switch>
            <Route exact path="/carelink/pets" component={PetsScreen} />
            <Route exact path="/carelink/schedule" component={ScheduleScreen} />
            <Route
              exact
              path="/carelink/pet/:id/edit"
              component={CarelinkScreen}
            />
            <Redirect to="/carelink" />
          </Switch>
        </div>
      </main>
    </div>
  );
};
