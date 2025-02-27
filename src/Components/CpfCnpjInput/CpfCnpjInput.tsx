import React, { useState } from "react";

const formatCpfCnpj = (value: string) => {
    let numbersOnly = value.replace(/\D/g, ""); // Remove tudo que não for número

    if (numbersOnly.length <= 11) {
        // CPF: XXX.XXX.XXX-XX
        return numbersOnly
            .slice(0, 11)
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    } else {
        // CNPJ: XX.XXX.XXX/XXXX-XX
        return numbersOnly
            .slice(0, 14)
            .replace(/(\d{2})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1/$2")
            .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
    }
};

const CpfCnpjInput: React.FC = () => {
    const [value, setValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatCpfCnpj(event.target.value);
        setValue(formattedValue);
    };

    return (
        <div className="mb-3"> {/* Mantendo a estrutura correta */}
            <label className="form-label">CPF ou CNPJ</label>
            <input
                type="text"
                className="form-control"
                placeholder="Digite seu CPF ou CNPJ"
                value={value}
                onChange={handleChange}
                maxLength={18} // Evita erro ao digitar mais do que o necessário
            />
        </div>
    );
};

export default CpfCnpjInput;
