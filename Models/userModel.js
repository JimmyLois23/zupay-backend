// Import Mongoose
import mongoose from "mongoose";

// Create User Schema
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is Required !!"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create User Collection & Export It
const userModel = mongoose.model("user", userSchema);

export default userModel;
