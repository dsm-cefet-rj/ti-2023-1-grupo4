import { Router } from 'express';
import ItemController from '../controllers/ItemController';
import Multer, {memoryStorage} from 'multer';

const storage = memoryStorage();
const Upload = Multer({
  storage
})

const itemRouter = Router();

itemRouter.post('/item', Upload.single('file'), ItemController.create);
itemRouter.get('/item', ItemController.getAll);
itemRouter.get('/item/:id', ItemController.getById);
itemRouter.put('/item/:id', Upload.single('file'), ItemController.update);
itemRouter.delete('/item/:id', ItemController.delete);

export default itemRouter;
