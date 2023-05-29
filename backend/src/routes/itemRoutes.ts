import { Router } from 'express';
import ItemController from '../controllers/ItemController';
import Multer, {memoryStorage} from 'multer';

const storage = memoryStorage();
const Upload = Multer({
  storage
})

const itemRouter = Router();

itemRouter.post('/', Upload.single('file'), ItemController.create);
itemRouter.get('/', ItemController.getAll);
itemRouter.get('/:id', ItemController.getById);
itemRouter.put('/:id', Upload.single('file'), ItemController.update);
itemRouter.delete('/:id', ItemController.delete);

export default itemRouter;
