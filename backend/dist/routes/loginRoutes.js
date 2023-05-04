"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginController = require("../controllers/LoginController.ts");
const login = (0, express_1.Router)();
login.post('/signIn', LoginController.login);
exports.default = login;
