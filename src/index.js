import "./styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserContextProvider } from "./context/UserContext";
import { PetsContextProvider } from "./context/PetContext";
import { BreedsContextProvider } from "./context/BreedContext";
import { CategoryContextProvider } from "./context/CategoryContext";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <PetsContextProvider>
        <BreedsContextProvider>
          <CategoryContextProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <App />
            </MuiPickersUtilsProvider>
          </CategoryContextProvider>
        </BreedsContextProvider>
      </PetsContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
