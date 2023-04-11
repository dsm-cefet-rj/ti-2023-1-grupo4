import { Request, Response } from "express";

export function loginController(req: Request, res: Response) {
  res.send("loginController");
}

export function registerController(req: Request, res: Response) {
  res.send("registerController");
}
