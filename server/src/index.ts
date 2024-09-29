// src/index.ts
import express from "express";
import cors from "cors";
import path from "path";
import { dynamicValidationMiddleware } from "./middlewares/validationMiddleware";

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../../client/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
});
app.post("/register", dynamicValidationMiddleware, (req, res) => {
  res.status(201).json(req.body);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
