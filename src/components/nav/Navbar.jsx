import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../stores/AccessTokenStore";
import { UserContext } from "../../context/UserContext";

const Navbar = () => {
  const {user} = useContext(UserContext);
  return <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/carelink">CareLink</NavLink>
      <Link to="/auth/login">Login</Link>
      <Link to="/auth/register">Register</Link>
      <button onClick={logout} className="btn btn-primary">Logout</button>
  </div>;
};

export default Navbar;


