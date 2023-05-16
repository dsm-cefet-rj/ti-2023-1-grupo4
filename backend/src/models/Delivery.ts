import { Schema, model, Document } from 'mongoose';

interface Delivery extends Document {
  userId: Schema.Types.ObjectId;
  cep: string;
  street: string;
  neighborhood: string;
  number: string;
  complement?: string;
  city: string;
  state: string;
}

const deliverySchema = new Schema<Delivery>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  cep: { type: String, required: true },
  street: { type: String, required: true },
  neighborhood: { type: String, required: true },
  number: { type: String, required: true },
  complement: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true }
});

const Delivery = model<Delivery>('Delivery', deliverySchema);

export default Delivery;
