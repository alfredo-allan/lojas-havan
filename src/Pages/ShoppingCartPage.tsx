import React, { useState, useEffect } from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ShoppingCart from "../Components/ShoppingCart/ShoppingCart";
import { ProductCardProps } from "../Components/ProductCard/ProductCard";  // Importando ProductCardProps corretamente
import "../Pages/Style/ ShoppingCartPage.css"; // Criar um CSS específico para essa página

const ShoppingCartPage: React.FC = () => {
    const [cartItems, setCartItems] = useState<(ProductCardProps & { quantity: number })[]>([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(cart);
    }, []);

    const handleUpdateCartCount = (count: number) => {
        console.log("Número de itens no carrinho:", count);
    };

    const handleRemove = (index: number) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        handleUpdateCartCount(updatedCart.length);
    };

    const handleSearch = (term: string) => {
        console.log("Buscando por:", term);
    };

    return (
        <div className="shopping-cart-page">
            <Header onSearch={handleSearch} />

            {cartItems.length === 0 ? (
                <div className="empty-cart-message">
                    <h2>Seu carrinho está vazio 😕</h2>
                    <p>Adicione itens ao carrinho para continuar.</p>
                </div>
            ) : (
                <ShoppingCart
                    cartItems={cartItems}
                    onRemove={handleRemove}
                    onUpdateCartCount={handleUpdateCartCount}
                />
            )}
            <div className="space-footer">

                <Footer />
            </div>

        </div>
    );
};

export default ShoppingCartPage;
