import { User } from './user';

export class Forum {
    constructor(apiData) {
        this.id = apiData._id;
        this.titulo = apiData.titulo;
        this.descricao = apiData.descricao;
        this.criador = apiData.criador ? new User(apiData.criador) : null;

        this.participantes = (apiData.participantes || []).map(userData => new User(userData));
    }

    getParticipantCount() {
        return this.participantes.length;
    }
}