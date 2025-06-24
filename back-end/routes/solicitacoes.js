// backend/routes/solicitacoes.js
const express = require('express');
const router = express.Router();
const Solicitacao = require('../models/solicitacao');
const mongoose = require('mongoose'); // Precisaremos do Mongoose aqui

// @desc    Criar uma nova solicitação
// @route   POST /api/solicitacoes
router.post('/', async (req, res) => {
    try {
        // 1. Pegamos os dados que o frontend enviou no corpo (body) da requisição
        const { tipo, motivo } = req.body;

        // --- NOTA IMPORTANTE SOBRE AUTENTICAÇÃO ---
        // No futuro, o ID do aluno viria de um usuário logado (ex: req.user.id).
        // Como ainda não temos login, vamos usar o ID fixo do nosso "Aluno Exemplo"
        // que criamos no seeder para fazer o teste funcionar.
        const alunoIdFixo = new mongoose.Types.ObjectId("6679b3a1b2c3d4e5f6a7b8d0"); // Verifique se este ID corresponde ao do seu seeder

        if (!tipo || !motivo) {
            return res.status(400).json({ success: false, error: 'Por favor, forneça o tipo e o motivo.' });
        }

        // 2. Criamos o novo documento de solicitação no banco de dados
        const novaSolicitacao = await Solicitacao.create({
            tipo,
            motivo, // Supondo que você queira salvar o motivo também
            aluno: alunoIdFixo,
            status: 'Pendente' // O status inicial é sempre pendente
        });

        // 3. Enviamos uma resposta de sucesso para o frontend
        res.status(201).json({ success: true, data: novaSolicitacao });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Erro de Servidor' });
    }
});

module.exports = router;