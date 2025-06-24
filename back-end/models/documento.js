// backend/models/Documento.js
const mongoose = require('mongoose');

const DocumentoSchema = new mongoose.Schema({
    // O campo "id(NN)(PK)" é automaticamente criado pelo MongoDB como "_id"
    tipo: {
        type: String,
        required: [true, 'O tipo de documento é obrigatório'],
    },
    data_geracao: {
        type: Date,
        default: Date.now,
        required: true
    },
    // FK para Aluno (que é um tipo de Usuário)
    aluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // No futuro, você poderia adicionar um campo para o conteúdo ou URL do documento
    // conteudo: { type: Buffer }
    // url: { type: String }
});

module.exports = mongoose.model('Documento', DocumentoSchema);