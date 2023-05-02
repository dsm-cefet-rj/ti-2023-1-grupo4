import express, { Application, Router, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { readdirSync } from 'fs';
import path from 'path';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Configuração do servidor
const app: Application = express();
app.use(cors());
app.use(express.json());

// Conexão com o banco de dados

mongoose.connect(process.env.MONGO_URI || '').then(() => console.log('MongoDB Atlas connected'))
  .catch((err) => console.log(`MongoDB Atlas connection error: ${err}`));


// Rotas
const routesPath = path.join(__dirname, 'Routes');

// ler todos os arquivos na pasta Routes
const routeFiles = readdirSync(routesPath);

// criar uma instância do Router do express
const router = Router();

// adicionar todas as rotas presentes nos arquivos encontrados
routeFiles.forEach((file) => {
  const route = require(`./Routes/${file}`).default;
  router.use(route);
});

// adicionar o router ao app
app.use(router);

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));