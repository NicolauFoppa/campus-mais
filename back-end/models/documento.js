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
    aluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

module.exports = mongoose.model('Documento', DocumentoSchema);