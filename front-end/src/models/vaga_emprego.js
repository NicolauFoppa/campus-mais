// src/models/VagaEmprego.js
import { User } from './user';
import { Curso } from './curso';

export class VagaEmprego {
    constructor(apiData) {
        this.id = apiData._id;
        this.nome = apiData.nome;
        this.cargaHoraria = apiData.cargaHoraria;
        this.tituloEmprego = apiData.tituloEmprego;
        this.curso = apiData.curso ? new Curso(apiData.curso) : null;
        this.empresa = apiData.empresa ? new User(apiData.empresa) : null;
    }
}