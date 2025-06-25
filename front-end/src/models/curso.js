import { Disciplina } from './disciplina';
export class Curso {
    constructor(apiData) {
        this.id = apiData._id;
        this.codigo = apiData.codigo;
        this.nome = apiData.nome;

        this.disciplinas = (apiData.disciplinas || []).map(discData => new Disciplina(discData));
    }

    getDisciplinaCount() {
        return this.disciplinas.length;
    }
}