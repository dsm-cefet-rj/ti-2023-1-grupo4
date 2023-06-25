import { Router, Request } from "express";
import user from "./userRoutes";
import login from "./loginRoutes"
import deliveryRouter from "./deliveryRoutes";
import itemRouter from "./itemRoutes";
import { Authenticate } from "@app/middleware/Auth";

const router: Router = Router();
router.use('/signIn', login);
router.use('/delivery', deliveryRouter);
router.use('/item', itemRouter);
router.use('/users', user);

export default router;

