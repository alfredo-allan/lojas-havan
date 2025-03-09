import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ShoppingCartItem from "../Components/ShoppingCartItem/ShoppingCartItem";
import BuyerData from "../Components/BuyerDetailsForm/BuyerDetailsForm";
import ShoppingCartFinish from "../Components/ShoppingCartFinish/ShoppingCartFinish"; // Importação correta
import '../Pages/Style/CheckoutShippingPage.css'

const CheckoutShippingPage: React.FC = () => {
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [cep, setCep] = useState(""); // Estado para armazenar o CEP
    const [showDelivery, setShowDelivery] = useState(false); // Estado para exibir opções de entrega
    const navigate = useNavigate();

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(cart);
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

    const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCep(event.target.value);
    };

    const handleCalculateClick = () => {
        if (cep.length === 9) {
            setShowDelivery(true);
        } else {
            alert("Digite um CEP válido.");
        }
    };

    const handleFinalizePurchase = () => {
        navigate("/verifying-payment");
    };
    const totalAmount = cartItems.reduce((total, item) => {
        return total + parseFloat(item.discountPrice.replace('R$', '').replace(',', '.')) * item.quantity;
    }, 0);


    return (
        <>
            <Header onSearch={handleSearch} />
            <main className="checkout-container">
                <h1 className="checkout-title">Confirmar Entrega</h1>
                <section className="checkout-items">
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
                <section className='cart-value-finish'>
                    <h2 className='cart-value'>Total: R$ {totalAmount.toFixed(2)}</h2>

                </section>
                <section className='user-data-and-delivery'>
                    <section className="buyer-data">
                        <BuyerData />
                    </section>
                    <section className="shopping-cart-finish">
                        <ShoppingCartFinish
                            cep={cep}
                            setCep={setCep}
                            showDelivery={showDelivery}
                            handleCepChange={handleCepChange}
                            handleCalculateClick={handleCalculateClick}
                        />
                    </section>
                </section>
                <button className='finalize-purchase-finish' onClick={handleFinalizePurchase}>
                    Finalizar compra
                </button>
            </main>
            <Footer />
        </>
    );
};

export default CheckoutShippingPage;
