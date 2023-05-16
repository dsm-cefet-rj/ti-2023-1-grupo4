import { Request, Response } from 'express';
import Delivery from '../models/Delivery';

class DeliveryController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { userId, cep, street, neighborhood, number, complement, city, state } = req.body;
      const delivery = new Delivery({ userId, cep, street, neighborhood, number, complement, city, state });
      const newDelivery = await delivery.save();
      return res.status(201).json(newDelivery);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create delivery.' });
    }
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const deliveries = await Delivery.find();
      return res.json(deliveries);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to retrieve deliveries.' });
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const delivery = await Delivery.findById(id);
      if (!delivery) {
        return res.status(404).json({ error: 'Delivery not found.' });
      }
      return res.json(delivery);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to retrieve delivery.' });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { userId, cep, street, neighborhood, number, complement, city, state } = req.body;
      const delivery = await Delivery.findByIdAndUpdate(id, { userId, cep, street, neighborhood, number, complement, city, state }, { new: true });
      if (!delivery) {
        return res.status(404).json({ error: 'Delivery not found.' });
      }
      return res.json(delivery);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update delivery.' });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const delivery = await Delivery.findByIdAndDelete(id);
      if (!delivery) {
        return res.status(404).json({ error: 'Delivery not found.' });
      }
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to delete delivery.' });
    }
  }
}

export default new DeliveryController();
