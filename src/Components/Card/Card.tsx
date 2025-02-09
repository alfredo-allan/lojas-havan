import React from 'react';
import './Card.css';


interface CardProps {
    discountText: string;
    productImage: string;
    productDescription: string;
    oldPrice: string;
    currentPrice: string;
    pixPrice: string;
    icoHeart: string;
}

const Card: React.FC<CardProps> = ({
    discountText,
    productImage,
    productDescription,
    oldPrice,
    currentPrice,
    pixPrice,
    icoHeart,
}) => {
    return (
        <div className="card-container">
            {/* Ícone de desconto redondo */}
            <div className="discount-icon">
                <span>{discountText}</span>
            </div>

            {/* Imagem do produto */}
            <img src={productImage} alt="Produto" className="product-image" />
            <img src={icoHeart} alt="" />
            {/* Descrição do produto */}
            <div className="product-description">{productDescription}</div>

            {/* Preços */}
            <div className="price-container">
                <div className="old-price">
                    <span>{oldPrice}</span>
                </div>
                <div className="current-price">
                    <strong>{currentPrice}</strong>
                </div>
                <div className="pix-price">
                    <span>PIX: {pixPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
