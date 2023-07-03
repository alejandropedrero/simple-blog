import { pool } from "../db.js";
import fs from "fs";

export const getPosts = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM posts ORDER BY created DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM posts WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0) {
      return res.status(404).json({ message: "Post no encontrado" });
    }

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const imagePath = req.file
      ? req.file.path.replace(/\\/g, "/").replace("public/", "")
      : "";
    const [result] = await pool.query(
      "INSERT INTO posts(title, content, img) VALUES (?, ?, ?)",
      [title, content, imagePath]
    );
    res.json({ id: result.insertId, title, content, img: imagePath });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const imagePath = req.file
      ? req.file.path.replace(/\\/g, "/").replace("public/", "")
      : "";
    const result = await pool.query(
      "UPDATE posts SET title = ?, content = ?, img = ? WHERE id = ?",
      [title, content, imagePath, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const [postResult] = await pool.query("SELECT * FROM posts WHERE id = ?", [
      req.params.id,
    ]);

    if (postResult.length === 0) {
      return res.status(404).json({ message: "Post no encontrado" });
    }

    const post = postResult[0];

    if (post.img) {
      const imagePath = `public/${post.img}`;
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error("Error deleting image file:", err);
        }
      });
    }

    const [result] = await pool.query("DELETE FROM posts WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Post no encontrado" });
    }

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
