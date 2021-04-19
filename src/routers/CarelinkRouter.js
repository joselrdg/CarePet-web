import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { CarelinkScreen } from "../components/carelink/CarelinkScreen";

import PetsScreen from "../components/carelink/main/PetsScreen";
import { Typography } from "@material-ui/core";
import { usePet } from "../components/hooks/usePet";
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
}));

export const CarelinkRouter = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <CarelinkScreen />
      <main className={classes.content}>
        <div className={classes.toolbar} />
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
      </main>
    </div>
  );
};
