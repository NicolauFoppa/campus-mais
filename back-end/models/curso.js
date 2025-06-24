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

    // AQUI ESTÁ A IMPLEMENTAÇÃO DA SUA TABELA Curso_Disciplina
    disciplinas: [{ // 1. É um array, pois um curso pode ter VÁRIAS disciplinas

        type: mongoose.Schema.Types.ObjectId, // 2. Cada item no array é um ID de um documento MongoDB

        ref: 'Disciplina' // 3. ESSENCIAL: Diz ao Mongoose que estes IDs se referem a documentos no modelo 'Disciplina'
    }]
}, { timestamps: true });

module.exports = mongoose.model('Curso', CursoSchema);