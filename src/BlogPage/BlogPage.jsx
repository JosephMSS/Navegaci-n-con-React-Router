import React from "react";
import { data } from "../data/MOCK_DATA";
import { Preview } from "./Preview/Preview.component";
export const BlogPage = () => {
  return (
    <>
      <h1>BlogPage</h1>
      <ul>
        {data.map((blog) => {
          return <Preview key={blog.id} blog={blog} />;
        })}
      </ul>
    </>
  );
};
