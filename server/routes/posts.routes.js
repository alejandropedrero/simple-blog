import { Router } from "express";
import upload from "../upload.js";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts.controllers.js";

const router = Router();

router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.post("/posts", upload.single("image"), createPost);
router.put("/posts/:id", upload.single("image"), updatePost);
router.delete("/posts/:id", deletePost);

export default router;
