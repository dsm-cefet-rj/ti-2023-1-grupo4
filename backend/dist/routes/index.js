"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes_1 = __importDefault(require("./userRoutes"));
const loginRoutes_1 = __importDefault(require("./loginRoutes"));
const router = (0, express_1.Router)();
router.use('/', userRoutes_1.default, loginRoutes_1.default);
exports.default = router;
