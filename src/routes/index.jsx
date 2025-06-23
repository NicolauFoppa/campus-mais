// src/routes/index.jsx

import { Routes, Route } from "react-router-dom";

// 1. Este arquivo agora é o responsável por importar as telas
import { LoginScreen } from "../screens/login/login_screen";
import { HomeScreen } from "../screens/home/home_screen";
import { SolicitarDocScreen } from "../screens/solic_doc/solic_doc_screen";
// No futuro, importe outras telas aqui:
// import { SolicitarDocScreen } from "../screens/solicitar-doc/SolicitarDocScreen";

// 2. Criamos um componente que contém TODAS as nossas rotas
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/solicDoc" element={<SolicitarDocScreen />} />
        </Routes>
    );
};