import React from "react";
import { List } from "../icons/list/list"; // Ajuste o caminho se necessário
import image2 from "../../assets/logo.png";
import "./top_bar.css"; // Importa o CSS local

export const TopBar = () => {
    return (
        <div className="top-bar-container">
            <List className="list-icon" />
            <img className="logo-image" alt="Logo" src={image2} />
            <div className="title-text">CAMPUS+</div>
        </div>
    );
};