import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import "./LoginOrRegister.css";
import UserLoginIcoBlue from '../../Assets/Img/user-blue.png';
import CpfCnpjInput from "../CpfCnpjInput/CpfCnpjInput"; // Importe o componente
import { useNavigate } from "react-router-dom";

interface LoginOrRegisterProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginOrRegister: React.FC<LoginOrRegisterProps> = ({ isOpen, onClose }) => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [tipoPessoa, setTipoPessoa] = useState(""); // Estado para o select
    const [cpf, setCpf] = useState("");
    const [cnpj, setCnpj] = useState("");


    const handleShowLogin = () => setShowLoginModal(true);
    const handleCloseLogin = () => setShowLoginModal(false);

    const handleShowRegister = () => {
        setShowLoginModal(false);
        setShowRegisterModal(true);
    };

    const handleCloseRegister = () => setShowRegisterModal(false);
    // Função para formatar CPF automaticamente
    const formatCpf = (value: string) => {
        // Remove qualquer caractere que não seja número
        let cpfOnlyNumbers = value.replace(/\D/g, "");

        // Limita a 11 dígitos
        cpfOnlyNumbers = cpfOnlyNumbers.slice(0, 11);

        // Aplica a formatação XXX.XXX.XXX-XX
        return cpfOnlyNumbers
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    };

    // Atualiza o estado do CPF conforme o usuário digita
    const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedCpf = formatCpf(event.target.value);
        setCpf(formattedCpf);
    };
    const formatCnpj = (value: string) => {
        let numbersOnly = value.replace(/\D/g, ""); // Remove tudo que não é número
        numbersOnly = numbersOnly.slice(0, 14); // Limita a 14 dígitos

        return numbersOnly
            .replace(/(\d{2})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1/$2")
            .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
    };

    const handleCnpjChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedCnpj = formatCnpj(event.target.value);
        setCnpj(formattedCnpj);
    };
    if (!isOpen) return null;

    return (
        <>
            <div className={`login-register-container ${isOpen ? "open" : ""}`}>
                <div className="login-register-content">
                    <button className="close-button" onClick={onClose}>X</button>
                    <div className="user-info">
                        <span className="user-icon">
                            <img src={UserLoginIcoBlue} alt="Ícone de usuário" />
                        </span>
                        <a href="#" className="login-link" onClick={(e) => { e.preventDefault(); handleShowLogin(); }}>
                            Entre ou Cadastre-se
                        </a>
                    </div>
                    <ul className="menu-options">
                        <li className="order-iteration"><a href="#">Meus Pedidos →</a></li>
                        <li className="order-iteration"><a href="#">Gerir Cartão Havan →</a></li>
                    </ul>
                </div>
            </div>

            {/* Modal de Login */}
            <Modal show={showLoginModal} onHide={handleCloseLogin} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Login ou Cadastro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-6 border-end">
                            <h2>Não tem uma conta?</h2>
                            <p>Criando uma conta você tem muitos benefícios:</p>
                            <ul>
                                <li>Confira o andamento do pedido</li>
                                <li>Salve múltiplos endereços</li>
                                <li>Dispense preencher formulários a cada novo pedido</li>
                            </ul>
                            <button
                                className="btn btn-primary w-100"
                                onClick={handleShowRegister}
                            >
                                Quero criar uma conta Havan
                            </button>
                        </div>
                        <div className="col-md-6">
                            <h2>Finalize seu pedido com a sua conta</h2>
                            <form>
                                <div className="mb-3">
                                    {/* <label className="form-label">CPF ou CNPJ</label> */}
                                    <CpfCnpjInput /> {/* Campo de CPF/CNPJ com a formatação */}                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Senha</label>
                                    <input type="password" className="form-control" placeholder="Digite sua senha" />
                                </div>
                                <a href="#" className="d-block mb-3">Esqueceu sua senha?</a>
                                <Button variant="secondary" className="w-100">Entrar</Button>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Modal de Cadastro */}
            <Modal show={showRegisterModal} onHide={handleCloseRegister} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title className="create-account-title">Criar conta Havan</Modal.Title>
                    <div className="info-container text-center p-3">
                        <span className="info-text d-block creat-accont-span">
                            Criar sua conta é simples e fácil, basta preencher as informações abaixo.
                        </span>
                        <h4 className="info-title mt-3 creact-accont-subtitle">Informações Pessoais</h4>
                    </div>

                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Email *</label>
                            <input type="email" className="form-control" placeholder="Insira o seu e-mail" />
                        </div>

                        {/* Campo de seleção de Tipo de Pessoa */}
                        <div className="mb-3">
                            <label className="form-label">Tipo de Pessoa</label>
                            <select
                                className="form-select"
                                value={tipoPessoa}
                                onChange={(e) => setTipoPessoa(e.target.value)}
                            >
                                <option value="" disabled>Tipo de Pessoa</option>
                                <option value="fisica">Pessoa Física</option>
                                <option value="juridica">Pessoa Jurídica</option>
                            </select>
                        </div>

                        {/* Campos visíveis apenas se for Pessoa Física */}
                        {tipoPessoa === "fisica" && (
                            <div className="mb-3">
                                <label className="form-label">CPF *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Insira o nº do seu CPF"
                                    value={cpf}
                                    onChange={handleCpfChange}
                                    maxLength={14} // Garante que o usuário não digite além do necessário
                                />
                            </div>
                        )}

                        {/* Campos visíveis apenas se for Pessoa Jurídica */}
                        {tipoPessoa === "juridica" && (
                            <>
                                <div className="mb-3">
                                    <label className="form-label">CNPJ *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Insira o nº do seu CNPJ"
                                        value={cnpj}
                                        onChange={(e) => setCnpj(formatCnpj(e.target.value))}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Nome Comercial *</label>
                                    <input type="text" className="form-control" placeholder="Insira o nome comercial" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Inscrição Estadual *</label>
                                    <input type="text" className="form-control" placeholder="Insira a Inscrição Estadual" />
                                </div>
                            </>
                        )}

                        <div className="mb-3">
                            <label className="form-label">Nome *</label>
                            <input type="text" className="form-control" placeholder="Insira o seu nome" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Senha *</label>
                            <input type="password" className="form-control" placeholder="Insira uma senha de acesso" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirmar Senha *</label>
                            <input type="password" className="form-control" placeholder="Confirme a senha de acesso" />
                        </div>
                        <Button variant="primary" className="w-100 create-account">Criar minha conta Havan</Button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default LoginOrRegister;
