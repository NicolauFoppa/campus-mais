import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { useAuth } from '../../context/auth_context';
import { loginUser } from '../../services/api';
import image1 from "../../assets/logo.png";
import "./login_screen.css";

export const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    //Função 'login' que foi definida e exportada pelo nosso AuthContext.
    const { login } = useAuth();

    //Funções para o esqueci a senha e o novo cadastro
    const mailtoEsqueciSenha = `mailto:auth@ucs.br?subject=${encodeURIComponent("Solicitação de Redefinição de Senha")}&body=${encodeURIComponent("Olá, gostaria de solicitar a redefinição da minha senha. Meu e-mail de cadastro é: ")}`;
    const mailtoNovoCadastro = `mailto:auth@ucs.br?subject=${encodeURIComponent("Solicitação de Novo Cadastro")}&body=${encodeURIComponent("Olá, gostaria de solicitar a criação de uma nova conta de acesso.")}`;

    //Função quando o botão é apertado
    const handleSubmit = async (event) => {
        event.preventDefault();
        const credentials = { email, senha: password };

        try {
            const data = await loginUser(credentials);
            if (data.success) {
                login(data);
                toast.success('Login realizado com sucesso!');
                navigate('/home');
            }
        } catch (error) {
            toast.error(error.message || 'Credenciais inválidas');
            console.error("Falha no login:", error);
        }
    };

    return (
        <div className="login-screen">
            <div className="div">
                <img className="image" alt="Image" src={image1} />
                <form onSubmit={handleSubmit}>
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