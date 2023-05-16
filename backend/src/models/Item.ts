import { Schema, model, Document } from 'mongoose';

interface Item extends Document {
  name: string;
  price: number;
  quantity: number;
}

const itemSchema = new Schema<Item>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

const Item = model<Item>('Item', itemSchema);

export default Item;