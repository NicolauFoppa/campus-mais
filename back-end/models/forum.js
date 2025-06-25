const mongoose = require('mongoose');

const ForumSchema = new mongoose.Schema({
    // O campo "id(NN)(PK)" é automaticamente criado pelo MongoDB como "_id"
    titulo: {
        type: String,
        required: [true, 'O título do fórum é obrigatório'],
        trim: true
    },
    descricao: {
        type: String,
        required: [true, 'A descrição é obrigatória']
    },
    criador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencia o usuário que criou o fórum
        required: true
    },
    participantes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Um array de referências para todos os usuários participantes
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Forum', ForumSchema);