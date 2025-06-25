// backend/models/User.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    // --- CAMPOS BASE (SEU "Usuario") ---
    // Atende: Usuario.documento(NN)(PK), Usuario.nome(NN), etc.
    documento: {
        type: String,
        required: [true, 'O documento é obrigatório'],
        unique: true,
    },
    nome: {
        type: String,
        required: [true, 'O nome é obrigatório'],
    },
    email: {
        type: String,
        required: [true, 'O e-mail é obrigatório'],
        unique: true,
    },
    senha: {
        type: String,
        required: [true, 'A senha é obrigatória'],
        select: false
    },
    // --- O CAMPO CHAVE QUE DEFINE O "TIPO" DE USUÁRIO ---
    // Atende: Diferenciação entre Aluno, Professor, Secretaria
    nivelAcesso: {
        type: String,
        required: true,
        // A 'empresa' já está aqui na nossa lista de papéis permitidos!
        enum: ['aluno', 'professor', 'secretaria', 'empresa', 'admin']
    },


    disciplinasMatriculadas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Disciplina'
    }],
    // --- FIM DO CAMPO NOVO ---

    disciplinasLecionadas: [{ // Este é apenas para o professor
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Disciplina'
    }],

    // --- CAMPOS ESPECÍFICOS PARA ALUNO E PROFESSOR ---
    // Atende: Aluno.matricula(NN) e Professor.matricula(NN)
    matricula: {
        type: String,
        // Este campo só será obrigatório se o nivelAcesso for 'aluno' OU 'professor'
        required: function () {
            return this.nivelAcesso === 'aluno' || this.nivelAcesso === 'professor';
        }
    },

    // --- CAMPO ESPECÍFICO APENAS PARA ALUNO ---
    // Atende: Aluno.curso_codigo(NN)(FK -> Curso.codigo)
    curso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Curso', // Referência ao modelo 'Curso'
        // Este campo só será obrigatório se o nivelAcesso for 'aluno'
        required: function () { return this.nivelAcesso === 'aluno'; }
    },
    disciplinasLecionadas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Disciplina'
    }],
}, {
    timestamps: true
});

UserSchema.pre('save', async function (next) {
    // Só criptografa a senha se ela foi modificada (ou é nova)
    if (!this.isModified('senha')) {
        next();
    }

    // Gera o "sal" e cria o hash da senha
    const salt = await bcrypt.genSalt(10);
    this.senha = await bcrypt.hash(this.senha, salt);
});

// A coleção no MongoDB será chamada de "users" (Mongoose pluraliza e deixa em minúsculo)
module.exports = mongoose.model('User', UserSchema);