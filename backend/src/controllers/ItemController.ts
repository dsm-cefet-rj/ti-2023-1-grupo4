import { Request, Response } from 'express';
import Item from '../models/Item';

class ItemController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, price, quantity } = req.body;
      const item = new Item({ name, price, quantity });
      const newItem = await item.save();
      return res.status(201).json(newItem);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create item.' });
    }
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const items = await Item.find();
      return res.json(items);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to retrieve items.' });
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const item = await Item.findById(id);
      if (!item) {
        return res.status(404).json({ error: 'Item not found.' });
      }
      return res.json(item);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to retrieve item.' });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { name, price, quantity } = req.body;
      const item = await Item.findByIdAndUpdate(id, { name, price, quantity }, { new: true });
      if (!item) {
        return res.status(404).json({ error: 'Item not found.' });
      }
      return res.json(item);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update item.' });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const item = await Item.findByIdAndDelete(id);
      if (!item) {
        return res.status(404).json({ error: 'Item not found.' });
      }
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to delete item.' });
    }
  }
}

export default new ItemController();
