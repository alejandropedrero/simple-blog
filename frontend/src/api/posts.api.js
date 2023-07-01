import axios from "axios";

export const createPostRequest = async (post) =>
  await axios.post("http://localhost:4000/posts", post);
