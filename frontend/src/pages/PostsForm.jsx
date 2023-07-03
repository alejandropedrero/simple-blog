import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import {
  createPostRequest,
  getPostRequest,
  updatePostRequest,
} from "../api/posts.api";
import { useParams, useNavigate } from "react-router-dom";

function PostsForm() {
  const params = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    content: "",
    image: null,
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
  }, [params.id]);

  return (
    <div className="container">
      <h1>{params.id ? "Editar post" : "Crear post"}</h1>

      <Formik
        initialValues={post}
        enableReinitialize={true}
        onSubmit={async (values) => {
          const formData = new FormData();
          formData.append("title", values.title);
          formData.append("content", values.content);
          formData.append("image", values.image);

          try {
            if (params.id) {
              await updatePost(params.id, formData);
              console.log("Post updated successfully!");
            } else {
              await createPost(formData);
              console.log("Post created successfully!");
            }
            navigate("/");
          } catch (error) {
            console.error("Error:", error);
          }
        }}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className="form-group mt-3">
              <label className="mb-3 fw-medium" htmlFor="title">
                Título
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                onChange={(e) => setFieldValue("title", e.target.value)}
                value={values.title}
                required
              />
            </div>

            <div className="form-group mt-3">
              <label className="mb-3 fw-medium" htmlFor="content">
                Contenido
              </label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                onChange={(e) => setFieldValue("content", e.target.value)}
                value={values.content}
                required
              ></textarea>
            </div>

            <div className="form-group mt-3">
              <label htmlFor="image">Imagen</label>
              <input
                type="file"
                className="form-control-file mx-2"
                id="image"
                name="image"
                onChange={(e) => setFieldValue("image", e.target.files[0])}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary upload-button mt-3"
            >
              {params.id ? "Guardar" : "Crear"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PostsForm;
