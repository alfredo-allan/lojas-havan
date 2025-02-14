import React, { useState } from 'react';
import './ProductInspect.css';
import { ProductCardProps } from '../ProductCard/ProductCard';

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

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <div className="product-inspect">
            <button className="back-button" onClick={onBack}>← Voltar</button>
            <div className="product-details">
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
                    <h1>{name}</h1>
                    <p className="discount-price"> {discountPrice}</p>
                    <p className="installments">Em até {installments}x de R$ {installment} sem juros</p>

                    <div className="payment-options">
                        <button className="payment-button">💳 Cartão de Crédito</button>
                        <button className="payment-button">💰 Pix</button>
                    </div>

                    <div className="quantity-selector">
                        <button onClick={decreaseQuantity}>-</button>
                        <span>{quantity}</span>
                        <button onClick={increaseQuantity}>+</button>
                    </div>
                    <div className="buy-buttons">
                        <button className="buy-button">Comprar Agora</button>
                        <button className="add-to-cart-button">Adicionar ao Carrinho</button>
                    </div>
                    <div className="shipping-calculator">
                        <input type="text" placeholder="Digite o CEP" />
                        <button>Calcular</button>
                    </div>
                </div>

                <div className="product-description">
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
