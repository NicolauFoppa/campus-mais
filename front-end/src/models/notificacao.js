// src/models/Notificacao.js
import { User } from './user';

export class Notificacao {
    constructor(apiData) {
        this.id = apiData._id;
        this.remetente = apiData.remetente ? new User(apiData.remetente) : null;
        this.destinatario = apiData.destinatario ? new User(apiData.destinatario) : null;
        this.mensagem = apiData.mensagem;
        this.lida = apiData.lida || false;
        this.dataEnvio = new Date(apiData.dataEnvio);
    }

    /**
     * Formata a data e hora de envio para o padrão brasileiro.
     * @returns {string} - Ex: "25/12/2025 14:30"
     */
    getFormattedTimestamp() {
        return this.dataEnvio.toLocaleString('pt-BR', { timeZone: 'UTC' });
    }
}