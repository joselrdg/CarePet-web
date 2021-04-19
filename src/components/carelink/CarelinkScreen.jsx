import React, { useEffect } from "react";
import Copyright from "../copyright/Copyright";
import { usePet } from "../hooks/usePet";
import Navbar from "../nav/Navbar";
import Pets from "./Pets";
import Sidebar from "./sidebar/Sidebar";

export const CarelinkScreen = () => {
  const { getPets } = usePet();

  useEffect(() => {
    getPets();
  }, [getPets]);

  return (
    <div className="">
      <Navbar />
      <Sidebar />
      <Copyright />
    </div>
  );
};
