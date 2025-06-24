// backend/index.js - VERSÃO CORRETA E FINAL

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // 1. Garanta que o 'cors' está sendo importado
const connectDB = require('./config/db');

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config({ path: './.env' });

// Conecta ao banco de dados
connectDB();

const app = express();

// --- MIDDLEWARES ---
// Esta seção é executada para TODA requisição que chega

// Middleware para permitir que o Express entenda JSON no corpo das requisições
app.use(express.json());

// Middleware do CORS: Adiciona os cabeçalhos de permissão à resposta
// ESSA É A LINHA QUE RESOLVE O SEU PROBLEMA. ELA DEVE VIR ANTES DAS ROTAS.
app.use(cors());

// --- Monta as Rotas ---
// Só depois de configurar os middlewares acima, nós registramos as rotas da API
app.use('/api/users', require('./routes/user'));
app.use('/api/disciplinas', require('./routes/disciplinas'));
app.use('/api/solicitacoes', require('./routes/solicitacoes'));
// ... adicione outras rotas aqui no futuro

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Servidor rodando na porta ${PORT}`));