import React, { useEffect, useState } from "react";
import { getPetsList } from "../../services/PetService";
import Navbar from "../nav/Navbar";
import Pets from "./Pets";
import { Sidebar } from "./Sidebar";

export const CarelinkScreen = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getPetsList().then((pets) => {
      setPets(pets);
    });
  }, []);

  return (
    <div className="">
      <Navbar />
      <div>
        <Sidebar />
        <main>
          <Pets pets={pets} />
        </main>
      </div>
    </div>
  );
};
