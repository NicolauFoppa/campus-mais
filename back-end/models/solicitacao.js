// backend/models/Solicitacao.js

const mongoose = require('mongoose');

const SolicitacaoSchema = new mongoose.Schema({
    tipo: {
        type: String,
        required: [true, 'O tipo de solicitação é obrigatório'],
    },

    motivo: {
        type: String,
        required: [true, 'O motivo da solicitação é obrigatório'],
        trim: true // Remove espaços em branco do início e do fim
    },

    status: {
        type: String,
        required: true,
        enum: ['Pendente', 'Em Análise', 'Aprovada', 'Rejeitada'],
        default: 'Pendente'
    },
    aluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Solicitacao', SolicitacaoSchema);