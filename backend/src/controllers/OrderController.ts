import { Request, Response } from 'express';
import Order from '../models/Order';

class OrderController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { user, delivery, items, paid } = req.body;
      const order = new Order({ user, delivery, items, paid });
      const newOrder = await order.save();
      return res.status(201).json(newOrder);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create order.' });
    }
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const orders = await Order.find().populate('user delivery items.item');
      return res.json(orders);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to retrieve orders.' });
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const order = await Order.findById(id).populate('user delivery items.item');
      if (!order) {
        return res.status(404).json({ error: 'Order not found.' });
      }
      return res.json(order);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to retrieve order.' });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { user, delivery, items, paid } = req.body;
      const order = await Order.findByIdAndUpdate(id, { user, delivery, items, paid }, { new: true }).populate('user delivery items.item');
      if (!order) {
        return res.status(404).json({ error: 'Order not found.' });
      }
      return res.json(order);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update order.' });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const order = await Order.findByIdAndDelete(id);
      if (!order) {
        return res.status(404).json({ error: 'Order not found.' });
      }
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to delete order.' });
    }
  }
}

export default new OrderController();
