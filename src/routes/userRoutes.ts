import { Router } from "express";
import { getUser } from "../controllers/userController";

const router = Router();

// Rota para obter o usuário
router.get("/user", getUser);

export default router;