// src/screens/login/login_screen.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Importe o useNavigate
import toast from 'react-hot-toast';
import image1 from "../../assets/logo.png";
import "./login_screen.css";

export const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // 2. Chame o hook para obter a função navigate

    const mailtoEsqueciSenha = `mailto:auth@ucs.br?subject=${encodeURIComponent("Solicitação de Redefinição de Senha")}&body=${encodeURIComponent("Olá, gostaria de solicitar a redefinição da minha senha. Meu e-mail de cadastro é: ")}`;
    const mailtoNovoCadastro = `mailto:auth@ucs.br?subject=${encodeURIComponent("Solicitação de Novo Cadastro")}&body=${encodeURIComponent("Olá, gostaria de solicitar a criação de uma nova conta de acesso.")}`;

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === 'teste@teste.com' && password === '123456') {
            toast.success('Login realizado com sucesso!');
            console.log("Login SUCESSO:", { email, password });

            // 3. NAVEGUE PARA A ROTA /home APÓS O SUCESSO!
            navigate('/home');

        } else {
            toast.error('Email ou senha incorretos!');
            console.log("Login FALHOU:", { email, password });
        }
    };

    return (
        <div className="login-screen">
            {/* ... todo o seu JSX continua exatamente igual aqui ... */}
            <div className="div">
                <img className="image" alt="Image" src={image1} />
                <form onSubmit={handleSubmit}>
                    {/* ... seus inputs e botão ... */}
                    <input
                        type="email"
                        className="input-field"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        className="input-field"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <a href={mailtoEsqueciSenha} className="text-wrapper-3">
                        Esqueci minha senha
                    </a>
                    <button type="submit" className="button-wrapper">
                        Entrar
                    </button>
                </form>
                <p className="n-o-possui-uma-conta">
                    <span className="span">Não possui uma conta? </span>
                    <a href={mailtoNovoCadastro} className="text-wrapper-5">
                        Clique aqui
                    </a>
                </p>
            </div>
        </div>
    );
};