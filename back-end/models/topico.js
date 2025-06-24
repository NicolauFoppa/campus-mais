// backend/models/Topic.js
const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
    // O campo "id(NN)(PK)" é automaticamente criado pelo MongoDB como "_id"
    titulo: { // Corresponde ao seu campo "topico(NN)"
        type: String,
        required: [true, 'O título do tópico é obrigatório'],
        trim: true
    },
    // FK para o Fórum ao qual este tópico pertence
    forum: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Forum',
        required: true
    },
    criador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Topic', TopicSchema);