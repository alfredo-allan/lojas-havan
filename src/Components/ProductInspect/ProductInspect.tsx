import React, { useState } from 'react';
import './ProductInspect.css';
import { ProductCardProps } from '../ProductCard/ProductCard';
import PixIcon from "../../Assets/Img/pix-icon.png";
import CardIcon from "../../Assets/Img/credit-card.png";
import TruckDelivery from "../../Assets/Img/caminhao-de-entrega.png";
import CheckedCalendar from '../../Assets/Img/check-mark.png';
import TruckDeliveryGreen from '../../Assets/Img/caminhao-de-entrega-verde.png';
import BuildingIcon from "../../Assets/Img/fotor-20250214194212.png";
import GoBack from "../../Assets/Img/back.png";

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
    const [cep, setCep] = useState("");
    const [showDelivery, setShowDelivery] = useState(false);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, ""); // Remove tudo que não for número
        if (value.length > 5) {
            value = value.slice(0, 5) + "-" + value.slice(5, 8);
        }
        setCep(value);
    };

    const handleCalculateClick = () => {
        if (cep.length === 9) {
            setShowDelivery(true); // Mostra a seção de entrega somente se o CEP for válido
        } else {
            setShowDelivery(false); // Caso o CEP não tenha 9 caracteres, não mostra
        }
    };

    return (
        <div className="product-inspect">
            <div className="to-go-back">
                {/* <b className="back-text">Voltar</b> */}
                <img src={GoBack} className="back-button" onClick={onBack} alt="Ícone de voltar" />

            </div>
            <div className="product-details">
                <h1 className='inspection-name'>{name}</h1>
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
                    <div className="shipping-calculator">
                        <span id='shipping-deadline' >Calcule o valor do frete e prazo de entrega</span>
                        <img className='truck-delivery' src={TruckDelivery} alt="" />
                        <input type="text" placeholder="Digite o CEP" value={cep} onChange={handleCepChange} maxLength={9} />
                        <button onClick={handleCalculateClick}>Calcular</button>
                        <div className="delivery-condition">
                            <img className='calendar' src={CheckedCalendar} alt="" />
                            <span className="descripition-delivery">Os prazos de entrega começam a contar a partir da confirmação de pagamento!</span>
                        </div>
                        {showDelivery && (
                            <>
                                <div className="delivery-time">
                                    <h2 className='title-time' >Entrega</h2>
                                    <hr className="title-divider" />
                                    <img id='truck-green' src={TruckDeliveryGreen} alt="" />
                                    <b className='standard-delivery'>Entrega Padrão</b>
                                    <p className='p-time'>Em até 2 dias úteis <b>R$ 10,99</b></p>
                                    <hr className="title-divider" />
                                    <img id='truck-green' src={TruckDeliveryGreen} alt="" />
                                    <b className='standard-delivery'>Entrega Expressa</b>
                                    <p className='p-time' >Em até 1 dias útil <b>R$ 20,99</b></p>
                                </div>
                                <div className="delivery-time">
                                    <h2 className='title-time' >Retire em loja</h2>
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
