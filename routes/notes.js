import express from "express";

import {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notes.js";

const router = express.Router();

router.route("/").get(getNotes).post(createNote);

router.route("/:id").get(getNote).put(updateNote).delete(deleteNote);

// router.get("/", getNotes);

// router.get("/:id", getNote);

// router.post("/", createNote);

// router.put("/:id", updateNote);

// router.delete("/:id", deleteNote);

export default router;
