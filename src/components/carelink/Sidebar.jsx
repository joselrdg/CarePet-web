import React from "react";
import { logout } from "../../stores/AccessTokenStore";



export const Sidebar = () => {
  return (
    <div>
      <div className="journal__sidebar">
        <div className="journal__sidebar-navbar">
          <h3 className="mt-5">
            {/* <i className="far fa-moon" /> */}
            <span> Jose</span>
          </h3>
          <button onClick={logout} className="btn">Logout</button>
        </div>
        <div className="journal__new-entry">
          {/* <i className="far fa-calendar-plus fa-5x" /> */}
          <p className="mt-5">New entry</p>
        </div>

      </div>
    </div>
  );
};