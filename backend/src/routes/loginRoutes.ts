import { Router } from 'express';
const LoginController = require("../controllers/LoginController.ts")

const login = Router();

login.post('/signIn', LoginController.login);

export default login;