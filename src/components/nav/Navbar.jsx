import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Navbar = () => {
  const {user} = useContext(UserContext);
  return <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/carelink">CareLink</NavLink>
      <Link to="/auth/login">Login</Link>
      <Link to="/auth/register">Register</Link>
      <Link to="/logout">Log out</Link>
  </div>;
};

export default Navbar;
