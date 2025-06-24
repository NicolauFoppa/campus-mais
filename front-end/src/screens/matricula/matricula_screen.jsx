// frontend/src/screens/matricula/MatriculaScreen.jsx

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/auth_context';
import toast from 'react-hot-toast';
import { fetchAllDisciplinas, matricularDisciplina, cancelarMatricula } from '../../services/api';
import { User } from '../../models/user';

import { TopBar } from "../../components/top_bar/top_bar";
import { BottomBar } from "../../components/bottom_bar/bottom_bar";
import { Loading } from "../../components/loading/loading";
import "../home/home_screen.css";
import "./matricula_screen.css";

export const MatriculaScreen = () => {
    const { user, setUser } = useAuth(); // Pegamos o usuário E a função para atualizá-lo

    const [todasDisciplinas, setTodasDisciplinas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 1. Damos um nome à nossa função async para ficar mais claro
        const carregarDisciplinas = async () => {
            try {
                const disciplinas = await fetchAllDisciplinas();
                setTodasDisciplinas(disciplinas);
            } catch (error) {
                console.error("Erro no fetchAllDisciplinas:", error); // É bom logar o erro para depuração
                toast.error("Não foi possível carregar as disciplinas.");
            } finally {
                // Este bloco será executado com sucesso ou com erro, garantindo que o loading termine
                setLoading(false);
            }
        };

        // 2. AQUI ESTÁ A LINHA QUE FALTAVA: nós executamos a função que acabamos de criar!
        carregarDisciplinas();

    }, []);

    const handleActionClick = async (disciplinaId, isMatriculado) => {
        const actionToast = toast.loading(isMatriculado ? 'Cancelando...' : 'Realizando matrícula...');
        try {
            let response;
            if (isMatriculado) {
                response = await cancelarMatricula(user.id, disciplinaId);
            } else {
                response = await matricularDisciplina(user.id, disciplinaId);
            }

            // Atualiza o estado global do usuário com os dados retornados pela API
            setUser(new User(response.data));
            toast.dismiss(actionToast);
            toast.success(isMatriculado ? 'Matrícula cancelada!' : 'Matrícula realizada com sucesso!');

        } catch (error) {
            toast.dismiss(actionToast);
            toast.error('Ocorreu um erro.');
        }
    };

    if (loading || !user) {
        return <div className="screen-layout"><div className="screen-container"><Loading message="Carregando..." /></div></div>;
    }

    return (
        <div className="screen-layout">
            <div className="screen-container">
                <TopBar />
                <main className="screen-content">
                    <div className="disciplinas-list-actions">
                        {todasDisciplinas.map(disciplina => {
                            // Verifica se o ID da disciplina está no array de matrículas do usuário
                            const isMatriculado = user.disciplinasMatriculadas.includes(disciplina.id);

                            return (
                                <div key={disciplina.id} className="disciplina-action-item">
                                    <div className="disciplina-info">
                                        <strong>{disciplina.nome}</strong>
                                        <span>{disciplina.codigo}</span>
                                    </div>
                                    <button
                                        onClick={() => handleActionClick(disciplina.id, isMatriculado)}
                                        className={isMatriculado ? 'btn-cancelar' : 'btn-matricular'}
                                    >
                                        {isMatriculado ? 'Cancelar' : 'Matricular'}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </main>
                <BottomBar />
            </div>
        </div>
    );
};