import React, { useState, useEffect } from 'react';
import './ProductInspect.css';
import { ProductCardProps } from '../ProductCard/ProductCard';
import PixIcon from "../../Assets/Img/pix-icon.png";
import CardIcon from "../../Assets/Img/credit-card.png";
import TruckDelivery from "../../Assets/Img/caminhao-de-entrega.png";
import CheckedCalendar from '../../Assets/Img/check-mark.png';
import TruckDeliveryGreen from '../../Assets/Img/caminhao-de-entrega-verde.png';
import BuildingIcon from "../../Assets/Img/fotor-20250214194212.png";
import GoBack from "../../Assets/Img/back.png";
import GoBackBlue from "../../Assets/Img/arrow-blue.png";
import ProductInspectCarousel from '../ProductInspectCarousel/ProductInspectCarousel';
import ShareIcon from '../../Assets/Img/share.png';
import HeartProduct from '../../Assets/Img/heart-product.png';
import DescriptionListIco from '../../Assets/Img/list.png';
import HeartProductLike from '../../Assets/Img/heart-product-like.png';



interface ProductInspectProps extends ProductCardProps {
    onBack: () => void;
    description: { title?: string; content: string | string[] }[];
}

const ProductInspect: React.FC<ProductInspectProps> = ({
    name,
    image,
    discountPrice,
    installment,
    installments,
    discount,
    icoHeart,
    gallery,
    description,
    onBack
}) => {
    const [selectedImage, setSelectedImage] = useState(image);
    const [quantity, setQuantity] = useState(1);
    const [cep, setCep] = useState(""); // Estado do CEP
    const [showDelivery, setShowDelivery] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [liked, setLiked] = useState(false);

    // Carregar o CEP salvo no localStorage ao iniciar o componente
    useEffect(() => {
        const savedCep = localStorage.getItem("userCep");
        if (savedCep) {
            setCep(savedCep);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, "");
        if (value.length > 5) {
            value = value.slice(0, 5) + "-" + value.slice(5, 8);
        }
        setCep(value);
        localStorage.setItem("userCep", value); // Atualiza o localStorage
    };

    const handleCalculateClick = () => {
        setShowDelivery(cep.length === 9);
    };

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="product-inspect">
            <div className="to-go-back">
                <img
                    src={isMobile ? GoBack : GoBackBlue} // Troca o ícone dependendo da resolução
                    className="back-button"
                    onClick={onBack}
                    alt="Ícone de voltar"
                />
                <b className='back-text'>Voltar</b>
            </div>

            <div className="product-details">
                <h1 className='inspection-name'>{name}</h1>

                {isMobile ? (
                    <ProductInspectCarousel
                        gallery={[image, ...gallery]}
                        selectedImage={selectedImage}
                        setSelectedImage={setSelectedImage}
                    />
                ) : (
                    <>
                        <img src={selectedImage} alt={name} className="product-image-large" />
                        <div className="gallery">
                            {gallery.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Imagem ${index + 1}`}
                                    className={`thumbnail ${selectedImage === img ? 'selected' : ''}`}
                                    onClick={() => setSelectedImage(img)}
                                />
                            ))}
                        </div>
                    </>
                )}
                <div className="product-iteration">
                    <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent('Confira este link: https://alfredo-allan.github.io/lojas-havan/')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="box-share">
                            <img id='shareicon' src={ShareIcon} alt="Compartilhar" />
                        </div>
                        <span className='share-text'>Compartilhar</span>
                    </a>

                    <div className="box-heart-product" onClick={toggleLike} style={{ cursor: 'pointer' }}>
                        <img id='hearticon' src={liked ? HeartProductLike : HeartProduct} alt="Curtir Produto" />
                    </div>

                    <span className='heart-product' >Adicionar à lista de desejos</span>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            const target = document.querySelector(".product-description");
                            if (target) {
                                target.scrollIntoView({ behavior: "smooth", block: "start" });
                            }
                        }}
                    >
                        <div className="box-description-list">
                            <img id='descriptionicon' src={DescriptionListIco} alt="Descrição" />
                        </div>
                        <span className='description-link'>Detalhes</span>
                    </a>

                </div>
                <div className="payment-information">
                    <p className="discount-price-details" style={{ color: "var(--blue-color)", fontSize: "30px", marginLeft: "-6%" }}>
                        {discountPrice}
                    </p>
                    <p className="installments-pi">Em até {installments}x de R$ {installment} sem juros</p>

                    <div className="payment-options">
                        <span className="payment-method">Opções de pagamento:</span>
                        <button className="payment-button"><img src={CardIcon} alt="" /> Cartão de Crédito</button>
                        <button className="payment-button"><img src={PixIcon} alt="" /> Pix</button>
                    </div>

                    <div className="quantity-selector">
                        <span className="quantity">Escolha a quantidade:</span>
                        <button onClick={decreaseQuantity}>-</button>
                        <span className='numeral-indicator'>{quantity}</span>
                        <button onClick={increaseQuantity}>+</button>
                    </div>

                    <div className="buy-buttons">
                        <button className="buy-button">Comprar Agora</button>
                        <button className="add-to-cart-button">Adicionar ao Carrinho</button>
                    </div>

                    <div className="shipping-calculator  with-delivery">
                        <span id='shipping-deadline'>Calcule o valor do frete e prazo de entrega</span>
                        <img className='truck-delivery' src={TruckDelivery} alt="" />
                        <input
                            type="text"
                            placeholder="Digite o CEP"
                            value={cep}
                            onChange={handleCepChange}
                            maxLength={9}
                        />
                        <button onClick={handleCalculateClick}>Calcular</button>

                        <div className="delivery-condition">
                            <img className='calendar' src={CheckedCalendar} alt="" />
                            <span className="descripition-delivery">Os prazos de entrega começam a contar a partir da confirmação de pagamento!</span>
                        </div>

                        {showDelivery && (
                            <>
                                <div className="delivery-time">
                                    <h2 className='title-time'>Entrega</h2>
                                    <hr className="title-divider" />
                                    <img id='truck-green' src={TruckDeliveryGreen} alt="" />
                                    <b className='standard-delivery'>Entrega Padrão</b>
                                    <p className='p-time'>Em até 2 dias úteis <b>R$ 10,99</b></p>
                                    <hr className="title-divider" />
                                    <img id='truck-green' src={TruckDeliveryGreen} alt="" />
                                    <b className='standard-delivery'>Entrega Expressa</b>
                                    <p className='p-time'>Em até 1 dia útil <b>R$ 20,99</b></p>
                                </div>

                                <div className="delivery-time">
                                    <h2 className='title-time'>Retire em loja</h2>
                                    <hr className="title-divider" />
                                    <img id='building' src={BuildingIcon} alt="" />
                                    <b className='availability'>Produto indisponível para retirada nas lojas próximas à localidade informada.</b>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className={`product-description ${showDelivery ? "with-delivery" : ""}`}>
                    <h4 className='title-box-decription'>Detalhes</h4>
                    {description.map((section, index) => (
                        <div key={index}>
                            {section.title && <h3>{section.title}</h3>}
                            {Array.isArray(section.content) ? (
                                <ul>
                                    {section.content.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{section.content}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductInspect;
