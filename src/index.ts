import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import { AppDataSource } from "./data-source";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");

    app.use("/users", userRoutes);

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error("Error during Data Source initialization:", error));