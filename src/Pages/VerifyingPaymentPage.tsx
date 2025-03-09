import '../Pages/Style/VerifyingPaymentPage.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ShoppingCartItem from "../Components/ShoppingCartItem/ShoppingCartItem";
import BuyerData from "../Components/BuyerDetailsForm/BuyerDetailsForm";
import PaymentModal from "../Components/PaymentModal/PaymentModal";

const VerifyingPaymentPage: React.FC = () => {
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [selectedDelivery, setSelectedDelivery] = useState<string | null>(null);
    const [deliveryCost, setDeliveryCost] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(cart);

        // Recupera a opção de entrega do cache
        const savedDelivery = localStorage.getItem("selectedDelivery");
        setSelectedDelivery(savedDelivery);

        // Define o custo do frete baseado na escolha do usuário
        if (savedDelivery === "padrao") {
            setDeliveryCost(10.99);
        } else if (savedDelivery === "expressa") {
            setDeliveryCost(20.99);
        } else {
            setDeliveryCost(0);
        }
    }, []);

    const handleIncrease = (index: number) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity += 1;
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const handleDecrease = (index: number) => {
        const updatedCart = [...cartItems];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
            setCartItems(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
    };

    const handleRemove = (index: number) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const handleSearch = (term: string) => {
        console.log("Buscando por:", term);
    };


    const totalAmount = cartItems.reduce((total, item) => {
        return total + parseFloat(item.discountPrice.replace('R$', '').replace(',', '.')) * item.quantity;
    }, 0);

    return (
        <>
            <Header onSearch={handleSearch} />
            <main className="verifying-container">
                <h1 className="verifying-title">Revisão de pagamentos</h1>


                <section className='order-summary-page'>
                    <div className='order-summary-box'>
                        <div className="order-sumamary-title">
                            <h1 className='order-summary-modal-title'> Resumo do Pedido</h1>
                            <h3 className="order-summary-text">
                                Subtotal:
                                <span className="cart-value">R$ {totalAmount.toFixed(2)}</span>
                            </h3>

                            <h3 className="order-summary-text">
                                Entrega ({selectedDelivery ? selectedDelivery.charAt(0).toUpperCase() + selectedDelivery.slice(1) : "Não selecionada"}):
                                <span className="cart-value">R$ {deliveryCost.toFixed(2)}</span>
                            </h3>
                        </div>
                        <section className="verifying-card">
                            {cartItems.map((item, index) => (
                                <ShoppingCartItem
                                    key={index}
                                    item={item}
                                    index={index}
                                    onIncrease={handleIncrease}
                                    onDecrease={handleDecrease}
                                    onRemove={handleRemove}
                                />
                            ))}
                        </section>

                        <section className='cart-value-verifying'>
                            <h2 className='cart-value'>Total Final: R$ {(totalAmount + deliveryCost).toFixed(2)}</h2>
                        </section>
                    </div>
                </section>

                <section className="buyer-data-verifying"> {/* quero inserir o modal de pix ou cartão abaixo desse ok ? */}
                    <BuyerData />
                    <PaymentModal />
                </section>


            </main>
            <Footer />
        </>
    );
};

export default VerifyingPaymentPage;
