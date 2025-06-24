// src/components/BottomBar/bottom_bar.jsx - VERSÃO COM NAVEGAÇÃO

import React from "react";
import { NavLink } from "react-router-dom"; // 1. Importamos o NavLink
import { Avatar } from "../icons/avatar/avatar";
import { Icon } from "../icons/icon";
import "./bottom_bar.css";

export const BottomBar = () => {
    // Note que não precisamos mais da prop avatarImage se estamos usando as iniciais
    return (
        <div className="bottom-bar-container">
            {/* 2. Cada ícone agora é envolvido por um NavLink com uma classe e um destino "to" */}

            <NavLink to="/home" className="bottom-bar-link">
                <Icon name="home" size={32} />
            </NavLink>

            <NavLink to="/matricula" className="bottom-bar-link">
                <Icon name="book" size={32} />
            </NavLink>

            {/* Este ícone ainda não tem uma tela, então o link aponta para a home por enquanto */}
            <NavLink to="/home" className="bottom-bar-link">
                <Icon name="coffee" size={32} />
            </NavLink>

            {/* O avatar também pode ser um link para a tela de perfil */}
            <NavLink to="/home" className="bottom-bar-link">
                <Avatar initials="NF" size={42} />
            </NavLink>
        </div>
    );
};