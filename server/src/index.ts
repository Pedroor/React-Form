// src/index.ts
import express from "express";
import cors from "cors";
import path from "path";

const app = express();

// Middleware para habilitar CORS e JSON parsing
app.use(cors());
app.use(express.json());

// Serve os arquivos estáticos do React (após o build)
app.use(express.static(path.join(__dirname, "../../client/dist")));

// Usar as rotas de registro

// Para qualquer outra rota, sirva o index.html do React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
