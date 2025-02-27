import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap"; // Importando componentes do Bootstrap
import "./LoginOrRegister.css";
import UserLoginIcoBlue from '../../Assets/Img/user-blue.png';

interface LoginOrRegisterProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginOrRegister: React.FC<LoginOrRegisterProps> = ({ isOpen, onClose }) => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

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
                        <a href="#" className="login-link" onClick={(e) => { e.preventDefault(); handleShow(); }}>
                            Entre ou Cadastre-se
                        </a>
                    </div>
                    <ul className="menu-options">
                        <li className="order-iteration"><a href="#">Meus Pedidos →</a></li>
                        <li className="order-iteration"><a href="#">Gerir Cartão Havan →</a></li>
                    </ul>
                </div>
            </div>

            {/* Modal do Bootstrap */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Login ou Cadastro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        {/* Seção Criar Conta */}
                        <div className="col-md-6 border-end">
                            <h2>Não tem uma conta?</h2>
                            <p>Criando uma conta você tem muitos benefícios:</p>
                            <ul>
                                <li>Confira o andamento do pedido</li>
                                <li>Salve múltiplos endereços</li>
                                <li>Dispense preencher formulários a cada novo pedido</li>
                            </ul>
                            <a
                                href=""
                                className="btn btn-primary w-100"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Quero criar uma conta Havan
                            </a>
                        </div>

                        {/* Seção Login */}
                        <div className="col-md-6">
                            <h2>Finalize seu pedido com a sua conta</h2>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">CPF ou CNPJ</label>
                                    <input type="text" className="form-control" placeholder="Digite seu CPF ou CNPJ" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Senha</label>
                                    <input type="password" className="form-control" placeholder="Digite sua senha" />
                                </div>
                                <a href="" className="d-block mb-3">
                                    Esqueceu sua senha?
                                </a>
                                <Button variant="secondary" className="w-100">Entrar</Button>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default LoginOrRegister;
