import React from "react";
import { NavLink } from "react-router-dom";
import "../navbar-menu-item/NavBarMenuItem.css";
const NavBarMenuItem = (props) => {
  return (
    <li className="navBarMenuItem">
      <NavLink to={props.link} exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavBarMenuItem;
