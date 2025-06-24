// src/models/Feedback.js
import { User } from './user';

export class Feedback {
    constructor(apiData) {
        this.id = apiData._id;
        this.descricao = apiData.descricao;
        this.categoria = apiData.categoria;
        this.sugestao = apiData.sugestao;
        this.aluno = apiData.aluno ? new User(apiData.aluno) : null;
        this.createdAt = new Date(apiData.createdAt);
    }
}