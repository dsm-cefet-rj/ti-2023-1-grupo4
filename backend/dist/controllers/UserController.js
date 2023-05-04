"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const bcrypt = require("bcrypt");
class UserController {
    static async createUser(req, res) {
        try {
            const { username, email, password } = req.body;
            const hash = await bcrypt.hash(password, 10);
            const user = new User_1.default({ username, email, password: hash });
            await user.save();
            res.json(user);
        }
        catch (err) {
            console.log(err);
            res.status(500).send('Server error: ' + err.message);
        }
    }
    static async getUsers(req, res) {
        try {
            const users = await User_1.default.find();
            res.json(users);
        }
        catch (err) {
            console.log(err);
            res.status(500).send('Server error');
        }
    }
    static async findOneUser(req, res) {
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
    }
    static async deleteUser(req, res) {
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
    }
    static async updateUser(req, res) {
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
    }
}
module.exports = UserController;
