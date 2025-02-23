import React from "react";
import "./Footer.css";
import qrCode from "../../Assets/Img/QR-code-Footer.png"; // Substitua pelo caminho correto da imagem do QR code
import youtubeIcon from "../../Assets/Img/youtube.png"; // Substitua pelo caminho correto do ícone
import instagramIcon from "../../Assets/Img/instagran.png"; // Substitua pelo caminho correto do ícone
import xIcon from "../../Assets/Img/Xicon.png"; // Ícone do Twitter/X
import facebookIcon from "../../Assets/Img/facebook.png"; // Ícone do Facebook
import tiktokIcon from "../../Assets/Img/tiktok.png"; // Ícone do TikTok
import IconsApp from "../../Assets/Img/IconsApp.png";
import SuportCall from "../../Assets/Img/support.png";
import TenpleHavan from "../../Assets/Img/greek-temple.png";
import BankSlip from "../../Assets/Img/bill.png";
import Arrow from "../../Assets/Img/right-up.png";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-contact">
                    <h3 className="talk-to-agent">Não encontrou o que precisava? Fale com a gente!</h3>
                    <div className="contact-icons">
                        <div className="box-suport">
                            <a href="" className="suport-on-line">
                                <img id="suport" src={SuportCall} alt="Suporte" />
                                Atendimento compras online
                            </a>
                        </div>
                        <div className="box-temple">
                            <a href="" className="temple-text">
                                <img id="temple" src={TenpleHavan} alt="Havan" />
                                Fale com uma loja
                            </a>
                        </div>
                        <div className="box-bank-slip">
                            <a href="" className="bank-slip-text">
                                <img id="bank-slip" src={BankSlip} alt="Boleto" />
                                Negociar dívida Havan
                            </a>
                        </div>
                    </div>
                    <div className="contact-buttons">
                        <button>Atendimento compras<img src={Arrow} alt="seta" /></button>
                        <button>Fale com uma loja <img src={Arrow} alt="seta" /></button>
                        <button>Negociar dívida Havan <img src={Arrow} alt="seta" /></button>
                        <button>Blog Havan <img src={Arrow} alt="seta" /></button>
                        <button>Acessibilidade <img src={Arrow} alt="seta" /></button>
                    </div>
                </div>

                {/* <div className="footer-links">
                    <div>
                        <a href="#">Nossa história</a>
                        <a href="#">Lista de presentes</a>
                        <a href="#">Trabalhe conosco</a>
                    </div>
                    <div>
                        <a href="#">Painel do colaborador</a>
                        <a href="#">Seguros</a>
                        <a href="#">Cartão Havan</a>
                    </div>
                    <div>
                        <a href="#">Igualdade Salarial</a>
                        <a href="#">Troco solidário</a>
                    </div>
                </div> */}

                <div className="footer-app">
                    <h3>Aplicativo Havan</h3>
                    <p>Conheça as vantagens</p>
                    <img src={qrCode} alt="QR Code do App Havan" className="qr-code" />
                    <img src={IconsApp} alt="Icons APP" className="app-stores" />
                </div>

                <div className="footer-social">
                    <img src={youtubeIcon} alt="YouTube" />
                    <img src={instagramIcon} alt="Instagram" />
                    <img src={xIcon} alt="X (Twitter)" />
                    <img src={facebookIcon} alt="Facebook" />
                    <img src={tiktokIcon} alt="TikTok" />
                </div>
            </div>

            <div className="footer-button">
                {/* <a href="#">Guia de segurança</a>
                <a href="#">Política de privacidade</a>
                <a href="#">Política do site</a>
                <a href="#">Solicitações sobre dados pessoais</a>
                <a href="#">Política de entrega</a>
                <a href="#">Troca e devolução</a> */}
                <hr className="divider-footer"></hr>
                <p>© 1986 - 2025 HAVAN S.A. | CNPJ: 79.379.491.0008-50 | Rod. Antônio Heil, 250 - Centro II, Brusque - SC, 88353-100</p>
            </div>
        </footer>
    );
};

export default Footer;
