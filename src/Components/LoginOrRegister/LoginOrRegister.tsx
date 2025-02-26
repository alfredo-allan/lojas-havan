import React, { useState } from "react";
import "./LoginOrRegister.css"; // Estilos para o componente

const LoginOrRegister = () => {
    const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login e registro

    return (
        <div className="login-container">
            <h2>{isLogin ? "Entrar" : "Criar Conta"}</h2>

            <form>
                <input type="email" placeholder="E-mail" required />
                <input type="password" placeholder="Senha" required />

                {!isLogin && (
                    <input type="password" placeholder="Confirmar Senha" required />
                )}

                <button type="submit">{isLogin ? "Entrar" : "Registrar"}</button>
            </form>

            <p onClick={() => setIsLogin(!isLogin)} className="toggle-link">
                {isLogin ? "Não tem uma conta? Registre-se" : "Já tem uma conta? Faça login"}
            </p>
        </div>
    );
};

export default LoginOrRegister;
