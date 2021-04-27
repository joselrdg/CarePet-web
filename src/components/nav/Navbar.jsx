import React from "react";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../stores/AccessTokenStore";

const Navbar = () => {
  return <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/CarePet/pets">CareLink</NavLink>
      <Link to="/auth/login">Login</Link>
      <Link to="/auth/register">Register</Link>
      <button onClick={logout} className="btn btn-primary">Logout</button>
  </div>;
};

export default Navbar;


