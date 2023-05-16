import { Router } from 'express';
import ItemController from '../controllers/ItemController';

const itemRouter = Router();

itemRouter.post('/item', ItemController.create);
itemRouter.get('/item', ItemController.getAll);
itemRouter.get('/item/:id', ItemController.getById);
itemRouter.put('/item/:id', ItemController.update);
itemRouter.delete('/item/:id', ItemController.delete);

export default itemRouter;
