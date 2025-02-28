import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header';
import CategoryDetails from '../Components/CategoryDetails/CategoryDetails';
import Footer from '../Components/Footer/Footer';

const Computing: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState(''); // Estado para armazenar o termo de pesquisa

    useEffect(() => {
        console.log("Página de Informática carregada!");
    }, []);

    // Função para atualizar o termo de pesquisa
    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    return (
        <div className="informatica-container">
            <Header onSearch={handleSearch} /> {/* Passamos a função que atualiza o estado */}
            <CategoryDetails searchTerm={searchTerm} /> {/* Passamos o termo atualizado */}
            <Footer />
        </div>
    );
};

export default Computing;
