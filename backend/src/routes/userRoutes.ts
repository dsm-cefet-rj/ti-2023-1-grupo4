import { Router } from 'express';
const UserController = require("../controllers/UserController.ts")
const auth = require("../middleware/Auth.ts");

const user = Router();

user.post('/users', UserController.createUser);
user.get('/users', UserController.getUsers);
user.get('/users/:id', auth, UserController.findOneUser);
user.put('/users/:id', auth, UserController.updateUser);
user.delete('/users/:id',auth, UserController.deleteUser);
  
export default user;
