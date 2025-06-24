// src/models/Forum.js
import { User } from './user';

export class Forum {
    constructor(apiData) {
        this.id = apiData._id;
        this.titulo = apiData.titulo;
        this.descricao = apiData.descricao;
        this.criador = apiData.criador ? new User(apiData.criador) : null;

        // Se a API retornar os participantes populados, converte cada um para uma instância de User
        this.participantes = (apiData.participantes || []).map(userData => new User(userData));
    }

    /** Retorna o número de participantes no fórum */
    getParticipantCount() {
        return this.participantes.length;
    }
}