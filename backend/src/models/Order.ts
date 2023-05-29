import { Schema, model, Document } from 'mongoose';

export enum EPedidoStatus {
  'Em análise',
  'Preparando',
  'Saiu para a entrega',
  'Entregue'
}

interface IOrder extends Document {
  user: Schema.Types.ObjectId;
  delivery: Schema.Types.ObjectId;
  itens: Array<{ item: Schema.Types.ObjectId; quantity: number }>;
  paid?: boolean;
  status?: String;
}

const orderSchema = new Schema<IOrder>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  delivery: { type: Schema.Types.ObjectId, ref: 'Delivery', required: true },
  itens: [
    {
      item: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
      quantity: { type: Number, required: true }
    }
  ],
  paid: { type: Boolean, default: false },
  status: { type: String, default: EPedidoStatus['Em análise'] }
});

const Order = model<IOrder>('Order', orderSchema);

export default Order;
