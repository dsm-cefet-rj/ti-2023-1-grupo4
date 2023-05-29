import { Router } from 'express';
import DeliveryController from '../controllers/DeliveryController';

const deliveryRouter = Router();

deliveryRouter.post('/', DeliveryController.create);
deliveryRouter.get('/', DeliveryController.getAll);
deliveryRouter.get('/:id', DeliveryController.getById);
deliveryRouter.put('/:id', DeliveryController.update);
deliveryRouter.delete('/:id', DeliveryController.delete);

export default deliveryRouter;
