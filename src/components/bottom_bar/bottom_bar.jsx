// src/components/BottomBar/bottom_bar.jsx - VERSÃO CORRIGIDA E COMPLETA

import React from "react";
import { Avatar } from "../icons/avatar/avatar";
import { Icon } from "../icons/icon";
import avatarDefault from "../../assets/avatar.png"; // Importando a imagem padrão para o avatar
import "./bottom_bar.css";

export const BottomBar = () => {
    return (
        <div className="bottom-bar-container">
            <Icon name="home" size={32} />
            <Icon name="book" size={32} /> {/* ÍCONE DO LIVRO ADICIONADO */}
            <Icon name="coffee" size={32} />
            <Avatar initials="NF" size={42} />
        </div>
    );
};