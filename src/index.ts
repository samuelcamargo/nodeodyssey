import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";

const app = express();
const PORT = process.env.PORT || 3000; 

app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
  res.send("NodeOdyssey Running.");
});

// Registra as rotas do usuário
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});