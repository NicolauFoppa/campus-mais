import { Evento } from './evento';

export class MapaInstituicao {
    constructor(apiData) {
        this.id = apiData._id;
        this.descricao = apiData.descricao;
        this.evento = apiData.evento ? new Evento(apiData.evento) : null;

        this.coordenadas = apiData.coordenadas || [];
    }

    getCoordinatesCount() {
        return this.coordenadas.length;
    }
}