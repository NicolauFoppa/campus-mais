// backend/models/MapaInstituicao.js
const mongoose = require('mongoose');

// Este é um "sub-schema" que define a estrutura de cada coordenada.
// Ele não se tornará um modelo, apenas será usado dentro do MapaInstituicaoSchema.
const CoordenadaSchema = new mongoose.Schema({
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    descricao: {
        type: String
    }
}, { _id: false }); // Não precisamos de um _id para cada coordenada embutida


const MapaInstituicaoSchema = new mongoose.Schema({
    // O campo "id(NN)(PK)" é automaticamente criado pelo MongoDB como "_id"
    descricao: {
        type: String,
        required: [true, 'A descrição do mapa é obrigatória'],
    },
    // FK para o Evento ao qual este mapa pode estar associado
    evento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Evento'
    },
    // Aqui está a mágica: um array de documentos que seguem o CoordenadaSchema
    coordenadas: [CoordenadaSchema]
});

module.exports = mongoose.model('MapaInstituicao', MapaInstituicaoSchema);