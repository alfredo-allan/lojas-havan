import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import MobileSideMenu from "../MobileSideMenu/MobileSideMenu";
import LoginOrRegister from "../LoginOrRegister/LoginOrRegister";
import CepInput from "../CepInput/CepInput"; // Importação do novo componente
import LogoHavan from "../../Assets/Img/havanNameHeader.png";
import MenuIco from "../../Assets/Img/menu.png";
import Lupa from "../../Assets/Img/search.png";
import LupaBranca from "../../Assets/Img/search-white.png";
import LupaAzulMenor from "../../Assets/Img/search.png";
import CloseIcon from "../../Assets/Img/close.png";
import Localizacao from "../../Assets/Img/location.png";
import UserLoginIco from "../../Assets/Img/user.png";
import CarrinhoCompras from "../../Assets/Img/shopping-cart.png";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    onSearch: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [cartCount, setCartCount] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.classList.toggle("mobile-menu-open", !isMobileMenuOpen);
    };

    const handleSearch = () => {
        if (searchTerm.trim()) {
            onSearch(searchTerm);
        }
        setIsSearchVisible(false);
    };

    const closeSearch = () => {
        setIsSearchVisible(false);
        setSearchTerm("");
    };
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartCount(cart.length);
    }, []);

    useEffect(() => {
        const updateCart = () => {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            setCartCount(cart.length);
        };

        window.addEventListener("storage", updateCart);
        return () => window.removeEventListener("storage", updateCart);
    }, []);
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
                            <CepInput /> {/* Usando o novo componente aqui */}
                        </div>
                    </div>

                    <a className="navbar-brand" href="#" onClick={(e) => e.preventDefault()}></a>

                    {isSearchVisible && <div className="overlay" onClick={closeSearch}></div>}

                    <div className="search-container">
                        {/* Desktop Search Box */}
                        <div className={`search-box ${isMobile ? 'd-none' : ''} search-desktop`}>
                            <input
                                type="search"
                                placeholder="Buscar na Havan"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                            />
                            <img
                                className="search-icon"
                                src={LupaAzulMenor} // Lupa azul no desktop
                                alt="Buscar"
                                onClick={handleSearch}
                            />
                        </div>

                        {/* Mobile Search Box */}
                        {isSearchVisible && isMobile && (
                            <div className="search-box search-mobile">
                                <input
                                    type="search"
                                    placeholder="Buscar na Havan"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                                    autoFocus
                                />
                                <img
                                    className="search-icon"
                                    src={LupaAzulMenor} // Lupa azul no mobile também
                                    alt="Buscar"
                                    onClick={handleSearch}
                                />
                                <img
                                    className="close-icon-search"
                                    src={CloseIcon} // Botão de fechar só aparece no mobile
                                    alt="Fechar"
                                    onClick={closeSearch}
                                />
                            </div>
                        )}

                        {/* Lupa Icon (Appears on mobile or when search box is not visible) */}
                        {!isSearchVisible && (
                            <img
                                id="Lupa"
                                src={isMobile ? LupaBranca : LupaAzulMenor} // Lupa branca no mobile e azul no desktop
                                alt="Buscar"
                                onClick={() => setIsSearchVisible(true)}
                            />
                        )}
                    </div>
                    <div className="icon-container" onClick={() => setIsLoginOpen(true)} style={{ cursor: "pointer" }}>
                        <img src={UserLoginIco} id="UserLogin" alt="Usuário" />
                        <a id="Text-Login" href="#">Olá, Entre na conta ou Cadastre-se</a>
                        <div className="cart-icon" onClick={() => navigate("/shopping-cart")} style={{ cursor: "pointer" }}>
                            <img src={CarrinhoCompras} id="Carrinho" alt="Carrinho de Compras" />
                            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                        </div>
                    </div>
                </div>
            </nav>

            <MobileSideMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />

            {isLoginOpen && <LoginOrRegister isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />}
        </header>
    );
};

export default Header;
