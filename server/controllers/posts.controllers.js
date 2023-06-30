import { pool } from "../db.js";

export const getPosts = (req, res) => {
  res.send("Obteniendo todos los posts");
};

export const getPost = (req, res) => {
  res.send("Obteniendo un post");
};

export const createPost = async (req, res) => {
  const { title, content } = req.body;
  const [result] = await pool.query(
    "INSERT INTO posts(title, content) VALUES (?, ?)",
    [title, content]
  );
  res.json({ id: result.insertId, title, content });
};

export const updatePost = (req, res) => {
  res.send("Actualizando post");
};

export const deletePost = (req, res) => {
  res.send("Eliminando post");
};
