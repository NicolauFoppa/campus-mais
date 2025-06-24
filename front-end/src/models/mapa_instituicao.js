// src/models/MapaInstituicao.js
import { Evento } from './evento';

export class MapaInstituicao {
    constructor(apiData) {
        this.id = apiData._id;
        this.descricao = apiData.descricao;
        this.evento = apiData.evento ? new Evento(apiData.evento) : null;

        // As coordenadas são um array de objetos simples, podemos mantê-las assim.
        this.coordenadas = apiData.coordenadas || [];
    }

    /** Retorna o número de pontos de coordenadas no mapa. */
    getCoordinatesCount() {
        return this.coordenadas.length;
    }
}