import React from "react";

function PostCard({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div>
        <img src="x"></img>
      </div>
      <span>{post.created}</span>
      <button>Editar</button>
      <button>Eliminar</button>
    </div>
  );
}

export default PostCard;
