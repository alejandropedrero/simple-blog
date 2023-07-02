import React from "react";
import { deletePostRequest } from "../api/posts.api";
import { useNavigate } from "react-router-dom";
import Logo from "../../public/f-logo.png";
import Delete from "../img/delete.png";
import Edit from "../img/edit.png";
import "../App.css";

function PostCard({ post }) {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (confirmed) {
      try {
        const response = await deletePostRequest(id);
        console.log(response);

        // Optional: You can add additional logic here, such as showing a success message
      } catch (error) {
        console.error(error);

        // Optional: You can handle error scenarios here, such as showing an error message
      }
    }
  };

  return (
    <div className="card mb-4">
      <div className="d-flex justify-content-center align-items-center p-3">
        <img className="card-img-top" src={Logo}></img>
      </div>

      <div className="card-body">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-text">{post.content}</p>
        <p className="card-text small text-black-50 fw-semibold">
          Fecha: {post.created}
        </p>
        <div className="d-flex gap-1">
          <button
            className="delete-edit-buttons"
            onClick={() => navigate(`/edit/${post.id}`)}
          >
            <img src={Edit} alt="Edit" />
          </button>

          <button
            className="delete-edit-buttons"
            onClick={() => handleDelete(post.id)}
          >
            <img src={Delete} alt="Eliminar" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
