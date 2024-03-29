import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import notes from "./routes/notes.js";
import users from "./routes/users.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

dotenv.config({
  path: "./config/config.env",
});

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use(cors());

app.use("/api/v1/notes", notes);
app.use("/api/v1/users", users);

app.listen(3000, () => {
  try {
    connectDB();
    console.log("Server is UP and running 3000!");
    console.log("connected  to mongoDB");
  } catch (error) {
    console.error(`Error : ${error.message}`);

    process.exit(1);
  }
});
