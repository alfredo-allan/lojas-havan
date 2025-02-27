import React, { useState, useEffect } from "react";

const CepInput: React.FC = () => {
    const [cep, setCep] = useState("");

    // Carrega o CEP salvo no cache do navegador ao carregar o componente
    useEffect(() => {
        const savedCep = localStorage.getItem("userCep");
        if (savedCep) {
            setCep(savedCep);
        }
    }, []);

    // Função para formatar o CEP enquanto o usuário digita
    const formatCep = (value: string) => {
        const cleanedValue = value.replace(/\D/g, "").slice(0, 8); // Remove tudo que não for número e limita a 8 caracteres
        if (cleanedValue.length > 5) {
            return `${cleanedValue.slice(0, 5)}-${cleanedValue.slice(5)}`;
        }
        return cleanedValue;
    };

    // Função chamada ao mudar o valor do input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedCep = formatCep(e.target.value);
        setCep(formattedCep);
        localStorage.setItem("userCep", formattedCep); // Salva no cache
    };

    return (
        <input
            id="Input-Cep"
            type="text"
            placeholder="Digite o CEP"
            value={cep}
            onChange={handleChange}
            maxLength={9} // Garante que não ultrapasse "99999-999"
            className="form-control"
        />
    );
};

export default CepInput;
