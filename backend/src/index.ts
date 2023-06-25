import 'dotenv/config';

import express, { Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes';
import cookieParser from 'cookie-parser';

// Configuração do servidor
const app: Application = express();
app.use(cors({
  origin:'http://localhost:3000',
  credentials:true
}));

app.use(cookieParser(process.env.JWT_KEY));
app.use(express.json());

// Conexão com o banco de dados

mongoose.connect(process.env.MONGO_URI || '').then(() => console.log('MongoDB Atlas connected'))
  .catch((err) => console.log(`MongoDB Atlas connection error: ${err}`));

app.use(router)

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));