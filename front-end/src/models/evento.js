// src/models/Evento.js
import { User } from './user';

export class Evento {
    constructor(apiData) {
        this.id = apiData._id;
        this.nome = apiData.nome;
        this.data = new Date(apiData.data);
        this.criador = apiData.criador ? new User(apiData.criador) : null;
    }

    /**
     * Formata a data do evento para o padrão brasileiro.
     * @returns {string} - Ex: "25/12/2025"
     */
    getFormattedDate() {
        return this.data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    }

    /**
     * Verifica se o evento já aconteceu.
     * @returns {boolean}
     */
    isPastEvent() {
        return this.data < new Date();
    }
}