// src/screens/solic_doc/solic_doc_screen.jsx - VERSÃO CORRIGIDA E FINAL

import React, { useState } from "react";
import { TopBar } from "../../components/top_bar/top_bar";
import { BottomBar } from "../../components/bottom_bar/bottom_bar";
import { Icon } from "../../components/icons/icon";
import toast from "react-hot-toast";
import { DOCUMENT_TYPES } from "../../constants/documents";

// 1. IMPORTAMOS O CSS DA HOME SCREEN PARA REUTILIZAR O LAYOUT!
import "../home/home_screen.css";
// 2. E também importamos o CSS específico desta tela.
import "./solic_doc_screen.css";

export const SolicitarDocScreen = () => {
    const [documentType, setDocumentType] = useState("");
    const [reason, setReason] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!documentType || !reason) {
            toast.error("Por favor, preencha todos os campos.");
            return;
        }
        toast.success("Solicitação enviada com sucesso!");
        setDocumentType("");
        setReason("");
    };

    return (
        // 3. USAMOS AS MESMAS CLASSES DE LAYOUT DA HOME SCREEN
        <div className="screen-layout">
            <div className="screen-container">
                <TopBar />

                {/* O conteúdo principal usa a classe base .screen-content */}
                <main className="screen-content">
                    <form className="solic-doc-form" onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label className="form-label" htmlFor="doc-type">Tipo de Documento:</label>
                            <div className="select-wrapper">
                                <select
                                    id="doc-type"
                                    className="form-select"
                                    value={documentType}
                                    onChange={(e) => setDocumentType(e.target.value)}
                                >
                                    <option value="" disabled>Selecione...</option>

                                    {/* 2. A MÁGICA ACONTECE AQUI! */}
                                    {DOCUMENT_TYPES.map((docType) => (
                                        <option key={docType.id} value={docType.id}>
                                            {docType.label}
                                        </option>
                                    ))}

                                </select>
                                <Icon name="chevronDown" size={20} className="select-arrow" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="reason">Motivo:</label>
                            <textarea
                                id="reason"
                                className="form-textarea"
                                placeholder="Descreva o motivo da sua solicitação..."
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="form-button">
                            Enviar Solicitação
                        </button>
                    </form>
                </main>

                <BottomBar />
            </div>
        </div>
    );
};