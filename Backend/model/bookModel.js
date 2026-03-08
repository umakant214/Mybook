import mongoose from "mongoose";
const bookSchema = mongoose.Schema({
  Title: String,
  VerSion: String,
  Price: Number,
  Language: String,
});
export const bookModel = mongoose.model("books", bookSchema);
