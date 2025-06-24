// routes/disciplinas.js
const express = require('express');
const router = express.Router();
const Disciplina = require('../models/disciplina'); // Importa nosso modelo

// @desc    Buscar todas as disciplinas
// @route   GET /api/disciplinas
router.get('/', async (req, res) => {
    try {
        const disciplinas = await Disciplina.find();
        res.status(200).json({ success: true, count: disciplinas.length, data: disciplinas });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Erro de Servidor' });
    }
});

// @desc    Criar uma nova disciplina
// @route   POST /api/disciplinas
router.post('/', async (req, res) => {
    try {
        const disciplina = await Disciplina.create(req.body);
        res.status(201).json({ success: true, data: disciplina });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

module.exports = router;