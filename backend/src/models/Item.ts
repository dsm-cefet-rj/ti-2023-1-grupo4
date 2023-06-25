import { Schema, model, Document } from 'mongoose';

interface Item extends Document {
  name: string;
  price: number;
  quantity: number;
  itens: string[];
  file:Buffer;
  type: string;
}

const itemSchema = new Schema<Item>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  type: { type: String, required: true },
  itens:{ type: [String], required: false },
  file: { type: Buffer, required: false },
});

const Item = model<Item>('Item', itemSchema);

export default Item;