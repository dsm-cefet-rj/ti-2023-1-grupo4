import { Schema, model, Document } from 'mongoose';

interface User extends Document {
  username: string;
  email: string;
  password: string;
  admin: boolean;

  cep:number;
  rua:string;
  bairro:string;
  numero:number;
  complemento:string;
  cidade:string;
  estado:string;
}

const userSchema = new Schema<User>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: {type: Boolean, required: true, default: false},

  cep:{ type: Number, required: false, unique: false },
  rua:{ type: String, required: false, unique: false },
  bairro:{ type: String, required: false, unique: false },
  numero:{ type: Number, required: false, unique: false },
  complemento:{ type: String, required: false, unique: false },
  cidade:{ type: String, required: false, unique: false },
  estado:{ type: String, required: false, unique: false },
});

const User = model<User>('User', userSchema);

export default User;
