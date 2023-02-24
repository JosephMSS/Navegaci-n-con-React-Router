import React from "react";
import { Link } from "react-router-dom";

export const ItemLink = ({ route, label }) => {
  return (
    <li>
      <Link to={route}>{label}</Link>
    </li>
  );
};
