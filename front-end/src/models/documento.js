// src/models/Documento.js
import { User } from './user';

export class Documento {
    constructor(apiData) {
        this.id = apiData._id;
        this.tipo = apiData.tipo;
        this.dataGeracao = new Date(apiData.dataGeracao);
        this.aluno = apiData.aluno ? new User(apiData.aluno) : null;
    }
}