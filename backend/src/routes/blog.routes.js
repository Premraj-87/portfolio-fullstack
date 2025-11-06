import express from "express";
import { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog } from "../controllers/blog.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createBlog);
router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.put("/:id", protect, updateBlog);
router.delete("/:id", protect, deleteBlog);

export default router;