import { React, useEffect, useState } from "react";
import { Form, Formik } from "formik";
import {
  createPostRequest,
  getPostRequest,
  updatePostRequest,
} from "../api/posts.api";
import { useParams, useNavigate } from "react-router-dom";

// Form crea el formulario y Formik mantiene el estado con los initialValues y las propiedades

function PostsForm() {
  const params = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const getPost = async (id) => {
    try {
      const response = await getPostRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createPost = async (values) => {
    try {
      const response = await createPostRequest(values);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const updatePost = async (id, newData) => {
    try {
      const response = await updatePostRequest(id, newData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadPost = async () => {
      if (params.id) {
        const post = await getPost(params.id);
        console.log(post);
        setPost({
          title: post.title,
          content: post.content,
        });
      }
    };
    loadPost();
  }, []);

  return (
    <div className="container">
      <h1>{params.id ? "Editar post" : "Crear post"}</h1>

      <Formik
        initialValues={post}
        enableReinitialize={true}
        onSubmit={async (values) => {
          console.log(values);

          if (params.id) {
            await updatePost(params.id, values);
            navigate("/");
          } else {
            await createPost(values);
            navigate("/");
          }
          setPost({ title: "", content: "" });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Título</label>
            <input
              type="text"
              name="title"
              placeholder="Escribe un título"
              onChange={handleChange}
              value={values.title}
            ></input>

            <label>Contenido</label>
            <textarea
              name="content"
              rows="3"
              placeholder="Y aquí el contenido"
              onChange={handleChange}
              value={values.content}
            ></textarea>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Guardando ..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PostsForm;
