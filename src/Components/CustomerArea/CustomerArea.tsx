import React, { useState } from "react";
import "./CustomerArea.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomerArea = () => {
    const [activeForm, setActiveForm] = useState("address");

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar fixa */}
                <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                    <div className="position-sticky">
                        <ul className="nav flex-column p-3">
                            <li className="nav-item">
                                <strong>Minha Conta</strong>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link text-start w-100" onClick={() => setActiveForm("address")}>
                                    Meus endereços
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link text-start w-100">
                                    Lista de Desejos e Favoritos
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link text-start w-100">
                                    Consulta de saldo
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link text-start w-100">
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
                                        <input type="tel" className="form-control" id="telephone" placeholder="(DD) 90000-0000" />
                                    </div>
                                </fieldset>

                                <fieldset className="fieldset mt-4">
                                    <legend>Endereço</legend>
                                    <div className="mb-3">
                                        <label htmlFor="zip" className="form-label">CEP</label>
                                        <input type="text" className="form-control" id="zip" placeholder="Insira o CEP" />
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
                                            <option value="SP">São Paulo</option>
                                            <option value="RJ">Rio de Janeiro</option>
                                        </select>
                                    </div>
                                </fieldset>

                                <button type="submit" className="btn btn-primary">Salvar endereço</button>
                            </form>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default CustomerArea;
