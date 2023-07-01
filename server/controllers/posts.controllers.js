import { pool } from "../db.js";

export const getPosts = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM posts ORDER BY created ASC");
  res.json(result);
};

export const getPost = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM posts WHERE id = ?", [
    req.params.id,
  ]);

  if (result.length === 0) {
    return res.status(404).json({ message: "Post no encontrado" });
  }

  res.json(result[0]);
};

export const createPost = async (req, res) => {
  const { title, content } = req.body;
  const [result] = await pool.query(
    "INSERT INTO posts(title, content) VALUES (?, ?)",
    [title, content]
  );
  res.json({ id: result.insertId, title, content });
};

export const updatePost = async (req, res) => {
  const result = await pool.query("UPDATE posts SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  res.json(result);
};

export const deletePost = async (req, res) => {
  const [result] = await pool.query("DELETE FROM posts WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Post no encontrado" });
  }

  return res.sendStatus(204);
};
