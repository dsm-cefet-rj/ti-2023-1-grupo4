"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require('bcrypt');
const User_1 = __importDefault(require("../models/User"));
const jwt = require('jsonwebtoken');
class LoginService {
    static async login(email, password) {
        const user = await User_1.default.findOne({ email }).exec();
        if (!user) {
            throw new Error("Usuário inexistente.");
        }
        if (!await bcrypt.compare(password, user.password)) {
            throw new Error("Erro: um dos dados inseridos está incorreto.");
        }
        const token = jwt.sign({
            name: user.username,
            email: user.email,
        }, "c8fc19bb-6b35-43a9-8dba-0e11cfce2729", { expiresIn: "48h" });
        return token;
    }
}
module.exports = LoginService;
