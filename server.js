import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: "./config/config.env",
});

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(3000, () => {
  console.log("Server is UP and running 3000!");
});
