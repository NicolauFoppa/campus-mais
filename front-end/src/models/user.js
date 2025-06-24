// src/models/User.js

export class User {
    constructor(apiData) {
        this.id = apiData._id;
        this.documento = apiData.documento;
        this.nome = apiData.nome;
        this.email = apiData.email;
        this.nivelAcesso = apiData.nivelAcesso;
        this.matricula = apiData.matricula || null;
        this.curso = apiData.curso ? (typeof apiData.curso === 'object' ? new Curso(apiData.curso) : apiData.curso) : null;

        // LINHA FALTANTE ADICIONADA AQUI
        // Garante que disciplinasMatriculadas seja um array, mesmo que a API não o envie
        this.disciplinasMatriculadas = apiData.disciplinasMatriculadas || [];

        this.disciplinasLecionadas = apiData.disciplinasLecionadas || [];
    }

    /** Retorna as iniciais do nome do usuário. Ex: "Nicolau Foppa" -> "NF" */
    getInitials() {
        if (!this.nome) return '?';
        const parts = this.nome.split(' ');
        const initials = parts.map(part => part[0]).join('').toUpperCase();
        return initials.substring(0, 2);
    }

    /** Verifica se o usuário é de um determinado tipo */
    isRole(roleName) {
        return this.nivelAcesso === roleName;
    }
}