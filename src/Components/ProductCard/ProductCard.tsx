import React, { useState } from 'react';
import './ProductCard.css';

// Importação da nova imagem
import thumbsUpIcon from '../../Assets/Img/thumbs-up.png';

interface ProductCardProps {
    name: string;
    image: string;
    discountPrice: string;
    installment: string;
    installments: string;
    discount: string;
    icoHeart: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    name,
    image,
    icoHeart,
    discountPrice,
    installment,
    installments,
    discount,
}) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="product-card">
            {discount && <span className="discount-badge">{discount} OFF</span>}
            <img src={image} alt={name} className="product-image" />

            <div
                className="circle-of-the-heart"
                onClick={() => setLiked(!liked)} // Troca ícone no clique (mobile e desktop)
            >
                {/* Ícone padrão (coração) */}
                <img src={icoHeart} alt="Favoritar" className={`icoHeart default-icon ${liked ? "hidden" : ""}`} />

                {/* Ícone "thumbs-up" */}
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
