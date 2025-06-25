const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    // O campo "id(NN)(PK)" é automaticamente criado pelo MongoDB como "_id"
    descricao: {
        type: String,
        required: [true, 'A descrição é obrigatória'],
    },
    categoria: {
        type: String,
        required: [true, 'A categoria é obrigatória'],
        enum: ['Elogio', 'Sugestão', 'Crítica', 'Outro'] // Exemplo de categorias
    },
    sugestao: {
        type: String
    },
    // FK para Aluno (que é um tipo de Usuário)
    aluno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Feedback', FeedbackSchema);