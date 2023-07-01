import React from "react";
import { deletePostRequest } from "../api/posts.api";
import { useNavigate } from "react-router-dom";

function PostCard({ post }) {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    try {
      const response = await deletePostRequest(id);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div>
        <img src="x"></img>
      </div>
      <span>{post.created}</span>
      <button onClick={() => navigate(`/edit/${post.id}`)}>Editar</button>
      <button onClick={() => handleDelete(post.id)}>Eliminar</button>
    </div>
  );
}

export default PostCard;
