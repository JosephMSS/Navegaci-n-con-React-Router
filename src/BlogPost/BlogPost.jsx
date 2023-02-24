import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/MOCK_DATA";
export const BlogPost = () => {
  const { slug } = useParams();
  const blog = data.find((blog) => blog.slug === slug);
  return (
    <>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <p>{blog.author}</p>
    </>
  );
};
