"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loginService = require("../services/loginService.ts");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
class LoginController {
    static async login(req, res) {
        const { email, password } = req.body;
        try {
            const token = await loginService.login(email, password); // gera um token de acesso.
            return res.status(200).json({ "token": token }); // retorno do token
        }
        catch (error) {
            return res.status(404).json({ "error": error.message });
        }
    }
}
module.exports = LoginController;
