// Import Mongoose
import mongoose from "mongoose";

// Create Blog Schema
const blogSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    username: {
      type: String,
      ref: "user",
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

// Create Blog Collection & Export It
const blogModel = mongoose.model("blog", blogSchema);

export default blogModel;
