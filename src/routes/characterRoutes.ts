import { Router } from "express";
import { getCharacters, getCharactersById, createCharacters, giveExperience } from "../controllers/CharacterController";

const router = Router();

router.get("/", getCharacters);
router.get("/:id", getCharactersById);
router.post("/", createCharacters);
router.patch("/:id_user/:exp", giveExperience);

export default router;