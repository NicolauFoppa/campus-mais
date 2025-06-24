// src/screens/home/home_screen.jsx - VERSÃO FINAL COM NAVEGAÇÃO

import React from "react";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../../components/top_bar/top_bar";
import { BottomBar } from "../../components/bottom_bar/bottom_bar";
import { Icon } from "../../components/icons/icon";
import "./home_screen.css";

export const HomeScreen = () => {
    const navigate = useNavigate();

    // Função genérica para navegar para qualquer rota
    const handleCardClick = (path) => {
        navigate(path);
    };

    return (
        <div className="home-screen">
            <div className="div">
                <TopBar />

                <main className="home-content">

                    {/* Exemplo de card sem link por enquanto */}
                    <div className="card" onClick={() => handleCardClick('/matricula')}>
                        <Icon name="book" size={40} />
                        <span className="card-title">Matrícula</span>
                    </div>

                    {/* Card de Solicitações com o evento onClick */}
                    <div className="card" onClick={() => handleCardClick('/solicDoc')}>
                        <Icon name="file" size={40} />
                        <span className="card-title">Solicitações</span>
                    </div>

                    {/* Exemplo de card sem link por enquanto */}
                    <div className="card">
                        <Icon name="dollar" size={40} />
                        <span className="card-title">Financeiro</span>
                    </div>

                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>

                </main>

                <BottomBar />
            </div>
        </div>
    );
};