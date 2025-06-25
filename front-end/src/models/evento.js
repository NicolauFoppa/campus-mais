import { User } from './user';

export class Evento {
    constructor(apiData) {
        this.id = apiData._id;
        this.nome = apiData.nome;
        this.data = new Date(apiData.data);
        this.criador = apiData.criador ? new User(apiData.criador) : null;
    }

    getFormattedDate() {
        return this.data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    }

    isPastEvent() {
        return this.data < new Date();
    }
}