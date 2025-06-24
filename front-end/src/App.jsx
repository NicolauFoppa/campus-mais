// src/App.jsx - VERSÃO REATORADA E LIMPA

import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

// 1. Agora só precisamos importar nosso componente de rotas!
import { AppRoutes } from './routes';
import { AuthProvider } from './context/auth_context'; // 1. Importe o AuthProvider
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>

        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;