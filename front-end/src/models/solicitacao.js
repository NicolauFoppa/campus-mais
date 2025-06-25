import { User } from './user';

export class Solicitacao {
    constructor(apiData) {
        this.id = apiData._id;
        this.tipo = apiData.tipo;
        this.motivo = apiData.motivo;
        this.status = apiData.status;
        this.aluno = apiData.aluno ? new User(apiData.aluno) : null;
        this.createdAt = new Date(apiData.createdAt);
    }

    getFormattedDate() {
        return this.createdAt.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    getStatusColor() {
        switch (this.status) {
            case 'Aprovada': return 'green';
            case 'Rejeitada': return 'red';
            case 'Em Análise': return 'orange';
            case 'Pendente':
            default: return 'gray';
        }
    }
}