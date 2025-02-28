import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header';
import CustomerArea from '../Components/CustomerArea/CustomerArea';
import Footer from '../Components/Footer/Footer';

const CustomerAreaPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState(''); // Estado para armazenar o termo de pesquisa

    useEffect(() => {
        console.log("Página de Informática carregada!");
    }, []);

    // Função para atualizar o termo de pesquisa
    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    return (
        <div className="customer-area-page">
            <Header onSearch={handleSearch} /> {/* Passamos a função que atualiza o estado */}
            <CustomerArea />
            <Footer />
        </div>
    );
};

export default CustomerAreaPage;
