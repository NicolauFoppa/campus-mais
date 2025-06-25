
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config({ path: './.env' });

// Conecta ao banco de dados
connectDB();

const app = express();

// Middleware para permitir que o Express entenda JSON no corpo das requisições
app.use(express.json());

app.use(cors());

// --- Monta as Rotas ---
app.use('/api/users', require('./routes/user'));
app.use('/api/disciplinas', require('./routes/disciplinas'));
app.use('/api/solicitacoes', require('./routes/solicitacoes'));
// ... adicione outras rotas aqui no futuro

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Servidor rodando na porta ${PORT}`));