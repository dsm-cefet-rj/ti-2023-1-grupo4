import { Router, Request, Response } from "express";
import user from "./userRoutes";

const router: Router = Router();
router.use('/', user);



export default router;

