import { Schema, model, Document } from 'mongoose';

interface User extends Document {
  username: string;
  email: string;
  password: string;
  admin: boolean;
}

const userSchema = new Schema<User>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: {type: Boolean, required: true, default: false}
});

const User = model<User>('User', userSchema);

export default User;
