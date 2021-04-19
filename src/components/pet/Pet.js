import React from "react";
import LinkToEdit from "./LinkToEdit";
import ScrollableTabsButtonAuto from "../carelink/main/TabPanel";

export default function Pet({
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
}) {

  console.log(name)

  if (!name) {
    return "Loading...";
  }
  

  return (
    <div>
    <ScrollableTabsButtonAuto/>
      <h1>pantalla pet unica</h1>
      <h1>Name: {name}</h1>
      <h3>Chip: {chip}</h3>
      <h3>Species: {species}</h3>
      <h3>Breed: {breed}</h3>
      <h3>Hair: {hair}</h3>
      <h3>color: {color}</h3>
      <h3>Sterilized: {sterilized}</h3>
      <h3>allergies: {allergies}</h3>
      <h3>familyhistory: {familyhistory}</h3>
      <h3>previousdiseases: {previousdiseases}</h3>
      <h3>surgeries: {surgeries}</h3>
      <LinkToEdit user petId="id" />
    </div>
  );
}
