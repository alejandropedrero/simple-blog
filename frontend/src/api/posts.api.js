import axios from "axios";

export const getPostRequest = async (id) =>
  await axios.get(`http://localhost:4000/posts/${id}`);

export const getPostsRequest = async () =>
  await axios.get("http://localhost:4000/posts");

export const createPostRequest = async (post) =>
  await axios.post("http://localhost:4000/posts", post);

export const deletePostRequest = async (id) =>
  await axios.delete(`http://localhost:4000/posts/${id}`);

export const updatePostRequest = async (id, newData) =>
  await axios.put(`http://localhost:4000/posts/${id}`, newData);
