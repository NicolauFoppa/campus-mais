// backend/routes/solicitacoes.js
const express = require('express');
const router = express.Router();
const Solicitacao = require('../models/solicitacao');
const mongoose = require('mongoose');

// @desc    Criar uma nova solicitação
// @route   POST /api/solicitacoes
router.post('/', async (req, res) => {
    try {

        const { tipo, motivo } = req.body;
        // Utilizamos um idFixo para os testes
        const alunoIdFixo = new mongoose.Types.ObjectId("6679b3a1b2c3d4e5f6a7b8d0"); // Verifique se este ID corresponde ao do seu seeder

        if (!tipo || !motivo) {
            return res.status(400).json({ success: false, error: 'Por favor, forneça o tipo e o motivo.' });
        }

        const novaSolicitacao = await Solicitacao.create({
            tipo,
            motivo,
            aluno: alunoIdFixo,
            status: 'Pendente'
        });

        // Envia uma resposta de sucesso para o frontend
        res.status(201).json({ success: true, data: novaSolicitacao });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Erro de Servidor' });
    }
});

module.exports = router;