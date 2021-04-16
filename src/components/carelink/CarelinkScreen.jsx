import React, { useContext, useEffect, useState } from "react";
import { getPetsList } from "../../services/PetService";
import { UserContext } from "../../context/UserContext";
import Navbar from "../nav/Navbar";
import Pets from "./Pets";
import { Sidebar } from "./Sidebar";

export const CarelinkScreen = () => {
  const [pets, setPets] = useState([]);
  const { user } = useContext(UserContext);
  const { id } = user;
  

  useEffect(() => {
    getPetsList(id).then((pets) => {
      setPets(pets);
    });
  }, [id]);

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
