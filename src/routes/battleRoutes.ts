import { Router } from "express";
import { battle } from '../controllers/BattleSystem';

const router = Router();

router.patch("/:characterId/:monsterId",battle);

export default router;