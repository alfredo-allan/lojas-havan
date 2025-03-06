import React from 'react';
import Lixeira from '../../Assets/Img/lixeira.png';
import { ProductCardProps } from '../ProductCard/ProductCard';

interface ShoppingCartItemProps {
    item: ProductCardProps & { quantity: number };
    index: number;
    onIncrease: (index: number) => void;
    onDecrease: (index: number) => void;
    onRemove: (index: number) => void;
}

const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ item, index, onIncrease, onDecrease, onRemove }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
                <h3 className='shopping-cart-description'>{item.name}</h3>
                <p className="cart-item-price">{item.discountPrice}</p>
                <div className="quantity-selector-shopping">
                    <button className='decrease' onClick={() => onDecrease(index)}>-</button>
                    <span className="numeral-indicator-shopping">{item.quantity}</span>
                    <button className='add' onClick={() => onIncrease(index)}>+</button>
                </div>
                <button className='delete-shopping' onClick={() => onRemove(index)}>
                    <img src={Lixeira} alt="Remover item" />
                </button>
            </div>
        </div>
    );
};

export default ShoppingCartItem;
