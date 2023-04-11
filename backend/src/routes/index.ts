import { Router, Request, Response } from "express";
import authRouter from '@routes/auth';

const router: Router = Router();

router.get('/auth', authRouter);

export default router;