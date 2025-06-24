// backend/models/Evento.js
const mongoose = require('mongoose');

const EventoSchema = new mongoose.Schema({
    // O campo "id(NN)(PK)" é automaticamente criado pelo MongoDB como "_id"
    nome: {
        type: String,
        required: [true, 'O nome do evento é obrigatório'],
    },
    data: {
        type: Date,
        required: [true, 'A data do evento é obrigatória'],
    },
    // FK para o Usuário que criou o evento
    criador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Evento', EventoSchema);