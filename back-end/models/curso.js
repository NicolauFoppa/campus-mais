// backend/models/Curso.js
const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: [true, 'O código do curso é obrigatório'],
        unique: true,
        trim: true
    },
    nome: {
        type: String,
        required: [true, 'O nome do curso é obrigatório'],
        trim: true
    },

    disciplinas: [{

        type: mongoose.Schema.Types.ObjectId,

        ref: 'Disciplina'
    }]
}, { timestamps: true });

module.exports = mongoose.model('Curso', CursoSchema);