import { Router } from 'express';
import { Authenticate } from '@app/middleware/Auth';
import UserController from "../controllers/UserController";

const user = Router();

user.post('/', UserController.createUser);
user.get('/', UserController.getUsers);
user.get('/:id', Authenticate, UserController.findOneUser);
user.put('/:id', Authenticate, UserController.updateUser);
user.delete('/:id',Authenticate, UserController.deleteUser);
  
export default user;
