const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Carrega as variáveis de ambiente
dotenv.config({ path: './.env' });

// Importa os modelos
const User = require('./models/users');
const Curso = require('./models/curso');
const Disciplina = require('./models/disciplina');

// Conecta ao DB
mongoose.connect(process.env.MONGO_URI);

// --- DADOS INICIAIS ---

// Definimos os IDs fixos para criar as relações facilmente
const cursoCienciaDaComputacaoId = new mongoose.Types.ObjectId("6679b1a1b2c3d4e5f6a7b8c9");
const adminUserId = new mongoose.Types.ObjectId();
const alunoUserId = new mongoose.Types.ObjectId();
const disciplinaAlgoritmosId = new mongoose.Types.ObjectId(); // <-- ID fixo para a disciplina

const cursos = [
    {
        _id: cursoCienciaDaComputacaoId,
        codigo: 'CC01',
        nome: 'Ciência da Computação',
    }
];

const disciplinas = [
    // Atribuímos o ID fixo à disciplina que queremos usar
    { _id: disciplinaAlgoritmosId, codigo: 'CC101', nome: 'Algoritmos e Estrutura de Dados I' },
    { codigo: 'CC102', nome: 'Cálculo Diferencial e Integral' },
    { codigo: 'CC103', nome: 'Arquitetura de Computadores' },
    { codigo: 'CC201', nome: 'Inteligência Artificial' }
];

const users = [
    {
        _id: adminUserId,
        nome: 'Usuário Teste Admin',
        email: 'teste@teste.com',
        senha: '123456',
        documento: '12345678910',
        nivelAcesso: 'admin',
    },
    {
        _id: alunoUserId,
        nome: 'Aluno Exemplo da Silva',
        email: 'aluno@teste.com',
        senha: '123456',
        documento: '11122233344',
        nivelAcesso: 'aluno',
        matricula: '2025112233',
        curso: cursoCienciaDaComputacaoId,

        //3. Adicionamos o campo com um array contendo a referência da disciplina
        disciplinasMatriculadas: [disciplinaAlgoritmosId]
    }
];

const solicitacoes = [
    {
        aluno: alunoUserId,
        tipo: 'Histórico Escolar Completo',
        motivo: 'Necessário para processo de estágio.',
        status: 'Aprovada'
    },
];

// Função para importar os dados
const importData = async () => {
    try {
        // Limpa dados existentes
        await User.deleteMany();
        await Curso.deleteMany();
        await Disciplina.deleteMany();

        // Insere os novos dados
        await User.create(users);
        await Curso.create(cursos);
        await Disciplina.create(disciplinas);

        console.log('Dados importados com sucesso!');
        process.exit();
    } catch (error) {
        console.error(`Erro: ${error}`);
        process.exit(1);
    }
};

// Função para destruir os dados
const destroyData = async () => {
    try {
        await User.deleteMany();
        await Curso.deleteMany();
        await Disciplina.deleteMany();

        console.log('Dados destruídos com sucesso!');
        process.exit();
    } catch (error) {
        console.error(`Erro: ${error}`);
        process.exit(1);
    }
};

// Lógica para rodar o script via linha de comando
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}