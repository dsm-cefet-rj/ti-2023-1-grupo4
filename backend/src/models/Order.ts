import { Schema, model, Document } from 'mongoose';

interface Order extends Document {
  user: Schema.Types.ObjectId;
  delivery: Schema.Types.ObjectId;
  itens: Array<{ item: Schema.Types.ObjectId; quantity: number }>;
  paid: boolean;
}

const orderSchema = new Schema<Order>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  delivery: { type: Schema.Types.ObjectId, ref: 'Delivery', required: true },
  itens: [
    {
      item: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
      quantity: { type: Number, required: true }
    }
  ],
  paid: { type: Boolean, default: false }
});

const Order = model<Order>('Order', orderSchema);

export default Order;
