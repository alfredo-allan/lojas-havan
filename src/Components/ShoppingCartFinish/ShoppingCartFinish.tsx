import React, { useState, useEffect } from 'react';
import CardIcon from '../../Assets/Img/credit-card.png';
import PixIcon from '../../Assets/Img/pix-icon.png';
import TruckDelivery from '../../Assets/Img/caminhao-de-entrega.png';
import BuildingIcon from '../../Assets/Img/fotor-20250214194212.png';
import './ShoppingCartFinish.css'
interface ShoppingCartFinishProps {
    cep: string;
    setCep: (cep: string) => void;
    showDelivery: boolean;
    handleCepChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleCalculateClick: () => void;
}

const ShoppingCartFinish: React.FC<ShoppingCartFinishProps> = ({ cep, setCep, showDelivery, handleCepChange, handleCalculateClick }) => {
    const [selectedDelivery, setSelectedDelivery] = useState<string | null>(null);

    // Recupera a opção de entrega do localStorage ao carregar a página
    useEffect(() => {
        const savedDelivery = localStorage.getItem("selectedDelivery");
        if (savedDelivery) {
            setSelectedDelivery(savedDelivery);
        }
    }, []);

    // Atualiza a escolha do usuário no estado e salva no localStorage
    const handleDeliverySelection = (option: string) => {
        setSelectedDelivery(option);
        localStorage.setItem("selectedDelivery", option);
    };

    return (
        <div className="shopping-payment-method-finish">
            <div className="payment-options">
                <h1 className="shopping-payment-method-text-finish">Forma de entrega</h1>
                <span className='pay-option-finish'>Opções de pagamento:</span>
                <button className="payment-button-pay-card-finish"><img src={CardIcon} alt="" /> Cartão de Crédito</button>
                <button className="payment-button-pay-pix-finish"><img src={PixIcon} alt="" /> Pix</button>
            </div>

            <div className="delivery-options-finish">
                <h2 className='delivery-options-text-finish'>Entrega</h2>
                <hr className="divider-shopping-finish" />

                {/* Entrega Padrão */}
                <div className="delivery-option" onClick={() => handleDeliverySelection("padrao")}>
                    <img className='blue-shopping-truck-finish' src={TruckDelivery} alt="Entrega Padrão" />
                    <div className="radio-container">

                        <input type="radio" id="padrao" name="delivery" checked={selectedDelivery === "padrao"} readOnly />
                        <label htmlFor="padrao" className="custom-radio"></label>
                        <span className='blue-shopping-truck-text'> <b>Entrega Padrão</b>  2 dias úteis - <b>R$ 10,99</b></span>
                    </div>

                </div>

                <hr className="divider-shopping-finish" />

                {/* Entrega Expressa */}
                <div className="delivery-option" onClick={() => handleDeliverySelection("expressa")}>
                    <img className='blue-shopping-truck-finish' src={TruckDelivery} alt="Entrega Expressa" />
                    <div className="radio-container">
                        <input type="radio" id="expressa" name="delivery" checked={selectedDelivery === "expressa"} readOnly />
                        <label htmlFor="expressa" className="custom-radio"></label>
                        <span className='blue-shopping-truck-text'> <b>Entrega Expressa</b>  1 dia útil - <b>R$ 20,99</b></span>

                    </div>
                </div>
                <hr className="divider-shopping-finish" />

                {/* Retirada na Loja */}
                <h2 className='delivery-options-text-finish'>Retirada na Loja</h2>
                <hr className="divider-shopping-finish" />
                <div className="delivery-option">
                    <img className='shopee-temple-finish' src={BuildingIcon} alt="Retirada na loja" />
                    <span className='shopee-temple-text-finish'>Indisponível para retirada nas lojas próximas.</span>
                </div>
                <button className='finalize-purchase-mobile'>Finalizar compra</button>
            </div>
        </div>
    );
};

export default ShoppingCartFinish;
