import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import MobileSideMenu from '../MobileSideMenu/MobileSideMenu';
import LogoHavan from '../../Assets/Img/havanNameHeader.png';
import MenuIco from '../../Assets/Img/menu.png';
import Lupa from '../../Assets/Img/search.png';
import Localizacao from '../../Assets/Img/location.png';
import UserLoginIco from '../../Assets/Img/user.png';
import CarrinhoCompras from '../../Assets/Img/shopping-cart.png';

interface HeaderProps {
    onSearch: (term: string) => void; // Função que vem do App.tsx para atualizar o termo de pesquisa
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.classList.toggle('mobile-menu-open', !isMobileMenuOpen);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="iteration-user">
                        {/* Ícone de Menu */}
                        <img src={MenuIco} id="IcoMenu" alt="Ícone de Menu" />
                        <img id="logo" src={LogoHavan} alt="Havan Name Logo" />

                        {/* Localização e CEP */}
                        <div className="d-flex align-items-center">
                            <img src={Localizacao} id="IcoLocalizacao" alt="Localização" />
                            <span id="Text-Input">Enviar Para</span>
                            <input id="Input-Cep" type="text" placeholder="Digite o CEP" />
                        </div>
                    </div>

                    {/* Logo */}
                    <a className="navbar-brand" href="#" onClick={(e) => e.preventDefault()}></a>

                    {/* Barra de Pesquisa */}
                    <div className="search-container">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Pesquisar..."
                            aria-label="Pesquisar"
                            id="InputPesquisa"
                            onChange={(e) => onSearch(e.target.value)} // Atualiza o termo de pesquisa no App
                        />
                        <img id="Lupa" src={Lupa} alt="Buscar" />
                    </div>

                    {/* Ícones de Usuário e Carrinho */}
                    <div className="icon">
                        <img src={UserLoginIco} id='UserLogin' alt="Usuário" />
                        <a id='Text-Login' href="#">Olá, Entre na conta ou Cadastre-se</a>
                        <img src={CarrinhoCompras} id='Carrinho' alt="Carrinho de Compras" />
                    </div>
                </div>
            </nav>
            <MobileSideMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
        </header>
    );
};

export default Header;
