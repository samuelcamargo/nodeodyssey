import { Router } from "express";
import { usePotion} from '../controllers/ShopController';

const router = Router();

router.patch("/:id_user/:id_potion", usePotion);

export default router;