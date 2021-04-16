import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPetInfo } from "../../services/PetService";
import LinkToEdit from "./LinkToEdit";

export default function Pet({ }) {
  const [pet, setPet] = useState();

  const { id } = useParams();

  useEffect(() => {
    getPetInfo(id).then((pet) => setPet(pet));
  }, [id]);

  if (!pet) {
    return "Loading...";
  }

  const { review, carepet } = pet;

  const {
    name,
    allergies,
    breed,
    chip,
    color,
    familyhistory,
    hair,
    previousdiseases,
    species,
    sterilized,
    surgeries,
  } = review;

  return (
    <div>
      <h1>pantalla pet unica</h1>
      <h1>Name: {name}</h1>
      <h3>Chip: {chip}</h3>
      <h3>Species: {species}</h3>
      <h3>Breed: {breed}</h3>
      <h3>Hair: {hair}</h3>
      <h3>Sterilized: {sterilized}</h3>
      <LinkToEdit user petId='id'/>
    </div>
  );
}
