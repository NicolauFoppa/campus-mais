export class Disciplina {
    constructor(apiData) {
        this.id = apiData._id;
        this.codigo = apiData.codigo;
        this.nome = apiData.nome;
        this.professores = apiData.professores || [];
    }
}