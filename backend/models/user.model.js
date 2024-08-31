import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  images: {
    type: String,
    default: "",
  },
  searchHistory: {
    type: Array,
    default: [],
  },
});

export const User = mongoose.model("User", userSchema);
