import "./styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserContextProvider } from "./context/UserContext";
import { PetsContextProvider } from "./context/PetContext";
import { CategoryContextProvider } from "./context/CategoryContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <PetsContextProvider>
        <CategoryContextProvider>
          <App />
        </CategoryContextProvider>
      </PetsContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
