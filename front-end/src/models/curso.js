// src/models/Curso.js
import { Disciplina } from './disciplina';

export class Curso {
    constructor(apiData) {
        this.id = apiData._id;
        this.codigo = apiData.codigo;
        this.nome = apiData.nome;

        // Se a API retornou as disciplinas populadas, converte cada uma para uma instância de Disciplina
        this.disciplinas = (apiData.disciplinas || []).map(discData => new Disciplina(discData));
    }

    /** Retorna a contagem de disciplinas no curso */
    getDisciplinaCount() {
        return this.disciplinas.length;
    }
}