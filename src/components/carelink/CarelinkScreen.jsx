import React from "react";
import Navbar from "../nav/Navbar";
import { Sidebar } from "./Sidebar";

export const CarelinkScreen = () => {
  return (
    <div className="">
    <Navbar/>
      <div>
        <Sidebar />
        <main></main>
      </div>
    </div>
  );
};
