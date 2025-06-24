// backend/models/Disciplina.js
const mongoose = require('mongoose');

const DisciplinaSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: [true, 'O código da disciplina é obrigatório'],
        unique: true,
        trim: true
    },
    nome: {
        type: String,
        required: [true, 'O nome da disciplina é obrigatório'],
        trim: true
    },
    professores: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Referencia um usuário com nivelAcesso 'professor'
    }]

}, { timestamps: true });

module.exports = mongoose.model('Disciplina', DisciplinaSchema);