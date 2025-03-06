import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShoppingCart.css';
import { ProductCardProps } from '../ProductCard/ProductCard';
import PixIcon from "../../Assets/Img/pix-icon.png";
import CardIcon from "../../Assets/Img/credit-card.png";
import TruckDelivery from "../../Assets/Img/caminhao-de-entrega.png";
import TruckDeliveryGreen from "../../Assets/Img/caminhao-de-entrega-verde.png";
import BuildingIcon from "../../Assets/Img/fotor-20250214194212.png";
import Lixeira from '../../Assets/Img/lixeira.png'

interface ShoppingCartProps {
    cartItems: (ProductCardProps & { quantity: number })[];
    onRemove: (index: number) => void;
    onUpdateCartCount: (count: number) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems: initialCartItems, onRemove, onUpdateCartCount }) => {
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [cep, setCep] = useState("");
    const [showDelivery, setShowDelivery] = useState(false);
    const navigate = useNavigate();

    // Garante que o estado do carrinho está sincronizado com as props
    useEffect(() => {
        setCartItems(initialCartItems);
    }, [initialCartItems]);

    // Atualiza a contagem total de itens no carrinho
    useEffect(() => {
        const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
        onUpdateCartCount(totalItems);
    }, [cartItems, onUpdateCartCount]);

    // Carregar o CEP salvo no localStorage ao iniciar o componente
    useEffect(() => {
        const savedCep = localStorage.getItem("userCep");
        if (savedCep) {
            setCep(savedCep);
        }
    }, []);

    // Verifica se o carrinho está vazio ao abrir a página e redireciona para a home
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        if (cart.length === 0) {
            navigate('/');
        }
    }, [navigate]);

    const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, "");
        if (value.length > 5) {
            value = value.slice(0, 5) + "-" + value.slice(5, 8);
        }
        setCep(value);
    };

    const handleCalculateClick = () => {
        setShowDelivery(cep.length === 9);
    };

    const updateQuantity = (index: number, newQuantity: number) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = [...prevCartItems];
            updatedCartItems[index] = { ...updatedCartItems[index], quantity: newQuantity };

            localStorage.setItem('cart', JSON.stringify(updatedCartItems));
            return updatedCartItems;
        });
    };

    const decreaseQuantity = (index: number) => {
        if (cartItems[index].quantity > 1) {
            updateQuantity(index, cartItems[index].quantity - 1);
        }
    };

    const increaseQuantity = (index: number) => {
        updateQuantity(index, cartItems[index].quantity + 1);
    };

    const totalAmount = cartItems.reduce((total, item) => {
        return total + parseFloat(item.discountPrice.replace('R$', '').replace(',', '.')) * item.quantity;
    }, 0);

    const handleFinalizePurchase = () => {
        // Navegar para a página de confirmação ou finalização do pedido
        navigate("/shopping-finish"); // Ou para qualquer outra página desejada
    };
    return (
        <div className="shopping-cart">
            <h1 className='shopping-cart-text'>Seu Carrinho</h1>
            {cartItems.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <>
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3 className='shopping-cart-description'>{item.name}</h3>
                                <p className="cart-item-price">{item.discountPrice}</p>
                                <div className="quantity-selector-shopping">
                                    <button className='decrease' onClick={() => decreaseQuantity(index)}>-</button>
                                    <span className="numeral-indicator-shopping">{item.quantity}</span>
                                    <button className='add' onClick={() => increaseQuantity(index)}>+</button>
                                </div>
                                <button className='delete-shopping' onClick={() => onRemove(index)}> <img src={Lixeira} alt="" /> </button>
                            </div>
                        </div>
                    ))}
                    <h2 className='cart-value'>Total: R$ {totalAmount.toFixed(2)}</h2>
                    <button className='finalize-purchase-desktop' onClick={handleFinalizePurchase}>Finalizar compra</button>
                    <div className="shopping-payment-method">
                        <div className="payment-options">
                            <h1 className="shopping-payment-method-text">Forma de entrega</h1>
                            <span className='pay-option'>Opções de pagamento:</span>
                            <button className="payment-button-pay-card"><img src={CardIcon} alt="" /> Cartão de Crédito</button>
                            <button className="payment-button-pay-pix"><img src={PixIcon} alt="" /> Pix</button>
                        </div>

                        <div className="shipping-calculator-shopping-cart">
                            <span className='delivery time-span'>Calcule o frete e prazo de entrega</span>
                            <img className='truck-delivery-shopping' src={TruckDelivery} alt="" />
                            <input
                                type="text"
                                placeholder="Digite o CEP"
                                value={cep}
                                onChange={handleCepChange}
                                maxLength={9}
                            />
                            <button className='delivery time-calculate' onClick={handleCalculateClick}>Calcular</button>
                        </div>

                        {showDelivery && (
                            <div className="delivery-options">
                                <h2 className='delivery-options-text' >Entrega</h2>
                                <hr className="divider-shopping" />
                                <div className="delivery-option">
                                    <img className='green-shopping-truck' src={TruckDeliveryGreen} alt="Entrega Padrão" />
                                    <span className='green-shopping-truck-text'> <b>Entrega Padrão</b>  2 dias úteis - <b>R$ 10,99</b></span>
                                </div>
                                <hr className="divider-shopping" />

                                <br className="space-green-truck" />
                                <div className="delivery-option">
                                    <div className="delivery-option-contents">
                                        <img className='green-shopping-truck' src={TruckDeliveryGreen} alt="Entrega Expressa" />
                                        <span className='green-shopping-truck-text'> <b>Entrega Expressa</b> - 1 dia útil - <b>R$ 20,99</b></span>
                                    </div>
                                </div>
                                <hr className="divider-shopping" />

                                <h2 className='delivery-options-text'>Retirada na Loja</h2>
                                <hr className="divider-shopping" />
                                <div className="delivery-option">
                                    <img className='shopee-temple' src={BuildingIcon} alt="Retirada na loja" />
                                    <span className='shopee-temple-text' >Indisponível para retirada nas lojas próximas.</span>
                                </div>
                                <button className='finalize-purchase-mobile' onClick={handleFinalizePurchase}>Finalizar compra</button>                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default ShoppingCart;
