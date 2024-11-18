import { Router } from "express";
import { battleRandon, battle } from '../controllers/BattleSystem';

const router = Router();

router.patch("/:characterId",battleRandon); // randon batle
router.patch("/:characterId/:monsterId",battle); // batle especific

export default router;