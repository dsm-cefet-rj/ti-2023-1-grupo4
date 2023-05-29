import { Router } from 'express';
const LoginController = require("../controllers/LoginController.ts")

const login = Router();

login.post('/', LoginController.login);

export default login;