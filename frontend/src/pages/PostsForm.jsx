import { React, useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { createPostRequest, getPostRequest } from "../api/posts.api";
import { useParams } from "react-router-dom";

// Form crea el formulario y Formik mantiene el estado con los initialValues y las propiedades

function PostsForm() {
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

  const params = useParams();

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
    <div>
      <h1>{params.id ? "Editar post" : "Crear post"}</h1>

      <Formik
        initialValues={post}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await createPostRequest(values);
            console.log(response);
            actions.resetForm();
          } catch (error) {
            console.error(error);
          }
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
              {isSubmitting ? "Enviando ..." : "Enviado"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PostsForm;
