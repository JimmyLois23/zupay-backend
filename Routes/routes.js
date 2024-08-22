import express from "express";

import auth from "../Middleware/auth.js";
import { register, login, profile } from "../Controller/userController.js";
import {
  createBlog,
  editBlog,
  deleteBlog,
  getAllBlog,
  getBlogById,
} from "../Controller/blogController.js";
import { searchBlog } from "../Controller/searchController.js";

const route = express.Router();

// Register API
route.post("/register", register);
// Login API
route.post("/login", login);
// Profile API
route.get("/profile/:id", auth, profile);

// Creating Blog API
route.post("/create-blog/:id", auth, createBlog);
// Updating Blog API
route.put("/edit-blog/:id", auth, editBlog);
// Deleting Blog API
route.delete("/delete-blog/:id/:blogid", auth, deleteBlog);
// Get Blog API
route.get("/get-blog/:id", auth, getAllBlog);

// Search Blog API
route.post("/search-blog", searchBlog);

// Get Single Blog API
route.get("/get-single-blog/:uId/:bId", auth, getBlogById);

export default route;
