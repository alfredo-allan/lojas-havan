import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'; // Adicionado Navigate
import CustomerAreaPage from '../Pages/CustomerAreaPage';
import Informatica from '../Pages/ComputingPage';
import Home from '../Pages/Home';
import ShoppingCartPage from '../Pages/ShoppingCartPage';

interface AppRoutesProps {
    searchTerm: string;
    onSearch: (term: string) => void;
}

const AppRoutes = ({ searchTerm, onSearch }: AppRoutesProps) => {
    return (
        <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} onSearch={onSearch} />} />
            <Route path="/customer-area" element={<CustomerAreaPage />} />
            <Route path="/informatica" element={<Informatica />} />
            <Route path="/shopping-cart" element={<ShoppingCartPage />} />

            {/* Redireciona para a home caso a rota não seja encontrada */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
