import React, { useContext, useEffect, useState } from "react";
import { getPetsUser } from "../../services/PetService";
import { UserContext } from "../../context/UserContext";
import Navbar from "../nav/Navbar";
import Pets from "./Pets";
import { Sidebar } from "./Sidebar";

export const CarelinkScreen = () => {
  const [pets, setPets] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user !== null) {
      const id = { user: user.id, name:user.name };
      getPetsUser(id).then((pets) => {
        setPets(pets);
      });
    }
  }, [user]);

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
