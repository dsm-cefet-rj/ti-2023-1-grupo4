"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const user = (0, express_1.Router)();
user.get('/', (req, res) => {
    res.send('Hello, World!');
});
user.post('/users', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User_1.default({ username, email, password });
        await user.save();
        res.json(user);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Server error: ' + err.message);
    }
});
user.get('/users', async (req, res) => {
    try {
        const users = await User_1.default.find();
        res.json(users);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
});
user.get('/users/:id', async (req, res) => {
    try {
        const user = await User_1.default.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json(user);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
});
user.put('/users/:id', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User_1.default.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        user.username = username;
        user.email = email;
        user.password = password;
        await user.save();
        res.json(user);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
});
user.delete('/users/:id', async (req, res) => {
    try {
        const user = await User_1.default.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        await user.deleteOne();
        res.json({ msg: 'User removed' });
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Server error: ' + err.message);
    }
});
exports.default = user;
