import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const BuyerDetailsForm: React.FC = () => {
    return (
        <div className="container mt-4 custom-modal-data-user">
            <div className="p-4 rounded shadow-sm bg-white">
                <h4 className="mb-4">Dados do Comprador</h4>
                <Form>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="firstName">
                                <Form.Label>Nome *</Form.Label>
                                <Form.Control type="text" placeholder="Nome" required />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="lastName">
                                <Form.Label>Sobrenome *</Form.Label>
                                <Form.Control type="text" placeholder="Sobrenome" required />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="phone">
                                <Form.Label>Celular *</Form.Label>
                                <Form.Control type="text" placeholder="(DD) 90000-0000" required />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="cep">
                                <Form.Label>CEP *</Form.Label>
                                <Form.Control type="text" placeholder="Digite seu CEP" required />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={9}>
                            <Form.Group controlId="address">
                                <Form.Label>Endereço *</Form.Label>
                                <Form.Control type="text" placeholder="Digite a rua" required />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="number">
                                <Form.Label>Número *</Form.Label>
                                <Form.Control type="text" placeholder="Insira o nº" required />
                                <Form.Text className="text-danger">Este é um campo obrigatório.</Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="complement">
                                <Form.Label>Complemento</Form.Label>
                                <Form.Control type="text" placeholder="Ex: casa, apartamento, trabalho" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="neighborhood">
                                <Form.Label>Bairro *</Form.Label>
                                <Form.Control type="text" placeholder="Bairro" required />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="city">
                                <Form.Label>Cidade *</Form.Label>
                                <Form.Control type="text" placeholder="Cidade" required />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="state">
                                <Form.Label>Estado *</Form.Label>
                                <Form.Control type="text" placeholder="Ex..São Paulo" required />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
};

export default BuyerDetailsForm;
