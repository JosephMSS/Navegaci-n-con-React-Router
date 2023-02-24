import React from "react";
import { Link } from "react-router-dom";

export const Preview = ({ blog }) => {
  const { title, slug, id } = blog;
  return (
    <li>
      <Link to={`${slug}`}>{title}</Link>
    </li>
  );
};
