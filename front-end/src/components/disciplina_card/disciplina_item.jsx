// src/components/DisciplinaItem/DisciplinaItem.jsx

import React from 'react';
import { Icon } from '../icons/icon';
import './disciplina_item.css';

export const DisciplinaItem = ({ disciplina, isOpen, onClick }) => {

    const handleSairClick = (e) => {
        // Impede que o clique no botão feche o acordeão
        e.stopPropagation();
        alert(`Você saiu da disciplina: ${disciplina.nome}`);
        // No futuro, aqui iria a lógica para chamar a API de cancelamento de matrícula
    };

    return (
        <div className="disciplina-item">
            <div className="disciplina-header" onClick={onClick}>
                <span>{disciplina.nome}</span>
                {/* A classe 'open' será adicionada quando o item estiver aberto para girar a seta */}
                <Icon name="chevronDown" size={24} className={`disciplina-chevron ${isOpen ? 'open' : ''}`} />
            </div>
            {/* O conteúdo só é renderizado se 'isOpen' for verdadeiro */}
            <div className={`disciplina-content ${isOpen ? 'open' : ''}`}>
                <div className="disciplina-details">
                    <p><strong>Professor(a):</strong> {disciplina.professor}</p>
                    <p><strong>Código:</strong> {disciplina.codigo}</p>
                    <p><strong>Créditos:</strong> {disciplina.creditos}</p>
                </div>
                <button className="sair-button" onClick={handleSairClick}>Sair</button>
            </div>
        </div>
    );
};