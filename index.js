import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoConnection from "./Database/db.js";
import Routes from "./Routes/routes.js";

const app = express();

app.use(express.json());
app.use(cors("*"));
dotenv.config();

// app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Server 5000" });
});

app.use("/api/v1", Routes);

mongoConnection();
// Listening Port
app.listen(process.env.PORT, () => {
  console.log(`Blogging Server Running at ${process.env.PORT}`);
});
