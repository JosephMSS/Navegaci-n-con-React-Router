import React from "react";
import { Outlet } from "react-router-dom";
import { data } from "../data/MOCK_DATA";
import { Preview } from "./Preview/Preview.component";
export const BlogPage = () => {
 /**
  * Outlet no ayuda a manejar las rutas que pertenecen a un componente determinado
  */
  return (
    <>
      <h1>BlogPage</h1>
      <Outlet />
      <ul>
        {data.map((blog) => {
          return <Preview key={blog.id} blog={blog} />;
        })}
      </ul>
    </>
  );
};
