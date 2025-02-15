import React, { useState } from 'react';
import ProductCard, { ProductCardProps } from '../ProductCard/ProductCard';
import CategorySide from '../CategorySide/CategorySide';
import ProductInspect from '../ProductInspect/ProductInspect'; // <-- Importa o componente de detalhes
import './CategoryDetails.css';
import icoHeart from '../../Assets/Img/heart.png';

const CategoryDetails: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<ProductCardProps | null>(null);

    const exampleProducts = [

        {
            name: "Fone De Ouvido Bluetooth Philco PFO03BTA - Azul",
            image: require('../../Assets/Img/fone-de-ouvido-bluetooth-philco-pfo03bta_1004613.webp'),
            icoHeart,
            discountPrice: "R$ 71,99",
            installment: "R$ 7,20",
            installments: "de 10x",
            hasInterest: false,
            discount: "40%",
            gallery: [
                require('../../Assets/Img/fone-de-ouvido-bluetooth-philco-pfo03bta_1004613.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-philco-pfo03bta_1004614.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-philco-pfo03bta_1004615.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-philco-pfo03bta_1004616.webp'),
            ],
            description: [
                { content: "O Headphone Philco PFO03BTA foi desenvolvido para proporcionar a melhor experiência de áudio sem abrir mão do conforto e praticidade." },
                { title: "Conexão Bluetooth 5.0", content: "Sem fio, garantindo melhor mobilidade, emparelhamento rápido e ótima taxa de transmissão." },
                { title: "Máximo Conforto", content: "Acompanha arco e conchas almofadadas com rotatividade de 90º graus, e ajuste de altura, se adaptando perfeitamente aos seus ouvidos." },
                { title: "Bateria de Longa Duração", content: "Além de ser recarregável, tem o impressionante desempenho de 22 horas de duração." },
                {
                    title: "Características", content: [
                        "22 Horas de bateria.",
                        "Bluetooth: Sim 5.0.",
                        "Botões Multifunções.",
                        "Entrada para cabo auxiliar.",
                        "Controle remoto de chamadas.",
                        "Arco com ajuste de tamanho.",
                        "Arco almofadado.",
                        "Concha almofadada.",
                        "Barra rotativa de 90º."
                    ]
                },
                {
                    title: "Especificações Técnicas", content: [
                        "Marca: Philco.",
                        "Modelo: PFO03BTA.",
                        "Dimensões do Produto (LxAxC): 18,2cm x 18,3cm x 7,5cm.",
                        "Peso: 240kg."
                    ]
                },
                { title: "Conteúdo da Embalagem", content: "01 Fone de Ouvido." },
                { title: "Garantia", content: "01 Ano (contra defeito de fabricação)." }
            ]
        },


        {
            name: "Fone De Ouvido Motorola Bluetooth Moto Xt220 - Preto",
            image: require('../../Assets/Img/fone-de-ouvido-bluetooth-xt-220-motorola_879198.webp'),
            icoHeart,
            discountPrice: "R$ 79,99",
            installment: "R$ 8,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "",
            gallery: [
                require('../../Assets/Img/fone-de-ouvido-bluetooth-xt-220-motorola_879198.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-xt-220-motorola_879199.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-xt-220-motorola_879200.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-xt-220-motorola_879201.webp')

            ],
            description: [
                { content: "O Fone Motorola Moto XT 220 tem capacidade de até 24 horas de tempo de reprodução, permitindo que você curta sua música ininterruptamente a qualquer hora e em qualquer lugar. Projetado com um design moderno, elegante e estiloso para uso o dia todo, ele traz praticidade ao seu dia a dia, com controles diretos nos fones para áudio e chamadas telefônicas sem precisar tocar no celular." },
                { title: "Tecnologia Bluetooth 5.0", content: "Maior estabilidade de conexão, melhor qualidade de áudio e menor consumo de energia." },
                { title: "Som HD e Isolamento de Ruído", content: "Equipado com isolamento passivo de ruído e tecnologia de som HD para uma experiência sonora imersiva." },
                { title: "Bateria de Longa Duração", content: "Com uma bateria de 230 mAh, oferece até 24 horas de reprodução contínua." },
                {
                    title: "Características", content: [
                        "Conexão sem fio via Bluetooth 5.0.",
                        "Alcance de até 10 metros.",
                        "Controles para Play/Pause integrados.",
                        "Microfone embutido para chamadas.",
                        "Assistente de voz compatível.",
                        "Isolamento passivo de ruído.",
                        "Dois alto-falantes de 40mm.",
                        "Acompanha cabo P2/P2.",
                        "Cabo de carregamento USB-A/micro USB.",
                        "Sensibilidade de 93±3dB.",
                        "Impedância de 64 Ohms.",
                        "Resposta de frequência de 20Hz - 20kHz."
                    ]
                },
                {
                    title: "Especificações Técnicas", content: [
                        "Marca: Motorola.",
                        "Modelo: XT220.",
                        "Dimensões: 18,2cm x 19,5cm x 8,1cm.",
                        "Peso: 180g.",
                        "Tensão: 5V.",
                        "Capacidade de energia: 230mAh."
                    ]
                },
                { title: "Conteúdo da Embalagem", content: "Fone de Ouvido, Manual, Cabo de carregamento USB-A/micro USB, Cabo P2/P2." },
                { title: "Garantia", content: "1 Ano (contra defeito de fabricação)." }
            ]

        },

        {
            name: "Kit Teclado e Mouse Wireless Logitech MK220",
            image: require('../../Assets/Img/kit-teclado-e-mouse-wireless-logitech-mk220_93412_1.webp'),
            icoHeart,
            discountPrice: "R$ 79,99",
            installment: "R$ 16,00",
            installments: "de 5x",
            hasInterest: false,
            discount: "",
            gallery: [require('../../Assets/Img/kit-teclado-e-mouse-wireless-logitech-mk220_93412_1.webp'),
            require('../../Assets/Img/kit-teclado-e-mouse-wireless-logitech-mk220_93413_1.webp'),
            require('../../Assets/Img/kit-teclado-e-mouse-wireless-logitech-mk220_93414_1.webp'),
            ],
            description: [
                {
                    "content": "- O teclado compacto é cerca de 36% menor do que os teclados padrão, mas inclui todas as teclas padrão — por isso é mais fácil ainda fazer as coisas de que você gosta."
                },
                {
                    "content": "- Recursos:"
                },
                {
                    "content": "- Design bem menor, as mesmas teclas:"
                },
                {
                    "content": "- O teclado compacto é cerca de 36% menor do que os teclados padrão, mas inclui todas as teclas padrão — por isso é mais fácil ainda fazer as coisas de que você gosta."
                },
                {
                    "content": "- Sem fio avançado de 2,4 GHz:"
                },
                {
                    "content": "- Agora você pode trabalhar e entreter-se em mais lugares — como o confortável sofá —, porque a conexão sem fio praticamente elimina atrasos, interrupções e interferências, e oferece um alcance de até dez metros.*"
                },
                {
                    "content": "- Criptografia AES de 128 bits:"
                },
                {
                    "content": "- Ajuda a proteger informações ao criptografar a transferência de dados entre o teclado e o receptor, com um dos mais altos níveis de criptografia de dados disponíveis."
                },
                {
                    "content": "- Maior vida útil das pilhas:"
                },
                {
                    "content": "- Com vida útil de 24 meses das pilhas do teclado e de cinco meses das pilhas do mouse você não terá de se preocupar com a troca de pilhas, ao longo de vários meses***"
                },
                {
                    "content": "- Simplicidade do plug-and-play:"
                },
                {
                    "content": "- A configuração não poderia ser mais simples — basta conectar o receptor sem fio a uma porta USB no computador e começar a tuitar, blogar e se envolver no IMing imediatamente, sem software."
                },
                {
                    "content": "- Teclas silenciosas:"
                },
                {
                    "content": "- As teclas mal produzem som, por isso você pode ouvir bem a música que está escutando — em vez do barulho da digitação."
                },
                {
                    "content": "* O alcance sem fio pode variar, dependendo do ambiente e das condições de computação."
                },
                {
                    "content": "** Cálculo da duração das pilhas do teclado baseado em uma estimativa de dois milhões de pressionamentos de teclas por ano em um ambiente de escritório. A experiência do usuário varia. A vida útil das pilhas do mouse varia, dependendo do usuário e das condições de computação."
                },
                {
                    "content": "- Informações adicionais:"
                },
                {
                    "content": "- Itens da embalagem:"
                },
                {
                    "content": "- Teclado (K220)."
                },
                {
                    "content": "- Mouse (M150)."
                },
                {
                    "content": "- Receptor USB."
                },
                {
                    "content": "- Duas pilhas alcalinas AAA (teclado) e duas AA (mouse)."
                },
                {
                    "content": "- Documentação do usuário."
                },
                {
                    "content": "- Requisitos:"
                },
                {
                    "content": "- Windows Vista®, Windows® XP, Windows 7, Windows 8, Windows 10."
                },
                {
                    "content": "- Porta USB."
                },
                {
                    "content": "- Peso Bruto (Kg): 0,620."
                },
                {
                    "content": "- Garantia (Fabricante): 3 anos."
                },
                {
                    "content": "- Importante:"
                },
                {
                    "content": "- \"Imagem meramente ilustrativa\"."
                },
                {
                    "content": "- \"Informações sujeitas a alterações sem aviso prévio\"."
                }
            ]

        },

        {
            name: "Mouse Multilaser Com Fio Entrada Usb Mo255 - Preto",
            image: require('../../Assets/Img/mouse-multilaser-com-fio-entrada-usb-mo255_896844.webp'),
            icoHeart,
            discountPrice: "R$ 9,99",
            installment: "R$ 5,00",
            installments: "de 2x",
            hasInterest: false,
            discount: "",
            gallery: [require('../../Assets/Img/mouse-multilaser-com-fio-entrada-usb-mo255_896844.webp'),
            require('../../Assets/Img/mouse-multilaser-com-fio-entrada-usb-mo255_896845.webp'),
            require('../../Assets/Img/mouse-multilaser-com-fio-entrada-usb-mo255_896847.webp'),
            ],
            description: [
                {
                    "content": "Este mouse é ideal para proporcionar praticidade e simplicidade ao seu dia-a-dia. Com tecnologia Plug e Play, conecte a entrada USB e comece a usar. Possui um design ergonômico, além de velocidade de 1200DPI que te permite navegar com precisão e um rastreamento em alta definição. Venha conferir!"
                },
                {
                    "content": "Características"
                },
                {
                    "content": "Compatibilidade: Windows, Linux, MacOS, Windows®."
                },
                {
                    "content": "Entrada: USB."
                },
                {
                    "content": "Velocidade DPI: 1200."
                },
                {
                    "content": "Comprimento do Cabo: 1,2m."
                },
                {
                    "content": "Especificações técnicas"
                },
                {
                    "content": "Marca: Multilaser."
                },
                {
                    "content": "Modelo: Com Fio."
                },
                {
                    "content": "Ref.:  MO255."
                },
                {
                    "content": "Dimensões do produto(LxAxC): 5,7cm x 3,6cm x 9,5cm."
                },
                {
                    "content": "Peso: 62g."
                },
                {
                    "content": "Conteúdo Da Embalagem:"
                },
                {
                    "content": "01 Mouse Com Fio."
                },
                {
                    "content": "Garantia Fornecedor: 01 ano (contra defeitos de Fabricação)."
                }
            ]
        },

        {
            name: "Fone De Ouvido Wave Pfo02 Philco - Preto ",
            image: require('../../Assets/Img/fone-de-ouvido-wave-pfo02-philco_307785_1.webp'),
            icoHeart,
            discountPrice: "R$ 69,99",
            installment: "R$ 14,00",
            installments: "de 5x",
            hasInterest: false,
            discount: "",
            gallery: [require('../../Assets/Img/fone-de-ouvido-wave-pfo02-philco_307785_1.webp'),
            require('../../Assets/Img/fone-de-ouvido-wave-pfo02-philco_307787_1.webp'),
            require('../../Assets/Img/fone-de-ouvido-wave-pfo02-philco_307789_1.webp'),
            ],
            discription: [
                {
                    "content": "O Fone de Ouvido PFO02 da Philco é muito mais qualidade sonora e conforto! Construído com componentes que priorizam a fidelidade de som e suavização de ruídos. Os potentes alto-falantes possibilitam a melhor resposta e preservação da autenticidade das mídias reproduzidas. Com construção ergonômica e ajustes de altura e largura que se adequam às linhas naturais das mais diversas características faciais, além de possuir confortáveis áreas almofadadas que proporcionam o uso cômodo por horas. Possui microfone integrado no cabo e botão que possibilita atender ou rejeitar ligações e controlar a reprodução das músicas. Cabo emborrachado com design flat que proporciona muito mais durabilidade e evita nós indesejados."
                },
                {
                    "content": "Características"
                },
                {
                    "content": "Arco de cabeça ajustável."
                },
                {
                    "content": "Microfone embutido no cordão."
                },
                {
                    "content": "Cabo padrão TRRS que permite para atender/rejeitar chamadas e controlar músicas com botão multifunção."
                },
                {
                    "content": "Alça de cabeça almofadada."
                },
                {
                    "content": "Concha auditiva almofadada tipo redonda."
                },
                {
                    "content": "Driver com imãs de neodímio."
                },
                {
                    "content": "Impedância de 32 ohms."
                },
                {
                    "content": "Frequência de resposta: 20 até 20.000 Hz."
                },
                {
                    "content": "Sensibilidade de áudio: -42 dB."
                },
                {
                    "content": "Cabo com comprimento de 1,20m."
                },
                {
                    "content": "Especificações técnicas"
                },
                {
                    "content": "Marca: Philco."
                },
                {
                    "title": "Modelo",
                    "content": [
                        "Dimensões do produto (AxLxP): 18,5 x 16 x 3,5 cm.",
                        "Peso: 140g.",
                        "Garantia do fornecedor: 1 ano."
                    ]
                }
            ]
        },

        {
            name: "Fone De Ouvido Bluetooth Händz Air - FB-03",
            image: require('../../Assets/Img/fone-de-ouvido-bluetooth-handz-air_785725.webp'),
            icoHeart,
            discountPrice: "R$ 119,99",
            installment: "R$ 12,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "",
            gallery: [
                require('../../Assets/Img/fone-de-ouvido-bluetooth-handz-air_785725.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-handz-air_785726.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-handz-air_785727.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-handz-air_785728.webp'),

            ],
            description: [
                {
                    "content": "O Fone Bluetooth Händz Air é um fone de ouvido sem fio. É ideal para suas atividades do dia a dia ou para prática de esportes e lazer. Ele conecta com qualquer aparelho via Bluetooth."
                },
                {
                    "content": "Feito de fibra de trigo, o que traz mais resistência, design arrojado e uma qualidade de som ideal para você!"
                },
                {
                    "content": "Características:"
                },
                {
                    "content": "Fone de Ouvido Bluetooth."
                },
                {
                    "content": "Bluetooth 5.0."
                },
                {
                    "content": "Alcance de até 10 metros."
                },
                {
                    "content": "Reprodução aproximada de 3-4 horas."
                },
                {
                    "content": "Capacidade da caixa de carga: 300mAh."
                },
                {
                    "content": "Tempo de carregamento: 1-2 hora."
                },
                {
                    "content": "Tensão de carregamento: 5V."
                },
                {
                    "content": "Som HD Virtual Surround."
                },
                {
                    "content": "Comando Smart Touch Control."
                },
                {
                    "content": "Feito com 35% de fibra de trigo e 65% em ABS."
                },
                {
                    "content": "Especificações Técnicas:"
                },
                {
                    "content": "Marca: Handz."
                },
                {
                    "content": "Ref.: FB-03."
                },
                {
                    "content": "Dimensões aproximadas da embalagem: (CxLxA) 13,5 x 4,5 x 8,5 cm."
                },
                {
                    "content": "Peso aproximado: 155 g."
                },
                {
                    "content": "Conteúdo da Embalagem:"
                },
                {
                    "content": "1 Fone."
                },
                {
                    "content": "1 Cabo Type-C para carregamento."
                },
                {
                    "content": "Garantia Fornecedor: 1 ano."
                },
                {
                    "content": "Imagem meramente ilustrativa."
                }
            ]
        },

        {
            name: "Fone De Ouvido Bluetooth T520 Jbl - Preto",
            image: require('../../Assets/Img/fone-de-ouvido-bluetooth-t520-jbl_845631.webp'),
            icoHeart,
            discountPrice: "R$ 149,99",
            installment: "R$ 15,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "",
            gallery:
                [require('../../Assets/Img/fone-de-ouvido-bluetooth-t520-jbl_845631.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-t520-jbl_845632.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-t520-jbl_845633.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-t520-jbl_845634.webp')
                ],
            description: [
                {
                    "content": "Os fones de ouvido JBL 520BT são uma solução que ajuda você a preencher seu dia com música. Eles permitem que você transmita o poderoso som JBL Pure Bass sem amarras por até 57 horas de puro prazer."
                },
                {
                    "content": "E se receber uma chamada enquanto você assiste a um vídeo em outro dispositivo, o JBL 520BT alterna perfeitamente para o seu celular."
                },
                {
                    "content": "Características:"
                },
                {
                    "content": "Bluetooth: Sim."
                },
                {
                    "content": "Versão Bluetooth: 5.3."
                },
                {
                    "content": "Conexão Tipo C: Sim."
                },
                {
                    "content": "Frequência: 20 Hz - 20 kHz."
                },
                {
                    "content": "Impedância: 30 OHM."
                },
                {
                    "content": "Autonomia: Até 57 Horas."
                },
                {
                    "content": "Sensibilidade: 102 DB."
                },
                {
                    "content": "Driver: 32 MM."
                },
                {
                    "content": "Design: Dobrável, Leve e Confortável."
                },
                {
                    "content": "Alimentação:"
                },
                {
                    "content": "Bateria: 3,7V/450 mAh."
                },
                {
                    "content": "Tipo: Polímero de íons de lítio."
                },
                {
                    "content": "Carregamento: 2 hrs."
                },
                {
                    "content": "Conteúdo da Embalagem:"
                },
                {
                    "content": "01 FONE BLUETOOTH T520 PRETO JBL."
                },
                {
                    "content": "Garantia Fornecedor: 1 Ano."
                },
                {
                    "content": "Imagem meramente ilustrativa."
                },
                {
                    "content": "Informações sujeitas a alterações sem aviso prévio."
                }
            ]
        },

        {
            name: "Teclado Com Fio Multilaser Soft Silence Tc144 - Preto ",
            image: require('../../Assets/Img/teclado-com-fio-multilaser-soft-silence-tc144_855016.webp'),
            icoHeart,
            discountPrice: "R$ 24,99",
            installment: "R$ 5,00",
            installments: "de 5x",
            hasInterest: false,
            discount: "",
            gallery: [
                require('../../Assets/Img/teclado-com-fio-multilaser-soft-silence-tc144_855016.webp'),
                require('../../Assets/Img/teclado-com-fio-multilaser-soft-silence-tc144_855017.webp'),
                require('../../Assets/Img/teclado-com-fio-multilaser-soft-silence-tc144_855018.webp'),
            ],
            description: [
                {
                    "content": "O Teclado com Fio Soft Silence é ideal para quem busca conforto e agilidade na digitação, com teclas macias e silenciosas. O teclado possui teclas multimídia de fácil acesso, padrão ABNT2 e cabo de 1,7 metros para maior praticidade. Além disso conta com regulagem de altura trazendo ergonomia e conforto. Venha já conferir!"
                },
                {
                    "content": "Características"
                },
                {
                    "content": "Cabo: 1,5 metros."
                },
                {
                    "content": "Conexão USB."
                },
                {
                    "content": "Teclas macias e silenciosas."
                },
                {
                    "content": "Design chocolate."
                },
                {
                    "content": "Troca expressa."
                },
                {
                    "content": "Regulamento de altura."
                },
                {
                    "content": "Leds de status."
                },
                {
                    "content": "ABNT2, padrão brasileiro."
                },
                {
                    "content": "Especificações técnicas"
                },
                {
                    "content": "Marca: Multilaser."
                },
                {
                    "content": "Modelo: Teclado Multilaser Soft Silence."
                },
                {
                    "content": "Dimensões aproximadas (LxAxP): 15cm x 2,6cm x 45,6cm."
                },
                {
                    "content": "Peso aproximado:  460kg."
                },
                {
                    "content": "Conteúdo Da Embalagem:"
                },
                {
                    "content": "01 Teclado com fio multilaser."
                },
                {
                    "content": "Garantia Fornecedor: 1 Ano (contra defeitos de fabricação)."
                }
            ]
        },

        {
            name: "Fone De Ouvido Bluetooth Jbl Wave Flex - Preto",
            image: require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-wave-flex_904462.webp'),
            icoHeart,
            discountPrice: "R$ 189,99",
            installment: "R$ 20,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "36%",
            gallery: [
                require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-wave-flex_904463.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-wave-flex_904464.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-wave-flex_904465.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-wave-flex_904466.webp')
            ],
        },

        {
            name: "Impressora Hp Multifuncional Wi-Fi Bivolt ",
            image: require('../../Assets/Img/impressora-hp-multifuncional-wi-fi-smart-tank-583_940322.webp'),
            icoHeart,
            discountPrice: "R$ 620,00",
            installment: "R$ 62,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "38%",
            gallery: [
                require('../../Assets/Img/impressora-hp-multifuncional-wi-fi-smart-tank-583_940323.webp'),
                require('../../Assets/Img/impressora-hp-multifuncional-wi-fi-smart-tank-583_940328.webp'),
                require('../../Assets/Img/impressora-hp-multifuncional-wi-fi-smart-tank-583_940329.webp'),
                require('../../Assets/Img/impressora-hp-multifuncional-wi-fi-smart-tank-583_940330.webp')
            ],
        },

        {
            name: "Tablet 7 Multilaser Minnie 64Gb Nb414 - Preto",
            image: require('../../Assets/Img/tablet-7-multilaser-minnie-64gb-nb414_946117.webp'),
            icoHeart,
            discountPrice: "R$ 329,00",
            installment: "R$ 33,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "45%",
            gallery: [
                require('../../Assets/Img/tablet-7-multilaser-minnie-64gb-nb414_946118.webp'),
                require('../../Assets/Img/tablet-7-multilaser-minnie-64gb-nb414_946119.webp'),
                require('../../Assets/Img/tablet-7-multilaser-minnie-64gb-nb414_946120.webp'),
                require('../../Assets/Img/tablet-7-multilaser-minnie-64gb-nb414_946123.webp'),
                require('../../Assets/Img/tablet-7-multilaser-minnie-64gb-nb414_946124.webp')
            ],
        },

        {
            name: "Tablet 7 Multi Mickey 64Gb Nb413 - Preto ",
            image: require('../../Assets/Img/tablet-7-multilaser-mickey-64gb-nb413_946159.webp'),
            icoHeart,
            discountPrice: "R$ 299,99",
            installment: "R$ 30,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "40%",
            gallery: [
                require('../../Assets/Img/tablet-7-multilaser-mickey-64gb-nb413_946159.webp'),
                require('../../Assets/Img/tablet-7-multilaser-mickey-64gb-nb413_946462.webp'),
                require('../../Assets/Img/tablet-7-multilaser-mickey-64gb-nb413_946463.webp'),
                require('../../Assets/Img/tablet-7-multilaser-mickey-64gb-nb413_946464.webp'),
                require('../../Assets/Img/tablet-7-multilaser-mickey-64gb-nb413_946466.webp'),
            ],
        },

        {
            name: "Câmera Webcam Full Hd Brio 100 Logitech - Grafite ",
            image: require('../../Assets/Img/camera-webcam-full-hd-brio-100-logitech_968303.webp'),
            icoHeart,
            discountPrice: "R$ 149,99",
            installment: "R$ 15,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "",
            gallery: [
                require('../../Assets/Img/camera-webcam-full-hd-brio-100-logitech_968304.webp'),
                require('../../Assets/Img/camera-webcam-full-hd-brio-100-logitech_968305.webp'),
                require('../../Assets/Img/camera-webcam-full-hd-brio-100-logitech_968306.webp'),
            ],
        },

        {
            name: "Fone De Ouvido Bluetooth Handz Air Pro - Verde",
            image: require('../../Assets/Img/fone-de-ouvido-bluetooth-handz-air-pro_968523.webp'),
            icoHeart,
            discountPrice: "R$ 174,99",
            installment: "R$ 17,50",
            installments: "de 10x",
            hasInterest: false,
            discount: "",
            gallery: [
                require('../../Assets/Img/fone-de-ouvido-bluetooth-handz-air-pro_969407.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-handz-air-pro_969408.webp'),
            ],
        },



        {
            name: "Fone De Ouvido Bluetooth Händz Pods - FB-08",
            image: require('../../Assets/Img/fone-de-ouvido-bluetooth-handz-pods_970006.webp'),
            icoHeart,
            discountPrice: "R$ 49,99",
            installment: "R$ 5,00",
            installments: "de 5x",
            hasInterest: false,
            discount: "",
            gallery: [
                require('../../Assets/Img/fone-de-ouvido-bluetooth-handz-pods_970007.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-handz-pods_970008.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-handz-pods_970009.webp'),
            ],
        },

        {
            name: "Cabo Usb Tipo-C 1 Metro Motorola - Preto",
            image: require('../../Assets/Img/cabo-usb-tipo-c-1-metro-motorola_980529.webp'),
            icoHeart,
            discountPrice: "R$ 79,99",
            installment: "R$ 8,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "",
            gallery: [
                require('../../Assets/Img/cabo-usb-tipo-c-1-metro-motorola_980530.webp'),
                require('../../Assets/Img/cabo-usb-tipo-c-1-metro-motorola_980531.webp'),
            ],
        },

        {
            name: "Fone De Ouvido Motorola Earbuds 3Cs - Preto",
            image: require('../../Assets/Img/fone-de-ouvido-motorola-earbuds-3cs_984929.webp'),
            icoHeart,
            discountPrice: "R$ 79,99",
            installment: "R$ 8,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "",
            gallery: [
                require('../../Assets/Img/fone-de-ouvido-motorola-earbuds-3cs_984930.webp'),
                require('../../Assets/Img/fone-de-ouvido-motorola-earbuds-3cs_984931.webp'),
            ],
        },

        {
            name: "Mousepad Gamer Speed Flakes Power Flkmp001 Elg - Preto ",
            image: require('../../Assets/Img/mousepad-gamer-flakes-power-speed-elg-flkmp001_999935.webp'),
            icoHeart,
            discountPrice: "R$ 19,99",
            installment: "R$ 5,00",
            installments: "de 4x",
            hasInterest: false,
            discount: "",
            gallery: [
                require('../../Assets/Img/mousepad-gamer-flakes-power-speed-elg-flkmp001_999936.webp')
            ],
        },

        {
            name: "Kit Teclado E Mouse Logitech Com Fio Mk120 - Preto ",
            image: require('../../Assets/Img/kit-teclado-e-mouse-logitech-com-fio_1000340.webp'),
            icoHeart,
            discountPrice: "R$ 79,99",
            installment: "R$ 16,00",
            installments: "de 5x",
            hasInterest: false,
            discount: "",
            gallery: [
                require('../../Assets/Img/kit-teclado-e-mouse-logitech-com-fio_1000341.webp'),
                require('../../Assets/Img/kit-teclado-e-mouse-logitech-com-fio_1000342.webp'),
                require('../../Assets/Img/kit-teclado-e-mouse-logitech-com-fio_1000343.webp'),
            ],
        },

        {
            name: "Fone De Ouvido Bluetooth Jbl Tune Buds - Preto",
            image: require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-tune-buds_1001723.webp'),
            icoHeart,
            discountPrice: "R$ 199,99",
            installment: "R$ 20,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "60%",
            gallery: [
                require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-tune-buds_1001724.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-tune-buds_1001725.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-tune-buds_1001726.webp'),
            ],
        },

        {
            name: "Kit Teclado E Mouse Maxprint Exagon Sem Fio - Preto ",
            image: require('../../Assets/Img/kit-teclado-e-mouse-maxprint-exagon-sem-fio_1003414.webp'),
            icoHeart,
            discountPrice: "R$ 49,99",
            installment: "R$ 10,00",
            installments: "de 5x",
            hasInterest: false,
            discount: "",
            gallery: [
                require('../../Assets/Img/kit-teclado-e-mouse-maxprint-exagon-sem-fio_1003415.webp'),
                require('../../Assets/Img/kit-teclado-e-mouse-maxprint-exagon-sem-fio_1003416.webp'),
                require('../../Assets/Img/kit-teclado-e-mouse-maxprint-exagon-sem-fio_1003417.webp'),
                require('../../Assets/Img/kit-teclado-e-mouse-maxprint-exagon-sem-fio_1003418.webp'),

            ],
        },

        {
            name: "Kit Teclado E Mouse Maxprint Essential Com Fio",
            image: require('../../Assets/Img/kit-teclado-e-mouse-maxprint-essential-com-fio_1003421.webp'),
            icoHeart,
            discountPrice: "R$ 44,99",
            installment: "R$ 10,00",
            installments: "de 5x",
            hasInterest: false,
            discount: "",
            gallery: [
                require('../../Assets/Img/kit-teclado-e-mouse-maxprint-essential-com-fio_1003422.webp'),
                require('../../Assets/Img/kit-teclado-e-mouse-maxprint-essential-com-fio_1003423.webp'),
            ],
        },

        {
            name: "Kit Teclado E Mouse Maxprint Arteck Sem Fio - Preto ",
            image: require('../../Assets/Img/kit-teclado-e-mouse-maxprint-arteck-sem-fio_1003563.webp'),
            icoHeart,
            discountPrice: "R$ 74,99",
            installment: "R$ 11,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "",
            gallery: [
                require('../../Assets/Img/kit-teclado-e-mouse-maxprint-arteck-sem-fio_1003564.webp'),
                require('../../Assets/Img/kit-teclado-e-mouse-maxprint-arteck-sem-fio_1003565.webp'),
            ],
        },

        {
            name: "Carregador Portátil Power Bank Redmi ",
            image: require('../../Assets/Img/carregador-portatil-power-bank-redmi-10000mah_1012368.webp'),
            icoHeart,
            discountPrice: "R$ 101,99",
            installment: "R$ 11,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "40%",
            gallery: [
                require('../../Assets/Img/carregador-portatil-power-bank-redmi-10000mah_1012370.webp'),
                require('../../Assets/Img/carregador-portatil-power-bank-redmi-10000mah_1012371.webp'),
                require('../../Assets/Img/carregador-portatil-power-bank-redmi-10000mah_1012372.webp'),
                require('../../Assets/Img/carregador-portatil-power-bank-redmi-10000mah_1012373.webp'),
                require('../../Assets/Img/carregador-portatil-power-bank-redmi-10000mah_1012374.webp'),
            ],
        },

        {
            name: "Headset Gamer Jbl Quantum 100 M2 - Preto ",
            image: require('../../Assets/Img/headset-gamer-jbl-quantum-100-m2_1030059.webp'),
            icoHeart,
            discountPrice: "R$ 129,99",
            installment: "R$ 13,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "45%",
            gallery: [
                require('../../Assets/Img/headset-gamer-jbl-quantum-100-m2_1030060.webp'),
                require('../../Assets/Img/headset-gamer-jbl-quantum-100-m2_1030061.webp'),
                require('../../Assets/Img/headset-gamer-jbl-quantum-100-m2_1030062.webp'),
            ],
        },

        {
            name: "Fone De Ouvido Bluetooth Jbl Tune Flex - Preto ",
            image: require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-tune-flex_1035182.webp'),
            icoHeart,
            discountPrice: "R$ 332,99",
            installment: "R$ 33,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "45%",
            gallery: [
                require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-tune-flex_1035186.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-tune-flex_1035188.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-tune-flex_1035189.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-tune-flex_1035192.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-tune-flex_1035193.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-tune-flex_1035195.webp'),
            ],
        },

        {
            name: "Fone De Ouvido Bluetooth Tws Drop Pulse - Preto ",
            image: require('../../Assets/Img/fone-de-ouvido-bluetooth-tws-drop-pulse_1050416.webp'),
            icoHeart,
            discountPrice: "R$ 110,00",
            installment: "R$ 11,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "",
            gallery: [],
        },

        {
            name: "Carregador Portátil Power Bank Xiaomi 10000Mah - Branco ",
            image: require('../../Assets/Img/carregador-portatil-power-bank-xiaomi-10000mah_1052586.webp'),
            icoHeart,
            discountPrice: "R$ 100,00",
            installment: "R$ 10,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "",
            gallery: [],
        },

        {
            name: "",
            image: require('../../Assets/Img/multifuncional-epson-ecotank-l3250_894580.webp'),
            icoHeart,
            discountPrice: "R$ 780,00",
            installment: "R$ 78,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "35%",
            gallery: [],
        },

        {
            name: "Pen Drive Twist 128Gb Multilaser - Preto ",
            image: require('../../Assets/Img/pen-drive-multilaser-twist-128gb-pd591_731062.webp'),
            icoHeart,
            discountPrice: "R$ 99,99",
            installment: "R$ 10,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "",
            gallery: [],
        },

        {
            name: "Fone De Ouvido Bluetooth Sense 210 Waaw",
            image: require('../../Assets/Img/fone-de-ouvido-headphone-sense-210-bluetooth-autonomia-de-ate-40h_1010175.webp'),
            icoHeart,
            discountPrice: "R$ 130,00",
            installment: "R$ 13,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "35%",
            gallery: [],
        },

        {
            name: "Fone De Ouvido Earbuds 2 Motorola - Branco",
            image: require('../../Assets/Img/fone-de-ouvido-earbuds-2-motorola_467595.webp'),
            icoHeart,
            discountPrice: "R$ 15,00",
            installment: "R$ 5,00",
            installments: "de 3x",
            hasInterest: false,
            discount: "",
            gallery: [],
        },

        {
            name: "Fone De Ouvido Motorola Earbuds 2 - Preto",
            image: require('../../Assets/Img/fone-de-ouvido-motorola-earbuds-2_467611.webp'),
            icoHeart,
            discountPrice: "R$ 15,00",
            installment: "R$ 5,00",
            installments: "de 3x",
            hasInterest: false,
            discount: "",
            gallery: [],
        },

        {
            name: "Fone De Ouvido Pace 105 Motorola - Branco ",
            image: require('../../Assets/Img/fone-de-ouvido-pace-105-motorola_467927.webp'),
            icoHeart,
            discountPrice: "R$ 20,00",
            installment: "R$ 5,00",
            installments: "de 4x",
            hasInterest: false,
            discount: "",
            gallery: [],
        },

        {
            name: "Fone De Ouvido Motorola Earbuds 2 - Preto",
            image: require('../../Assets/Img/fone-de-ouvido-motorola-pace-105_467929.webp'),
            icoHeart,
            discountPrice: "R$ 30,00",
            installment: "R$ 6,00",
            installments: "de 5x",
            hasInterest: false,
            discount: "50%",
            gallery: [],
        },

        {
            name: "Mouse Logitech Mx Anywhere 3 Sem Fio - Rosa",
            image: require('../../Assets/Img/mouse-logitech-mx-anywhere-sem-fio_968264.webp'),
            icoHeart,
            discountPrice: "R$ 180,00",
            installment: "R$ 18,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "40%",
            gallery: [],
        },

        {
            name: "Impressora Hp Multifuncional Deskjet Ink Advantage 2874 - Bivolt",
            image: require('../../Assets/Img/impressora-hp-multifuncional-deskjet-ink-advantage-2874_968648.webp'),
            icoHeart,
            discountPrice: "R$ 250,00",
            installment: "R$ 25,00",
            installments: "de 10X",
            hasInterest: false,
            discount: "50%",
            gallery: [],
        },

        {
            name: "Mouse Maxprint Airy Sem Fio 1600 Dpi - Preto",
            image: require('../../Assets/Img/mochila-notebook-samsonite-american-tourister-new-highway_970111.webp'),
            icoHeart,
            discountPrice: "R$ 119,00",
            installment: "R$ 12,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "30%",
            gallery: [],
        },

        {
            name: "Mouse Maxprint Airy Sem Fio 1600 Dpi - Preto",
            image: require('../../Assets/Img/mouse-maxprint-airy-sem-fio-1600-dpi_1003695.webp'),
            icoHeart,
            discountPrice: "R$ 29,99",
            installment: "R$ 5,00",
            installments: "de 6x",
            hasInterest: false,
            discount: "",
            gallery: [],
        },

        {
            name: "Mouse Maxprint Officeeasy Com Fio 1200 Dpi - Preto",
            image: require('../../Assets/Img/mouse-maxprint-officeeasy-com-fio-1200-dpi_1029942.webp'),
            icoHeart,
            discountPrice: "R$ 15,00",
            installment: "R$ 5,00",
            installments: "de 3x",
            hasInterest: false,
            discount: "",
            gallery: [],
        },
        {
            name: "Teclado Oficeeasy Maxprint Com Fio",
            image: require('../../Assets/Img/teclado-oficeeasy-maxprint-com-fio_1027190.webp'),
            icoHeart,
            // originalPrice: "R$ 3.832,29",
            discountPrice: "R$ 29,99",
            // pixPrice: "R$ 3.449,57",
            installment: "de R$ 5,00",
            installments: "6x",
            hasInterest: false,
            discount: "10%",
            gallery: [],
        },
        {
            name: "Mochila Notebook Tonin Executiva 2058 - Preto ",
            image: require('../../Assets/Img/mochila-notebook-tonin-executiva-2058_1011518.webp'),
            icoHeart,
            // originalPrice: "R$ 7.264,25",
            discountPrice: "R$ 149,90",
            // pixPrice: "R$ 7.000,00",
            installment: "de R$ 14,99",
            installments: "10x",
            hasInterest: true,
            discount: "",
            gallery: [],
        },
        {
            name: "Mochila Notebook Tonin Executiva 2056 - Preto",
            image: require('../../Assets/Img/mochila-notebook-tonin-executiva-2056_1011473.webp'),
            icoHeart,
            // originalPrice: "R$ 1.537,65",
            discountPrice: "R$ 100,00",
            // pixPrice: "R$ 1.215,08",
            installment: "R$ 10,00",
            installments: "6x",
            hasInterest: true,
            discount: "5%",
            gallery: [],
        },
        {
            name: "Teclado Com Fio Maxprint Universitário - Preto ",
            image: require('../../Assets/Img/teclado-com-fio-maxprint-universitario_1001367.webp'),
            icoHeart,
            // originalPrice: "R$ 795,96",
            discountPrice: "R$ 29,99",
            // pixPrice: "R$ 673,36",
            installment: "de R$ 5",
            installments: "6x",
            hasInterest: false,
            discount: "",
            gallery: [],
        },
        {
            name: "Mochila Notebook Samsonite American Town ",
            image: require('../../Assets/Img/mochila-notebook-samsonite-american-town_970103.webp'),
            icoHeart,
            // originalPrice: "",
            discountPrice: "R$ 85",
            // pixPrice: "R$ 109.685,75",
            installment: "R$ 14,16",
            installments: "de 6x",
            hasInterest: false,
            discount: "",
            gallery: [],
        },
        {
            name: "Mochila Notebook Samsonite Ikonn I - Preto ",
            image: require('../../Assets/Img/mochila-notebook-samsonite-ikonn-i_968757.webp'),
            icoHeart,
            // originalPrice: "R$ 9.280,97",
            discountPrice: "R$ 200,00",
            // pixPrice: "R$ 7.093,92",
            installment: "R$ 36,66",
            installments: "de 6x",
            hasInterest: false,
            discount: "12%",
            gallery: [],
        },
        {
            name: "Mouse Maxprint Universitário Com Fio Preto ",
            image: require('../../Assets/Img/mouse-maxprint-universitario-com-fio_968741.webp'),
            icoHeart,
            // originalPrice: "R$ 6.635,15",
            discountPrice: "R$ 9,99",
            // pixPrice: "R$ 5.648,19",
            installment: "R$ 5,00",
            installments: "de 6x",
            hasInterest: false,
            discount: "",
            gallery: [],
        },
        {
            name: "Mochila Notebook Samsonite Ikonn Iii - ",
            image: require('../../Assets/Img/mochila-notebook-samsonite-ikonn-iii_941047.webp'),
            icoHeart,
            // originalPrice: "R$ 28.166,17",
            discountPrice: "R$ 220,00",
            // pixPrice: "R$ 23.549,55",
            installment: "R$ 22,00",
            installments: "de 6x",
            hasInterest: false,
            discount: "45%",
            gallery: [],
        },
        {
            name: "Mousepad Sense Control MPSC ELG Verde",
            image: require('../../Assets/Img/mousepad-gamer-logitech-g240_238324_1.webp'),
            icoHeart,
            // originalPrice: "R$ 28.166,17",
            discountPrice: "R$ 29,99",
            // pixPrice: "R$ 23.549,55",
            installment: "R$ 5,80",
            installments: "de 5x",
            hasInterest: false,
            discount: "20%",
            gallery: [],
        },
        {
            name: "Mousepad Gamer Logitech G240 Preto ",
            image: require('../../Assets/Img/mousepad-sense-control-mpsc-elg_274167_1.webp'),
            icoHeart,
            // originalPrice: "R$ 28.166,17",
            discountPrice: "R$ 69,99",
            // pixPrice: "R$ 23.549,55",
            installment: "R$ 13,99",
            installments: "de 5x",
            hasInterest: false,
            discount: "30%",
            gallery: [],
        },
        {
            name: "Carregador Wireless Tecnologia Qi Elg",
            image: require('../../Assets/Img/carregador-wireless-tecnologia-qi-elg_1032081.webp'),
            icoHeart,
            // originalPrice: "R$ 28.166,17",
            discountPrice: "R$ 89,99",
            // pixPrice: "R$ 23.549,55",
            installment: "R$ 17,80",
            installments: "de 5x",
            hasInterest: false,
            discount: "",
            gallery: [],
        },
        {
            name: "Mochila Notebook Tonin Executiva 2000 - Preto",
            image: require('../../Assets/Img/mochila-notebook-tonin-executiva-2000_1030007.webp'),
            icoHeart,
            // originalPrice: "R$ 28.166,17",
            discountPrice: "R$ 105,00",
            // pixPrice: "R$ 23.549,55",
            installment: "R$ 21,00",
            installments: "de 5x",
            hasInterest: false,
            discount: "30%",
            gallery: [],
        },
        {
            name: "Mochila Notebook Tonin Executiva 1964 - Preto",
            image: require('../../Assets/Img/mochila-notebook-tonin-executiva-1964_1029946.webp'),
            icoHeart,
            // originalPrice: "R$ 28.166,17",
            discountPrice: "R$ 105,00",
            // pixPrice: "R$ 23.549,55",
            installment: "R$ 21,00",
            installments: "de 5x",
            hasInterest: false,
            discount: "30%",
            gallery: [],
        },
        {
            name: "Mousepad Goliathus Cosmic Razer Speed Medium - Verde",
            image: require('../../Assets/Img/mousepad-goliathus-cosmic-razer-speed-medium_1005906.webp'),
            icoHeart,
            // originalPrice: "R$ 28.166,17",
            discountPrice: "R$ 29,99",
            // pixPrice: "R$ 23.549,55",
            installment: "R$ 5,80",
            installments: "de 5x",
            hasInterest: false,
            discount: "20%",
            gallery: [],
        },
        {
            name: "Mouse Multi Sem Fio Mo380 - Preto ",
            image: require('../../Assets/Img/mouse-multi-sem-fio-mo380_1000282.webp'),
            icoHeart,
            // originalPrice: "R$ 28.166,17",
            discountPrice: "R$ 49,99",
            // pixPrice: "R$ 23.549,55",
            installment: "R$ 5,00",
            installments: "de 5x",
            hasInterest: false,
            discount: "",
            gallery: [],
        },
        {
            name: "Mochila Notebook Samsonite American Tourister Bridge - Preto",
            image: require('../../Assets/Img/mochila-notebook-samsonite-american-tourister-bridge_970116.webp'),
            icoHeart,
            // originalPrice: "R$ 28.166,17",
            discountPrice: "R$ 105,00",
            // pixPrice: "R$ 23.549,55",
            installment: "R$ 21,00",
            installments: "de 5x",
            hasInterest: false,
            discount: "30%",
            gallery: [],
        },
        {
            name: "Mouse Sem Fio Multilaser Mo277 - Preto ",
            image: require('../../Assets/Img/mouse-sem-fio-multilaser-mo277_499554.webp'),
            icoHeart,
            // originalPrice: "R$ 28.166,17",
            discountPrice: "R$ 105,00",
            // pixPrice: "R$ 23.549,55",
            installment: "R$ 21,00",
            installments: "de 5x",
            hasInterest: false,
            discount: "30%",
            gallery: [],
        },
        {
            name: "Mouse Sem Fio Logitech M190 - Cinza ",
            image: require('../../Assets/Img/mouse-sem-fio-logitech-m190_430052.webp'),
            icoHeart,
            // originalPrice: "R$ 28.166,17",
            discountPrice: "R$ 69,99",
            // pixPrice: "R$ 23.549,55",
            installment: "R$ 7,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "",
            gallery: [],
        },
        {
            name: "Mini Mouse Wireless Logitech M185 - CINZA ",
            image: require('../../Assets/Img/mini-mouse-wireless-logitech-m185_93401.webp'),
            icoHeart,
            // originalPrice: "R$ 28.166,17",
            discountPrice: "R$ 69,99",
            // pixPrice: "R$ 23.549,55",
            installment: "R$ 7,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "",
            gallery: [],
        },
        {
            name: "Impressora Multifuncional Canon Fotográfica Megatank...",
            image: require('../../Assets/Img/impressora-multifuncional-fotografica-megatank-g610_1031972.webp'),
            icoHeart,
            // originalPrice: "R$ 28.166,17",
            discountPrice: "R$ 1199,92",
            // pixPrice: "R$ 23.549,55",
            installment: "R$ 120,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "20%",
            gallery: [],
        },
        {
            name: "Mousepad Gamer Logitech Tecido G G640 - Preto ",
            image: require('../../Assets/Img/mousepad-gamer-logitech-tecido-g-g640_1031937.webp'),
            icoHeart,
            // originalPrice: "R$ 28.166,17",
            discountPrice: "R$ 139,30",
            // pixPrice: "R$ 23.549,55",
            installment: "R$ 14,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "30%",
            gallery: [],
        },


    ];

    // Se um produto foi selecionado, renderiza ProductInspect
    if (selectedProduct) {
        return (
            <ProductInspect
                name={selectedProduct.name || ""}
                image={selectedProduct.image || ""}
                discountPrice={selectedProduct.discountPrice || ""}
                installment={selectedProduct.installment || ""}
                installments={selectedProduct.installments || ""}
                discount={selectedProduct.discount || ""}
                icoHeart={selectedProduct.icoHeart || ""}
                gallery={selectedProduct.gallery || []}
                description={selectedProduct.description || ""}
                onBack={() => setSelectedProduct(null)}
            />
        );
    }


    return (
        <div className="category-details">
            <CategorySide />
            <div className="product-section">
                {exampleProducts.map((product, index) => (
                    <ProductCard
                        key={index}
                        {...product}
                        description={product.description ?? []} // 🔥 Garante que sempre será um array
                        onClick={() => setSelectedProduct({ ...product, description: product.description ?? [] })}
                    />
                ))}

            </div>
        </div>
    );
};

export default CategoryDetails;
