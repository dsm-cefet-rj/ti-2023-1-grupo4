import { Router } from 'express';
import LoginController from "../controllers/LoginController";

const login = Router();

login.post('/', LoginController.login);

export default login;