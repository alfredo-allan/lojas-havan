import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importando o useNavigate
import "./CustomerArea.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomerArea: React.FC = () => {
    const [activeForm, setActiveForm] = useState("address");
    const navigate = useNavigate(); // Criando a constante para navegação
    const [telephone, setTelephone] = useState(""); // Estado para armazenar o telefone formatado
    const [cep, setCep] = useState("");


    const handleLogout = () => {
        navigate("/"); // Redireciona para a página inicial (Home)
    };

    // Função para formatar o telefone no padrão brasileiro
    const formatPhoneNumber = (value: string) => {
        // Remove tudo que não for número
        let phone = value.replace(/\D/g, "");

        // Limita o tamanho do número para 11 caracteres (DDD + 9 dígitos)
        if (phone.length > 11) {
            phone = phone.slice(0, 11);
        }

        // Aplica a máscara (XX XXXXX-XXXX)
        if (phone.length >= 7) {
            phone = phone.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "$1 $2 $3");
        } else if (phone.length > 2) {
            phone = phone.replace(/^(\d{2})(\d{0,5})$/, "$1 $2");
        }

        return phone;
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhone = formatPhoneNumber(event.target.value);
        setTelephone(formattedPhone);
    };
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
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar fixa */}
                <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                    <div className="position-sticky">
                        {/* Menu de Navegação */}
                        <ul className="list-group p-3">
                            <li className="list-group-item active">
                                <strong>Minha Conta</strong>
                            </li>
                            <hr className="divider-custoumer" />

                            <li className="list-group-item">
                                <button
                                    className="btn btn-link w-100 text-start"
                                    onClick={() => setActiveForm("address")}
                                >
                                    Meus endereços
                                </button>
                            </li>
                            <hr className="divider-custoumer" />

                            <li className="list-group-item">
                                <button className="btn btn-link w-100 text-start">
                                    Lista de Desejos e Favoritos
                                </button>
                            </li>
                            <hr className="divider-custoumer" />

                            {/* <li className="list-group-item">
                                <button className="btn btn-link w-100 text-start">
                                    Consulta de saldo
                                </button>
                            </li> */}
                            <li className="list-group-item">
                                <button
                                    className="btn btn-link w-100 text-start"
                                    onClick={handleLogout}  // Chamando a função de logout
                                >
                                    Sair
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* Área de conteúdo */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    {activeForm === "address" && (
                        <div className="mt-4">
                            <h1>Adicionar novo endereço</h1>
                            <form className="form-address-edit">
                                <fieldset className="fieldset">
                                    <legend>Informações de contato</legend>
                                    <div className="mb-3">
                                        <label htmlFor="firstname" className="form-label">Nome</label>
                                        <input type="text" className="form-control" id="firstname" placeholder="Insira o seu nome" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lastname" className="form-label">Sobrenome</label>
                                        <input type="text" className="form-control" id="lastname" placeholder="Insira o seu sobrenome" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="telephone" className="form-label">Celular</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="telephone"
                                            placeholder="11 00000-0000"
                                            value={telephone}
                                            onChange={handlePhoneChange}
                                        />
                                    </div>
                                </fieldset>

                                <fieldset className="fieldset mt-4">
                                    <legend>Endereço</legend>
                                    <div className="mb-3">
                                        <label htmlFor="zip" className="form-label">CEP</label>
                                        <input
                                            id="cep-customer"
                                            type="text"
                                            placeholder="Digite o CEP"
                                            value={cep}
                                            onChange={handleChange}
                                            maxLength={9} // Garante que não ultrapasse "99999-999"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="street_1" className="form-label">Logradouro</label>
                                        <input type="text" className="form-control" id="street_1" placeholder="Insira o endereço de entrega" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="street_2" className="form-label">Número</label>
                                        <input type="text" className="form-control" id="street_2" placeholder="Digite o número do seu endereço" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="city" className="form-label">Cidade</label>
                                        <input type="text" className="form-control" id="city" placeholder="Insira a cidade" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="region_id" className="form-label">Estado</label>
                                        <select className="form-select" id="region_id">
                                            <option value="">Selecione o estado</option>
                                            <option value="AC">Acre</option>
                                            <option value="AL">Alagoas</option>
                                            <option value="AP">Amapá</option>
                                            <option value="AM">Amazonas</option>
                                            <option value="BA">Bahia</option>
                                            <option value="CE">Ceará</option>
                                            <option value="DF">Distrito Federal</option>
                                            <option value="ES">Espírito Santo</option>
                                            <option value="GO">Goiás</option>
                                            <option value="MA">Maranhão</option>
                                            <option value="MT">Mato Grosso</option>
                                            <option value="MS">Mato Grosso do Sul</option>
                                            <option value="MG">Minas Gerais</option>
                                            <option value="PA">Pará</option>
                                            <option value="PB">Paraíba</option>
                                            <option value="PR">Paraná</option>
                                            <option value="PE">Pernambuco</option>
                                            <option value="PI">Piauí</option>
                                            <option value="RJ">Rio de Janeiro</option>
                                            <option value="RN">Rio Grande do Norte</option>
                                            <option value="RS">Rio Grande do Sul</option>
                                            <option value="RO">Rondônia</option>
                                            <option value="RR">Roraima</option>
                                            <option value="SC">Santa Catarina</option>
                                            <option value="SP">São Paulo</option>
                                            <option value="SE">Sergipe</option>
                                            <option value="TO">Tocantins</option>
                                        </select>
                                    </div>
                                </fieldset>

                                <button type="submit" className="btn btn-primary save-address">Salvar endereço</button>
                            </form>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default CustomerArea;
