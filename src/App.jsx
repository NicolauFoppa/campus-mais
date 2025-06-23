// src/App.jsx - VERSÃO REATORADA E LIMPA

import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

// 1. Agora só precisamos importar nosso componente de rotas!
import { AppRoutes } from './routes';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;