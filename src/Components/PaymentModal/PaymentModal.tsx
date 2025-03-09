import { useState } from "react";
import "./PaymentModal.css"; // Arquivo de estilos

const PaymentModal = () => {
    const [paymentMethod, setPaymentMethod] = useState("creditCard");
    const [showPixModal, setShowPixModal] = useState(false);

    const handleCreditCardClick = () => {
        setPaymentMethod("creditCard");
        setShowPixModal(false); // Fecha o modal do PIX ao selecionar cartão de crédito
    };

    const handlePixClick = () => {
        setPaymentMethod("pix");
        setShowPixModal(true); // Abre o modal do PIX
    };

    const handleClosePixModal = () => {
        setShowPixModal(false);
    };

    return (
        <div className="payment-container">
            <h5 className="payment-title">Forma de pagamento</h5>

            {/* Opção Cartão de Crédito */}
            <label className={`payment-option ${paymentMethod === "creditCard" ? "selected" : ""}`}>
                <input
                    type="radio"
                    name="payment"
                    value="creditCard"
                    checked={paymentMethod === "creditCard"}
                    onChange={handleCreditCardClick}
                />
                Cartão De Crédito
                <span className="custom-radio-payment-modal"></span>
            </label>

            {/* Opção PIX */}
            <label className={`payment-option ${paymentMethod === "pix" ? "selected" : ""}`} onClick={handlePixClick}>
                <input
                    type="radio"
                    name="payment"
                    value="pix"
                    checked={paymentMethod === "pix"}
                    readOnly
                />
                <span className="custom-radio-verifying"></span>
                PIX
            </label>

            {/* Seção do Cartão de Crédito */}
            {paymentMethod === "creditCard" && !showPixModal && (
                <div className="payment-box">
                    <label>CPF/CNPJ do titular do cartão *</label>
                    <input type="text" placeholder="000.000.000-00" />

                    <label>Número do cartão *</label>
                    <input type="text" placeholder="0000 0000 0000 0000" />

                    <label>Nome do Titular no Cartão *</label>
                    <input type="text" placeholder="Nome Completo" />

                    <div className="row">
                        <div>
                            <label>Data de Validade *</label>
                            <select>
                                <option>01 - Janeiro</option>
                                <option>02 - Fevereiro</option>
                                <option>03 - Março</option>
                                <option>04 - Abril</option>
                                <option>05 - Maio</option>
                                <option>06 - Junho</option>
                                <option>07 - Julho</option>
                                <option>08 - Agosto</option>
                                <option>09 - Setembro</option>
                                <option>10 - Outubro</option>
                                <option>11 - Novembro</option>
                                <option>12 - Dezembro</option>
                            </select>
                            <select>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                                <option>2031</option>
                                <option>2032</option>
                                <option>2033</option>

                            </select>
                        </div>
                        <div>
                            <label>CVV *</label>
                            <input type="text" placeholder="000" />
                        </div>
                    </div>

                    <label>Escolha a quantidade de parcelas *</label>
                    <select>
                        <option>1x sem juros</option>
                        <option>2x sem juros</option>
                        <option>3x sem juros</option>
                        <option>4x sem juros</option>
                        <option>5x sem juros</option>
                        <option>6x sem juros</option>
                        <option>7x sem juros</option>
                        <option>8x sem juros</option>
                        <option>9x sem juros</option>
                        <option>10x sem juros</option>
                    </select>

                    <div className="privacy-box">
                        <input type="checkbox" />
                        <span>Eu li e aceito as <a href="#">Políticas de Privacidade</a></span>
                    </div>

                    <button className="finalize-button">Finalizar Pedido</button>
                </div>
            )}

            {/* Modal do PIX */}
            {showPixModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Estamos quase lá!</h5>
                            <button type="button" className="btn-close" onClick={handleClosePixModal}></button>
                        </div>
                        <div className="modal-body">
                            <p>Pague seu Pix dentro de 00:29:06 e garanta sua compra. Após esse prazo a compra será automaticamente cancelada.</p>
                            <h6>Como fazer?</h6>
                            <div className="pix-instructions">
                                <div className="instruction">
                                    <span className="instruction-number">1</span>
                                    <p>Abra o aplicativo do seu banco ou instituição financeira e selecione o Pix.</p>
                                </div>
                                <div className="instruction">
                                    <span className="instruction-number">2</span>
                                    <p>Escolha a opção Pagar com QR code e escaneie o código ao lado.</p>
                                </div>
                                <div className="instruction">
                                    <span className="instruction-number">3</span>
                                    <p>Confirme as informações e efetue o pagamento.</p>
                                </div>
                            </div>
                            <div className="qr-code">
                                {/* Aqui você adicionaria o código QR do PIX */}
                                <img src="URL_DO_SEU_QR_CODE" alt="QR Code PIX" />
                            </div>
                            <p>Ou</p>
                            <p>Copie o código abaixo, abra seu aplicativo de pagamento e escolha a opção Pix Copia e Cola.</p>
                            <div className="pix-code">
                                <p className="pix-code-text">00020101021226770014BR.GOV.BCB.PIX255</p>
                                <button className="copy-code-button">Copiar Código PIX</button>
                            </div>
                            <p>O prazo de entrega dos pedidos com Pix começa a contar após a confirmação do pagamento pela instituição financeira.</p>
                            <hr />
                            <h6>Sobre seu pedido</h6>
                            <p>Pedido nº: #019965438</p>
                            <p>Você receberá um e-mail de confirmação do pedido com mais detalhes, e dentro de algumas horas, você poderá consultá-lo em <a href="#">Meus pedidos</a>.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentModal;
