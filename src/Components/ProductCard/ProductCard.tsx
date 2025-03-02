// ProductCard.tsx

import React, { useState } from 'react';
import './ProductCard.css';
import thumbsUpIcon from '../../Assets/Img/thumbs-up.png';

export interface ProductCardProps {
    name: string;
    image: string;
    discountPrice: string;
    installment: string;
    installments: string;
    discount: string;
    icoHeart: string;
    onClick?: () => void;
    gallery: string[];
    description: { title?: string; content: string | string[] }[]; // Aqui precisa ser array
    
}



const ProductCard: React.FC<ProductCardProps> = ({
    name,
    image,
    icoHeart,
    discountPrice,
    installment,
    installments,
    discount,
    onClick,
}) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="product-card" onClick={onClick}> {/* Adicionado evento de clique */}
            {discount && <span className="discount-badge">{discount} OFF</span>}
            <img src={image} alt={name} className="product-image" />

            <div className="circle-of-the-heart" onClick={() => setLiked(!liked)}>
                <img src={icoHeart} alt="Favoritar" className={`icoHeart default-icon ${liked ? "hidden" : ""}`} />
                <img src={thumbsUpIcon} alt="Like" className={`icoHeart hover-icon ${liked ? "" : "hidden"}`} />
            </div>

            <h3 className="product-name">{name}</h3>
            <div className="product-prices">
                <span className="discount-price">{discountPrice}</span>
                <div className="installments">
                    <span className="text parcels">
                        <b>{installments}</b>
                    </span>
                    <span className="text parcel-price">
                        <b>{installment}</b>
                    </span>
                </div>
            </div>
            <button className="buy-button">Comprar</button>
        </div>
    );
};

export default ProductCard;
