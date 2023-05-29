import { Router } from 'express';
const UserController = require("../controllers/UserController.ts")
const auth = require("../middleware/Auth.ts");

const user = Router();

user.post('/', UserController.createUser);
user.get('/', UserController.getUsers);
user.get('/:id', auth, UserController.findOneUser);
user.put('/:id', auth, UserController.updateUser);
user.delete('/:id',auth, UserController.deleteUser);
  
export default user;
