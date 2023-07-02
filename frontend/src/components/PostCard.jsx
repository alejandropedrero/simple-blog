import React, { useState } from "react";
import { deletePostRequest } from "../api/posts.api";
import { useNavigate } from "react-router-dom";
import Logo from "../img/f-logo.png";
import Delete from "../img/delete.png";
import Edit from "../img/edit.png";
import "../App.css";

function PostCard({ post, onDelete }) {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = async (id) => {
    setShowConfirmation(true);
  };

  const confirmDelete = async (id) => {
    try {
      const response = await deletePostRequest(id);
      console.log(response);
      onDelete(id);
    } catch (error) {
      console.error(error);
    } finally {
      setShowConfirmation(false);
    }
  };

  const handleTitleClick = () => {
    navigate(`/post/${post.id}`);
  };

  const previewContent = post.content.substring(0, 50) + "...";

  return (
    <div className="card mb-4">
      <div className="d-flex justify-content-center align-items-center p-3">
        <img className="card-img-top" src={Logo} alt="Logo" />
      </div>

      <div className="card-body">
        <a className="post-title text-black">
          <h3 className="card-title" onClick={handleTitleClick}>
            {post.title}
          </h3>
        </a>

        <p className="card-text" onClick={handleTitleClick}>
          {previewContent} <span className="read-more">(Leer más)</span>
        </p>
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

      {/* Modal para confirmar el borrado del post */}
      {showConfirmation && (
        <div className="custom-modal">
          <div className="modal-overlay" />
          <div className="modal-content">
            <h5>Confirma la acción</h5>
            <p>¿Estás seguro de que quieres eliminar el post?</p>
            <div className="modal-buttons">
              <button
                className="cancel-button"
                onClick={() => setShowConfirmation(false)}
              >
                Cancelar
              </button>
              <button
                className="delete-button"
                onClick={() => confirmDelete(post.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostCard;
