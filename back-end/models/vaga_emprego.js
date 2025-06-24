// backend/models/VagaEmprego.js
const mongoose = require('mongoose');

const VagaEmpregoSchema = new mongoose.Schema({
    // O campo "id(NN)(PK)" é automaticamente criado pelo MongoDB como "_id"
    nome: {
        type: String,
        required: [true, 'O nome da vaga é obrigatório'],
    },
    carga_horaria: {
        type: Number
    },
    titulo_emprego: {
        type: String,
        required: [true, 'O título do emprego é obrigatório'],
    },
    // FK para Curso
    curso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Curso',
        required: true
    },
    // FK para Empresa (que é um tipo de Usuário)
    empresa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('VagaEmprego', VagaEmpregoSchema);