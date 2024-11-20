import { Router } from "express";
import { equipeItem} from '../controllers/ItemsController';

const router = Router();

router.patch("/:id_user/:id_item/:position", equipeItem);

export default router;