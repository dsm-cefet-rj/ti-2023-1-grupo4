"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
// Carrega as variáveis de ambiente do arquivo .env
dotenv_1.default.config();
// Configuração do servidor
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Conexão com o banco de dados
mongoose_1.default.connect(process.env.MONGO_URI || '').then(() => console.log('MongoDB Atlas connected'))
    .catch((err) => console.log(`MongoDB Atlas connection error: ${err}`));
// Rotas
const routesPath = path_1.default.join(__dirname, 'Routes');
// ler todos os arquivos na pasta Routes
const routeFiles = (0, fs_1.readdirSync)(routesPath);
// criar uma instância do Router do express
const router = (0, express_1.Router)();
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
