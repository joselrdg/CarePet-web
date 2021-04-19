import React from "react";
import Navbar from "../nav/Navbar";
import SignUp from "../auth/SingUp";


export const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      Home
      <SignUp/>
    </div>
  );
};
