// src/routes/index.jsx

import { Routes, Route } from "react-router-dom";

//arquivo é responsável por importar as telas
import { LoginScreen } from "../screens/login/login_screen";
import { HomeScreen } from "../screens/home/home_screen";
import { SolicitarDocScreen } from "../screens/solic_doc/solic_doc_screen";
import { MatriculaScreen } from "../screens/matricula/matricula_screen";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/solicDoc" element={<SolicitarDocScreen />} />
            <Route path="/solicDoc" element={<SolicitarDocScreen />} />
            <Route path="/matricula" element={<MatriculaScreen />} />
        </Routes>
    );
};