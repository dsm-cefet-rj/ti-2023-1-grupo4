import { Router, Request, Response } from "express";
import user from "./userRoutes";
import login from "./loginRoutes"

const router: Router = Router();
router.use('/', user, login);





export default router;

