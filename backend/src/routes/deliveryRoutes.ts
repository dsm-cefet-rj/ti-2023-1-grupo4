import { Router } from 'express';
import DeliveryController from '../controllers/DeliveryController';

const deliveryRouter = Router();

deliveryRouter.post('/delivery', DeliveryController.create);
deliveryRouter.get('/delivery', DeliveryController.getAll);
deliveryRouter.get('/delivery/:id', DeliveryController.getById);
deliveryRouter.put('/delivery/:id', DeliveryController.update);
deliveryRouter.delete('/delivery/:id', DeliveryController.delete);

export default deliveryRouter;
