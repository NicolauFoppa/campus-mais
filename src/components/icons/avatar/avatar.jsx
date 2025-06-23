// src/components/icons/Avatar.jsx

import React from "react";
import "./avatar.css"; // Importa nossos estilos

// Uma pequena função para gerar uma cor de fundo com base nas iniciais.
// Assim, "NF" sempre terá a mesma cor, "JS" terá outra, etc.
const generateColor = (text) => {
    const colors = [
        '#ef4444', '#f97316', '#eab308', '#84cc16', '#22c55e',
        '#14b8a6', '#06b6d4', '#3b82f6', '#8b5cf6', '#d946ef'
    ];
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash % colors.length);
    return colors[index];
};


export const Avatar = ({ src, initials, size = 42, className }) => {
    // Definimos um objeto de estilo para controlar o tamanho dinamicamente
    const style = {
        width: `${size}px`,
        height: `${size}px`,
        // A fonte será metade do tamanho do avatar, para um bom visual
        fontSize: `${size / 2}px`,
    };

    // Lógica de Renderização Condicional
    if (initials) {
        // Se recebemos as iniciais...

        // Adicionamos a cor de fundo gerada ao nosso estilo
        style.backgroundColor = generateColor(initials);

        return (
            <div
                className={`avatar-container ${className || ''}`}
                style={style}
            >
                {/* Mostramos as duas primeiras letras das iniciais */}
                <span>{initials.substring(0, 2)}</span>
            </div>
        );
    } else if (src) {
        // Se recebemos uma imagem...
        return (
            <div
                className={`avatar-container ${className || ''}`}
                style={style}
            >
                <img src={src} alt="Avatar" className="avatar-image" />
            </div>
        );
    } else {
        // Se não recebermos nada, podemos mostrar um avatar padrão (opcional)
        // Por enquanto, vamos retornar um círculo simples
        return (
            <div
                className={`avatar-container ${className || ''}`}
                style={style}
            />
        );
    }
};