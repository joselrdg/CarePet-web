import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/carelink">CareLink</NavLink>
      <Link to="/auth/login">Login</Link>
      <Link to="/auth/register">Register</Link>
  </div>;
};

export default Navbar;
