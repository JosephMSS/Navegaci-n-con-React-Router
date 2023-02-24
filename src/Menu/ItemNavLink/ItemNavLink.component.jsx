import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Permite agregar funciones en las que podamos agregar clases o estilos en caso de que este activo el link
 */
export const ItemNavLink = ({ route, label }) => {
  return (
    <li>
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "red" : "blue",
        })}
        className={({ isActive }) => "activeClass"}
        to={route}
      >
        {label}
      </NavLink>
    </li>
  );
};
