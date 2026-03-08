import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  confirmPassword: String,
});
export const userModel = mongoose.model("users", userSchema);
