import React from "react";
import { Link } from "react-router-dom";

export default function LinkToEdit({ user,petId }) {
    
  return (
    <div>
      {user.id === petId && <Link to={`/Mascotas/${""}/edit`}>Edit link</Link>}
    </div>
  );
}
