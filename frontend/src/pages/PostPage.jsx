import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostRequest, deletePostRequest } from "../api/posts.api";
import Logo from "../img/f-logo.png";
import Delete from "../img/delete.png";
import Edit from "../img/edit.png";
import "../App.css";

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    async function loadPost() {
      try {
        const response = await getPostRequest(id);
        setPost(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    loadPost();
  }, [id]);

  const handleDelete = async () => {
    setShowConfirmation(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await deletePostRequest(id);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setShowConfirmation(false);
    }
  };

  const handleTitleClick = () => {
    navigate(`/post/${id}`);
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  const imageUrl = post.img ? `http://localhost:4000/${post.img}` : Logo;
  const formattedDate = new Date(post.created).toLocaleDateString();

  return (
    <div className="container">
      <div className="card mb-4">
        <div className="d-flex justify-content-center align-items-center p-3">
          <img className="card-img-top" src={imageUrl} alt="Logo" />
        </div>

        <div className="card-body">
          <a className="post-title text-black" onClick={handleTitleClick}>
            <h3 className="card-title">{post.title}</h3>
          </a>

          <p className="card-text">{post.content}</p>
          <p className="card-text small text-black-50 fw-semibold">
            Fecha: {formattedDate}
          </p>
          <div className="d-flex gap-1">
            <button
              className="delete-edit-buttons"
              onClick={() => navigate(`/edit/${id}`)}
            >
              <img src={Edit} alt="Edit" />
            </button>

            <button className="delete-edit-buttons" onClick={handleDelete}>
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
                <button className="delete-button" onClick={confirmDelete}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostPage;
