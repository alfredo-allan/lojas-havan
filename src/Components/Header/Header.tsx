import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import MobileSideMenu from '../MobileSideMenu/MobileSideMenu';
import LogoHavan from '../../Assets/Img/havanNameHeader.png';
import MenuIco from '../../Assets/Img/menu.png';
import Lupa from '../../Assets/Img/search.png';
import LupaBranca from '../../Assets/Img/search-white.png';
import LupaAzulMenor from '../../Assets/Img/search.png'; // Nova lupa azul menor
import CloseIcon from '../../Assets/Img/close.png'; // Ícone de fechar
import Localizacao from '../../Assets/Img/location.png';
import UserLoginIco from '../../Assets/Img/user.png';
import CarrinhoCompras from '../../Assets/Img/shopping-cart.png';

interface HeaderProps {
    onSearch: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.classList.toggle('mobile-menu-open', !isMobileMenuOpen);
    };

    const handleSearch = () => {
        if (searchTerm.trim()) {
            onSearch(searchTerm);
        }
        setIsSearchVisible(false); // Fecha o campo de pesquisa
    };

    const closeSearch = () => {
        setIsSearchVisible(false);
        setSearchTerm(''); // Limpa o campo ao fechar
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="iteration-user">
                        <img src={MenuIco} id="IcoMenu" alt="Ícone de Menu" />
                        <img id="logo" src={LogoHavan} alt="Havan Name Logo" />

                        <div className="d-flex align-items-center">
                            <img src={Localizacao} id="IcoLocalizacao" alt="Localização" />
                            <span id="Text-Input">Enviar Para</span>
                            <input id="Input-Cep" type="text" placeholder="Digite o CEP" />
                        </div>
                    </div>

                    <a className="navbar-brand" href="#" onClick={(e) => e.preventDefault()}></a>

                    {/* Overlay para escurecer o fundo */}
                    {isSearchVisible && <div className="overlay" onClick={closeSearch}></div>}

                    {/* Barra de Pesquisa */}
                    <div className="search-container">
                        {/* Campo de pesquisa para Desktop */}
                        <div className="search-box search-desktop">
                            <input
                                type="search"
                                placeholder="Pesquisar..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <img className="search-icon" src={LupaAzulMenor} alt="Buscar" onClick={handleSearch} />
                            <img className="close-icon" src={CloseIcon} alt="Fechar" onClick={closeSearch} />
                        </div>

                        {/* Campo de pesquisa para Mobile */}
                        {isSearchVisible && (
                            <div className="search-box search-mobile">
                                <input
                                    type="search"
                                    placeholder="Pesquisar..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                                />
                                <img className="search-icon" src={LupaAzulMenor} alt="Buscar" onClick={handleSearch} />
                                <img className="close-icon" src={CloseIcon} alt="Fechar" onClick={closeSearch} />
                            </div>
                        )}

                        {/* Ícone de lupa para abrir o input no mobile */}
                        {!isSearchVisible && (
                            <img id="Lupa" src={isMobile ? LupaBranca : Lupa} alt="Buscar" onClick={() => setIsSearchVisible(true)} />
                        )}
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
