// frontend/src/services/api.js
// ... outras funções como fetchDisciplinas ...

import { Disciplina } from '../models/disciplina';

const BASE_URL = 'http://localhost:5000/api';

export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials) // Ele envia o objeto que recebeu
        });

        const data = await response.json();

        if (!response.ok) {
            // Se a API retornou um erro (ex: 401), lança o erro para o componente tratar
            throw new Error(data.error || 'Falha no login');
        }

        return data; // Retorna { success: true, token: "..." }
    } catch (error) {
        // Relança o erro para que o componente saiba que a chamada falhou
        throw error;
    }
};

export const getMe = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/users/me`, {
            method: 'GET',
            headers: {
                // Este cabeçalho é essencial para rotas protegidas
                // Ele envia o token para o backend para verificação
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            // Se o token for inválido, o backend retornará um erro (ex: 401 Unauthorized)
            throw new Error('Sessão inválida ou expirada');
        }

        return await response.json();

    } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        // Relança o erro para que o AuthContext possa tratá-lo (ex: limpar o token inválido)
        throw error;
    }
};

export const fetchDisciplinasDoCurso = async (cursoId) => {
    const response = await fetch(`${BASE_URL}/disciplinas`, { method: 'GET' });
    if (!response.ok) throw new Error('Falha ao buscar disciplinas do curso');
    const data = await response.json();
    // Supondo que a API retorna os dados dentro de uma chave "data"
    return data.data.map(d => new Disciplina(d)); // Converte a classe disciplina
};

// Envia a lista de disciplinas selecionadas para o backend
export const matricularAluno = async (alunoId, disciplinaIds) => {
    const response = await fetch(`${BASE_URL}/users/${alunoId}/matricular`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ disciplinaIds })
    });
    if (!response.ok) throw new Error('Falha ao realizar matrícula');
    return await response.json();
};

// frontend/src/services/api.js
// ...

// Busca todas as disciplinas
export const fetchAllDisciplinas = async () => {

    const response = await fetch(`${BASE_URL}/disciplinas`, { method: 'GET' });
    if (!response.ok) throw new Error('Falha ao buscar disciplinas');
    const data = await response.json();
    return data.data.map(d => new Disciplina(d));
};

// Matricula o aluno em uma disciplina
export const matricularDisciplina = async (alunoId, disciplinaId) => {
    const response = await fetch(`${BASE_URL}/users/${alunoId}/disciplinas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ disciplinaId })
    });
    if (!response.ok) throw new Error('Falha ao matricular');
    return await response.json();
};

// Cancela a matrícula do aluno em uma disciplina
export const cancelarMatricula = async (alunoId, disciplinaId) => {
    const response = await fetch(`${BASE_URL}/users/${alunoId}/disciplinas/${disciplinaId}`, {
        method: 'DELETE'
    });
    if (!response.ok) throw new Error('Falha ao cancelar matrícula');
    return await response.json();
};