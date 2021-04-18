import React, { useEffect } from "react";
import { usePet } from "../hooks/usePet";
import Navbar from "../nav/Navbar";
import Pets from "./Pets";
import { Sidebar } from "./Sidebar";


export const CarelinkScreen = () => {
  const { getPets } = usePet();
  
  
  useEffect(() => {
    getPets()    
  }, [getPets]);
  
  return (
    <div className="">
      <Navbar />
      <div>
        <Sidebar />
        <main>
          <Pets />
        </main>
      </div>
    </div>
  );
};
