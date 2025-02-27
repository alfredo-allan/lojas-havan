import React, { useState } from 'react';

const CustomerArea = () => {
    const [activeForm, setActiveForm] = useState('address'); // Estado para o formulário ativo

    const handleMenuClick = (form: string) => { // Definindo tipo 'string' para o parâmetro 'form'
        setActiveForm(form);
    };
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <div className="col-md-3 col-lg-2 p-3 bg-light" style={{ position: 'fixed', height: '100%' }}>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <strong>Minha Conta</strong>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => handleMenuClick('address')}>
                                Meus endereços
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                Lista de Desejos e Favoritos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                Consulta de saldo
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                Sair
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Content Area */}
                <div className="col-md-9 col-lg-10 offset-md-3 offset-lg-2 p-4" style={{ marginLeft: '20%' }}>
                    {activeForm === 'address' && (
                        <div>
                            <h1>Adicionar novo endereço</h1>
                            <form className="form-address-edit" action="" method="post">
                                <fieldset className="fieldset">
                                    <legend><span>Informações de contato</span></legend>
                                    <div className="form-group">
                                        <label htmlFor="firstname">Nome</label>
                                        <input type="text" className="form-control" id="firstname" placeholder="Insira o seu nome" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastname">Sobrenome</label>
                                        <input type="text" className="form-control" id="lastname" placeholder="Insira o seu sobrenome" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telephone">Celular</label>
                                        <input type="tel" className="form-control" id="telephone" placeholder="(DD) 90000-0000" />
                                    </div>
                                </fieldset>

                                <fieldset className="fieldset">
                                    <legend><span>Endereço</span></legend>
                                    <div className="form-group">
                                        <label htmlFor="zip">CEP</label>
                                        <input type="text" className="form-control" id="zip" placeholder="Insira o CEP" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="street_1">Logradouro</label>
                                        <input type="text" className="form-control" id="street_1" placeholder="Insira o endereço de entrega" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="street_2">Número</label>
                                        <input type="text" className="form-control" id="street_2" placeholder="Digite o número do seu endereço" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city">Cidade</label>
                                        <input type="text" className="form-control" id="city" placeholder="Insira a cidade" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="region_id">Estado</label>
                                        <select className="form-control" id="region_id">
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
                </div>
            </div>
        </div>
    );
};

export default CustomerArea;
