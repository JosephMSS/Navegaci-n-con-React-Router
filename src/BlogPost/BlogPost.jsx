import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { data } from "../data/MOCK_DATA";
import { ROUTES } from "../models/routes";
export const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blog = data.find((blog) => blog.slug === slug);

  const returnToBlog = () => {
    navigate(ROUTES.BACK);
    /**
     * ! Si deseas que el usuario no pueda volver a la pantalla anterior, 
     * ! usas replace true para crear un nuevo historial de navegación 
     * ! a partir de la nueva ruta.
     */
    // navigate('/', { replace: true });
  };
  return (
    <>
      <h2>{blog.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{blog.content}</p>
      <p>{blog.author}</p>
    </>
  );
};
