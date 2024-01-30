import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "Please provide a user id"],
  },
  title: {
    type: String,
    required: [true, "Please provide a title"],
    maxlength: [40, "Titile cannot be more than 40 charcteres"],
  },

  description: {
    type: String,
    required: true,
    maxlength: [200, "description cannot be more than 200 charcteres"],
  },

  color: {
    type: String,
    default: "#ffffff",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Note", NoteSchema);
