import React from "react";
import { Form, Formik } from "formik";
import { createPostRequest } from "../api/posts.api";

// Form crea el formulario y Formik mantiene el estado con los initialValues y las propiedades

function PostsForm() {
  return (
    <div>
      <Formik
        initialValues={{ title: "", content: "" }}
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
