import { Router } from "express";
import { getCharacters, getCharactersById, createCharacters } from "../controllers/CharacterController";

const router = Router();

router.get("/", getCharacters);
router.get("/:id", getCharactersById);
router.post("/", createCharacters);

export default router;