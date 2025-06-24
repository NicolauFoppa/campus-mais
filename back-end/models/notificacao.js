// backend/models/Notificacao.js
const mongoose = require('mongoose');

const NotificacaoSchema = new mongoose.Schema({
    // O campo "id(NN)(PK)" é automaticamente criado pelo MongoDB como "_id"
    remetente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    destinatario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    mensagem: {
        type: String,
        required: [true, 'A mensagem é obrigatória']
    },
    lida: {
        type: Boolean,
        default: false // Uma notificação começa como "não lida"
    },
    dataEnvio: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Notificacao', NotificacaoSchema);