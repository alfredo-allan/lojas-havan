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
                // require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-wave-flex_904462.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-wave-flex_904463.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-wave-flex_904464.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-wave-flex_904465.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-wave-flex_904466.webp')
            ],
            description: [
                {
                    "content": "JBL Deep Bass Sound"
                },
                {
                    "content": "Aproveite ao máximo seus mixes com áudio de alta qualidade nos fones de ouvido seguros e confiáveis com drivers de 12 mm e som JBL Deep Bass."
                },
                {
                    "content": "Ajuste confortável"
                },
                {
                    "content": "O design ergonômico do stick aberto do JBL Wave Flex se encaixa tão confortavelmente que você pode esquecer que está usando. O design de stick aberto permite que você aproveite todo o som sem bloquear seu canal auditivo."
                },
                {
                    "content": "Bateria com até 32h (8h + 24h) de duração e carregamento rápido"
                },
                {
                    "content": "Com até 8 horas de duração da bateria nos fones de ouvido e até 24 no estojo, o JBL Wave Flex oferece áudio o dia todo. E quando precisar de mais energia, você pode acelerar o carregamento para mais duas horas de reprodução em apenas 10 minutos."
                },
                {
                    "content": "Headphone bluetooth com cancelamento de ruído"
                },
                {
                    "content": "Leve seu som para todos os lugares. Com graves que você pode sentir, até 32 horas de bateria e um design seguro, confortável de stick aberto, o JBL Wave Flex é resistente a respingos e poeira foi projetado para o seu entretenimento diário. Quer você esteja andando pelas ruas da cidade ou relaxando na praia, suas chamadas viva voz estéreo serão sempre nítidas, enquanto a tecnologia Smart Ambient mantém você ciente dos arredores. E quando precisar de um impulso extra, você pode acelerar a carga com duas horas adicionais de reprodução em apenas 10 minutos."
                },
                {
                    "content": "Características"
                },
                {
                    "content": "Driver: 12mm."
                },
                {
                    "content": "Sensibilidade do Driver a 1kHz1mW: 105dB."
                },
                {
                    "content": "Resposta de Frequência Dinâmica: 20Hz – 20kHz."
                },
                {
                    "content": "Impedância de entrada: 16ohms."
                },
                {
                    "content": "Versão do Bluetooth: 5.2."
                },
                {
                    "content": "Perfis bluetooth: A2DP V1.3, AVRCP V1.6, HFP V1.7."
                },
                {
                    "content": "Potência de emissão de bluetooth: <13 dBm."
                },
                {
                    "content": "Tempo de carregamento bateria: 2 horas."
                },
                {
                    "content": "Tempo máximo de jogo: 32 horas."
                },
                {
                    "content": "Classificação IPX: IP54."
                },
                {
                    "content": "Sensibilidade ao Ambiente: Sim."
                },
                {
                    "content": "Microfone integrado: Sim."
                },
                {
                    "content": "Chamada Sem Utilizar as Mãos: Sim."
                },
                {
                    "content": "Controle sensível ao toque: Sim."
                },
                {
                    "content": "True Wireless: Sim."
                },
                {
                    "content": "Resistente à Água: Sim."
                },
                {
                    "content": "Carregamento rápido: Sim."
                },
                {
                    "content": "Especificações Técnicas"
                },
                {
                    "content": "Marca: JBL."
                },
                {
                    "content": "Modelo: Wave Flex."
                },
                {
                    "content": "Dimensão aproximada embalagem (LxAxC): 8,5cm x 2,5cm x 12,8cm."
                },
                {
                    "content": "Peso Fone: 7,6g."
                },
                {
                    "content": "Peso Caixa carga: 35g."
                },
                {
                    "content": "Conteúdo da Embalagem:"
                },
                {
                    "content": "Fones de ouvido JBL Wave Flex, 1x estojo de carregamento, 1x cabo de recarga USB-C."
                },
                {
                    "content": "Garantia Fornecedor: 01 ano (contra defeitos de fabricação)."
                }
            ]
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
            description:
                [
                    {
                        "content": "A impressora de tanque inteligente e conectada"
                    },
                    {
                        "content": "Aproveite a confiabilidade rotineira da impressora multifuncional sem fio HP Smart Tank 583 que proporciona a qualidade HP que você espera e a economia que você precisa. Venha já conferir."
                    },
                    {
                        "content": "Características"
                    },
                    {
                        "content": "Impressão"
                    },
                    {
                        "content": "Tecnologia de impressão: HP Thermal Inkjet."
                    },
                    {
                        "content": "Velocidade de impressão: Preto (ISO): Até 12 ppm; Cor (ISO): Até 5 ppm; Saída da primeira página preto: Até 14 segundos; Saída da primeira página em cores: Velocidade máxima 21 seg.; Preto rascunho (A4): Até 22 ppm; Rascunho a cores (A4): Até 16 ppm."
                    },
                    {
                        "content": "Resolução de impressão Preto (Melhor): Até 1200 x 1200 dpi renderizados; Cor (Melhor): Até 4800 x 1200 dpi otimizados em cores (quando imprimir a partir de um computador) e 1200 dpi de entrada."
                    },
                    {
                        "content": "Tintas para impressoras: 4 (1 cada frasco de preto, conjunto 3 frascos de cores)."
                    },
                    {
                        "content": "Impressão sem margens: Sim (até 8,5 x 11 polegadas, 210 x 297 mm)."
                    },
                    {
                        "content": "Digitalização"
                    },
                    {
                        "content": "Tipo de digitalização / Tecnologia de digitalização: Somente mesa / Sensor de imagem por contato (contact image sensors - CIS)."
                    },
                    {
                        "content": "Resolução da digitalização: Hardware: Até 1200 x 1200 dpi; Ótica: Até 1200 dpi."
                    },
                    {
                        "content": "Formatos dos arquivos digitalizados: JPEG; PDF."
                    },
                    {
                        "content": "Modos de entrada de digitalização: Copiar; Software HP; EWS."
                    },
                    {
                        "content": "Tamanho máximo do scanner: Base plana: 216 x 297 mm."
                    },
                    {
                        "content": "Características padrão transmissão digital: Digitalizar para arquivo (pelo software); HP Smart Tasks."
                    },
                    {
                        "content": "Cópia"
                    },
                    {
                        "content": "Velocidade de cópia Preto (ISO): Até 10 cpm; Cor (ISO): Até 2 com."
                    },
                    {
                        "content": "Resolução de cópia Preto (textos e gráficos): Até 1200 dpi; Até 1200 dpi; Cor (texto e gráficos): Até 1200 x 1200 dpi de velocidade reduzida."
                    },
                    {
                        "content": "Número máximo de cópias: Até 99 cópias."
                    },
                    {
                        "content": "Definições de copiadora: Número de cópias, redimensionar, qualidade, mais claro/mais escuro, tamanho do papel, tipo de papel, cópia de identidade, aprimoramento."
                    },
                    {
                        "content": "Conexões e especificações"
                    },
                    {
                        "content": "Conectividade padrão: 1 USB 2.0 de alta velocidade (dispositivo); 1 porta Wi-Fi 802.11b/g/n; 1 Wi-Fi Direct."
                    },
                    {
                        "content": "Capacidades de rede: Sim (via WiFi)."
                    },
                    {
                        "content": "Capacidade sem fios: Sim, Wi-Fi 2.4G incorporado, Wi-Fi Direct."
                    },
                    {
                        "content": "Capacidade de impressão móvel: Aplicativo HP Smart; Apple AirPrint; Plug-in de serviço de impressão HP (impressão Android); Wi-Fi Direct Printing."
                    },
                    {
                        "content": "Memória Padrão: 64 MB DDR1 integrado; Máximo: 64 MB."
                    },
                    {
                        "content": "Velocidade do processador: 980 MHz."
                    },
                    {
                        "content": "Ciclo de trabalho: Mensalmente, A4: Até 3.000 páginas."
                    },
                    {
                        "content": "Volume mensal de páginas recomendado: 400 a 800."
                    },
                    {
                        "content": "Tipos de mídia suportados: Papel comum, papéis foscos para folhetos, papéis brilhantes para folhetos, papéis fotográficos, envelopes."
                    },
                    {
                        "content": "Tamanhos de mídia suportados: A4; B5; A6; Envelope DL, ofício."
                    },
                    {
                        "content": "Especificações Técnicas"
                    },
                    {
                        "content": "Marca: HP."
                    },
                    {
                        "content": "Modelo: Smart Tank 583."
                    },
                    {
                        "content": "Dimensão do produto (LxAxP): 43,4cm x 15,7cm x 36,1cm."
                    },
                    {
                        "content": "Dimensão da embalagem (LxAxP): 43,4cm x 25,9cm x 58cm."
                    },
                    {
                        "content": "Peso produto: 5kg."
                    },
                    {
                        "content": "Conteúdo da Embalagem:"
                    },
                    {
                        "content": "Impressora multifuncional HP Smart Tank 583, Frasco de tinta original HP GT53XL preto (135 ml), Frasco de tinta original HP GT52 ciano (50 ml), Frasco de tinta original HP GT52 magenta (50 ml), Frasco de tinta original HP GT52 amarelo (50 ml), Cabeçote de impressão HP Smart Tank, Guia de configuração, Guia de referência, Panfleto de cuidados com a tinta, Panfleto regulamentar, Panfleto de garantia, Cabo de alimentação."
                    },
                    {
                        "content": "Garantia do Fornecedor: 1 ano (contra defeito de fabricação)."
                    }
                ]
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
                // require('../../Assets/Img/tablet-7-multilaser-minnie-64gb-nb414_946118.webp'),
                require('../../Assets/Img/tablet-7-multilaser-minnie-64gb-nb414_946119.webp'),
                require('../../Assets/Img/tablet-7-multilaser-minnie-64gb-nb414_946120.webp'),
                require('../../Assets/Img/tablet-7-multilaser-minnie-64gb-nb414_946123.webp'),
                require('../../Assets/Img/tablet-7-multilaser-minnie-64gb-nb414_946124.webp')
            ],
            description: [
                {
                    "content": "Com o Tablet Minnie Multi a diversão nunca tem fim!"
                },
                {
                    "content": "Desenvolvido com Memória RAM de 4GB* + 64GB de Armazenamento interno e um Super Processador Quad-Core de 1.6GHz, Você pode jogar, ver vídeos, navegar na internet e muito mais, tudo isso ao mesmo tempo e sem travamentos ou lentidão, devido ao sistema operacional Android 13 (GO EDITION) que permite turbinar seu tablet com milhares de aplicativos no Google Play."
                },
                {
                    "content": "Além disso, os pais podem ficar tranquilos já que o Tablet do Minnie possui um sistema de Controle Parental que permite à criança utilizar o tablet com muito mais segurança!"
                },
                {
                    "content": "O Seu tablet da Minnie possui o Google Kids Space, que é um ambiente seguro e divertido. Desenvolvido pela Google, o Google Kids Space proporciona inúmeros conteúdos educacionais e de entretenimento, para que voce possa aproveitar o seu tablet de maneira divertida e criativa!"
                },
                {
                    "content": "* O seu Tablet Minnie possui memória virtual. A memória virtual expande a capacidade da memória RAM do dispositivo, permitindo que o tablet utilize uma parte da Memória de Armazenamento como memória RAM, melhorando a performance do Tablet."
                },
                {
                    "content": "*Indicado para +3 anos. Vem com case emborrachado que permite ajuste de ângulo facilitando o uso do seu pequeno!"
                },
                {
                    "content": "Características"
                },
                {
                    "content": "Sistema operacional e processador"
                },
                {
                    "content": "Sistema Operacional: Android 13."
                },
                {
                    "content": "Processador: Quad-Core."
                },
                {
                    "content": "Memória"
                },
                {
                    "content": "Memória: 2GB interno + 2GB Virtual Ram."
                },
                {
                    "content": "Tela"
                },
                {
                    "content": "Tamanho da Tela: 7\" Polegadas."
                },
                {
                    "content": "Câmera Frontal: 2MP."
                },
                {
                    "content": "Armazenamento"
                },
                {
                    "content": "Armazenamento: 64GB."
                },
                {
                    "content": "Conectividade"
                },
                {
                    "content": "Wi-Fi: Sim."
                },
                {
                    "content": "Conexão: USB/USB-C."
                },
                {
                    "content": "Bateria"
                },
                {
                    "content": "Bateria: 2.800mAh."
                },
                {
                    "content": "Especificações Técnicas"
                },
                {
                    "content": "Marca: Multilaser."
                },
                {
                    "content": "Modelo: Minnie NB414."
                },
                {
                    "content": "Dimensões do Produto (LxAxC): 11,6cm x 1,3cm x 19,1cm."
                },
                {
                    "content": "Peso: 500g."
                },
                {
                    "content": "Conteúdo da Embalagem:"
                },
                {
                    "content": "1x Tablet, 1x Cabo USB-C, 1x Carregador, 1x Guia rápido e 1x Case de silicone da Minnie."
                },
                {
                    "content": "Garantia do Fornecedor: 1 ano (contra defeitos de fabricação)."
                }
            ]
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
                // require('../../Assets/Img/tablet-7-multilaser-mickey-64gb-nb413_946159.webp'),
                require('../../Assets/Img/tablet-7-multilaser-mickey-64gb-nb413_946462.webp'),
                require('../../Assets/Img/tablet-7-multilaser-mickey-64gb-nb413_946463.webp'),
                require('../../Assets/Img/tablet-7-multilaser-mickey-64gb-nb413_946464.webp'),
                require('../../Assets/Img/tablet-7-multilaser-mickey-64gb-nb413_946466.webp'),
            ],
            description: [
                {
                    "content": "Com o Tablet Mickey Multi a diversão nunca tem fim!"
                },
                {
                    "content": "Desenvolvido com Memória RAM de 4GB* + 64GB de Armazenamento interno e um Super Processador Quad-Core, você pode jogar, ver vídeos, navegar na internet e muito mais, tudo isso ao mesmo tempo e sem travamentos ou lentidão, devido ao sistema operacional Android 13 (GO EDITION) que permite turbinar seu tablet com milhares de aplicativos no Google Play."
                },
                {
                    "content": "Além disso, os pais podem ficar tranquilos já que o Tablet do Mickey possui um sistema de Controle Parental que permite à criança utilizar o tablet com muito mais segurança!"
                },
                {
                    "content": "O Seu tablet do Mickey possui o Google Kids Space, que é um ambiente seguro e divertido. Desenvolvido pela Google, o Google Kids Space proporciona inúmeros conteúdos educacionais e de entretenimento, para que você possa aproveitar o seu tablet de maneira divertida e criativa!"
                },
                {
                    "content": "* O seu Tablet Mickey possui memória virtual. A memória virtual expande a capacidade da memória RAM do dispositivo, permitindo que o tablet utilize uma parte da Memória de Armazenamento como memória RAM, melhorando a performance do Tablet."
                },
                {
                    "content": "*Indicado para +3 anos. Vem com case emborrachado que permite ajuste de ângulo facilitando o uso do seu pequeno!"
                },
                {
                    "content": "Características"
                },
                {
                    "content": "Sistema operacional e processador"
                },
                {
                    "content": "Sistema Operacional: Android 13."
                },
                {
                    "content": "Processador: Quad-Core."
                },
                {
                    "content": "Memória"
                },
                {
                    "content": "Memória: 2GB interno + 2GB Virtual Ram."
                },
                {
                    "content": "Tela"
                },
                {
                    "content": "Tamanho da Tela: 7\" Polegadas."
                },
                {
                    "content": "Câmera Frontal: 2MP."
                },
                {
                    "content": "Armazenamento"
                },
                {
                    "content": "Armazenamento: 64GB."
                },
                {
                    "content": "Conectividade"
                },
                {
                    "content": "Wi-Fi: Sim."
                },
                {
                    "content": "Conexão: USB/USB-C."
                },
                {
                    "content": "Bateria"
                },
                {
                    "content": "Bateria: 2.800mAh."
                },
                {
                    "content": "Especificações Técnicas"
                },
                {
                    "content": "Marca: Multi."
                },
                {
                    "content": "Modelo: Mickey NB413."
                },
                {
                    "content": "Dimensões do Produto (LxAxC): 11,6cm x 1,3cm x 19,1cm."
                },
                {
                    "content": "Peso: 500g."
                },
                {
                    "content": "Conteúdo da Embalagem:"
                },
                {
                    "content": "1x Tablet, 1x Cabo USB-C, 1x Carregador, 1x Guia rápido e 1x Case de silicone do Mickey."
                },
                {
                    "content": "Garantia do Fornecedor: 1 ano (contra defeitos de fabricação)."
                }
            ]
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
            ], description: [
                {
                    "content": "Imagem mais nítida, mais clara e mais precisa"
                },
                {
                    "content": "Suas chamadas de vídeo em Full HD, equilíbrio de iluminação automática, microfone integrado e protetor de privacidade. Graças a sua resolução Full HD 1080p você tem melhor clareza e nitidez nas suas reuniões e chamadas de vídeo. A webcam Logitech Brio 100 conta também com tecnologia RightLight, que aumenta o brilho em até 50%, reduzindo sombras para que você tenha sempre a melhor aparência possível."
                },
                {
                    "content": "Cuidadosamente desenhada para o seu trabalho em casa, a proteção de privacidade integrada proporciona maior confiabilidade para a sua segurança, após uma reunião ou até mesmo quando o dia de trabalho terminar, basta deslizar o obturador e pronto. A Brio 100 traz um microfone mono embutido que permite que você seja sempre ouvido de maneira clara. Com sua conexão via cabo USB-A e Plug-and-Play a Brio 100 é compatível com as principais plataformas de chamadas, como: Microsoft Teams, Google Meet, Zoom. Confira!"
                },
                {
                    "content": "Características"
                },
                {
                    "content": "1080p/30 fps (1920 x 1080 pixels)."
                },
                {
                    "content": "720p/30 fps (1280x720 pixels)."
                },
                {
                    "content": "Megapixels da câmera: 2MP."
                },
                {
                    "content": "Tipo de foco: foco fixo."
                },
                {
                    "content": "Tecnologia de lente: lente de quatro camadas personalizada com revestimento antirreflexo."
                },
                {
                    "content": "Comprimento do cabo: 1,5 metros."
                },
                {
                    "content": "Compatibilidade"
                },
                {
                    "content": "Windows."
                },
                {
                    "content": "MacOS."
                },
                {
                    "content": "ChromeOS."
                },
                {
                    "content": "Porta USB."
                },
                {
                    "content": "Especificações técnicas"
                },
                {
                    "content": "Marca: Logitech."
                },
                {
                    "content": "Modelo: Webcam Brio 100."
                },
                {
                    "content": "Conteúdo da embalagem"
                },
                {
                    "content": "01 Webcam Brio 100."
                },
                {
                    "content": "01 Documentação do usuário."
                },
                {
                    "content": "Garantia do fornecedor: 1 ano (contra defeitos de fabricação)."
                }
            ]

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
                require('../../Assets/Img/fone-de-ouvido-bluetooth-handz-air-pro_968523.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-handz-air-pro_969407.webp'),
                require('../../Assets/Img/fone-de-ouvido-bluetooth-handz-air-pro_969408.webp'),
            ],
            description:
                [
                    {
                        "content": "Este é novo produto Handz, o Fone Handz Air Pro. E ele está pronto para viver grandes histórias com você. E sabe o que é melhor? Foi produzido com alta tecnologia e resistência para durar mais. Sem contar o design moderno e elegante. Para chegar neste produto, buscamos inspiração na adrenalina, é ela que nos move. E vamos continuar trabalhando para isso. Para oferecer produtos que gostaríamos de usar. Produtos carregados de tudo aquilo que acreditamos."
                    },
                    {
                        "content": "Poluição sonora? Não sob o meu comando. Venho equipado com tecnologia Active Noise Cancelling (ANC) e Environmental Noise Cancellation (ENC) de primeira linha, conte comigo para bloquear os ruídos sonoros do mundo e permitir que você mergulhe de cabeça na sua música preferida. Afinal, amigo é pra isso!"
                    },
                    {
                        "content": "Características"
                    },
                    {
                        "content": "Resposta de frequência: 20Hz-20KHz."
                    },
                    {
                        "content": "Sensibilidade: 1,5dB a 1KHz."
                    },
                    {
                        "content": "Impedância do alto-falante: 320."
                    },
                    {
                        "content": "Feito em ABS reciclado."
                    },
                    {
                        "content": "Microfone acoplado."
                    },
                    {
                        "content": "Bluetooth 5.3."
                    },
                    {
                        "content": "Cancelamento Ativo de Ruído (ANC)."
                    },
                    {
                        "content": "Cancelamento de ruído ambiental (ENC)."
                    },
                    {
                        "content": "Capacidade da caixa de carga: 300mAh."
                    },
                    {
                        "content": "Capacidade de carga dos fones de ouvido: 30mAh."
                    },
                    {
                        "content": "Tempo de reprodução: 4-5 horas."
                    },
                    {
                        "content": "Tempo de carregamento: 1-2 horas."
                    },
                    {
                        "content": "Alcance do Bluetooth: até 10 metros."
                    },
                    {
                        "content": "Acompanha cabo Type C para carregamento."
                    },
                    {
                        "content": "Especificações Técnicas"
                    },
                    {
                        "content": "Marca: Handz."
                    },
                    {
                        "content": "Modelo: Air Pro."
                    },
                    {
                        "content": "Conteúdo da Embalagem"
                    },
                    {
                        "content": "1 Fone Handz Air Pro."
                    },
                    {
                        "content": "Garantia Fornecedor: 1 ano (contra defeitos de fabricação)."
                    },
                    {
                        "content": "Imagem meramente ilustrativa."
                    }
                ]
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
            description: [
                {
                    "content": "Pronto para embarcar nessa jornada musical sustentável com os Händz Pods? O som impecável e a pegada ecológica fazem deles a escolha perfeita para os amantes de música que também se preocupam com o futuro do nosso planeta. Imagine ter um amigo sonoro sempre ao seu lado, pronto para embarcar em todas as suas aventuras auditivas. Feito com plástico reciclado, cada Handz Pod é uma pequena contribuição para um planeta mais verde."
                },
                {
                    "content": "E o som? Ah, o som é simplesmente espetacular!"
                },
                {
                    "content": "Caracteristicas"
                },
                {
                    "content": "Frequência: 20Hz-20KHz."
                },
                {
                    "content": "Sensibilidade: 100db3dB a 1KHz."
                },
                {
                    "content": "Distância efetiva: 10m."
                },
                {
                    "content": "Bateria dos fones de ouvido: 30mAh."
                },
                {
                    "content": "Bateria do estojo de carregamento: 150mAh."
                },
                {
                    "content": "Tempo de Reprodução: 3-4 horas."
                },
                {
                    "content": "Tempo de carregamento: cerca de 1-2 horas."
                },
                {
                    "content": "Especificações Técnicas"
                },
                {
                    "content": "Marca: Handz."
                },
                {
                    "content": "Modelo: FB-08."
                },
                {
                    "content": "Garantia Fornecedor: 01 Ano (contra defeitos de fabricação)."
                },
                {
                    "content": "Imagem meramente ilustrativa."
                }
            ]
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
                require('../../Assets/Img/cabo-usb-tipo-c-1-metro-motorola_980529.webp'),
                require('../../Assets/Img/cabo-usb-tipo-c-1-metro-motorola_980530.webp'),
                require('../../Assets/Img/cabo-usb-tipo-c-1-metro-motorola_980531.webp'),
            ],
            description: [
                {
                    "content": "O Cabo USB Tipo-C de 1 metro da Motorola é um acessório essencial para quem busca eficiência e praticidade no carregamento e transferência de dados. Com 1 metro de comprimento, oferece flexibilidade e alcance adequados para uso em diversas situações, seja no escritório, em casa ou no carro. A ponta Tipo-C é compatível com uma ampla gama de dispositivos modernos, garantindo uma conexão segura e estável. Fabricado com materiais de alta qualidade, este cabo é durável e resistente, suportando o desgaste diário. Ideal para quem precisa de um carregamento rápido e confiável, além de uma sincronização eficiente de dados."
                },
                {
                    "content": "Características"
                },
                {
                    "content": "Comprimento: 1 metro."
                },
                {
                    "content": "Cor: Preto."
                },
                {
                    "content": "Especificações Técnicas"
                },
                {
                    "content": "Marca: Motorola."
                },
                {
                    "content": "Modelo: Tipo C."
                },
                {
                    "content": "Conteúdo da Embalagem"
                },
                {
                    "content": "1 Cabo Tipo-C."
                },
                {
                    "content": "Garantia do Fornecedor: 1 ano (contra defeitos de fabricação)."
                }
            ]
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
                require('../../Assets/Img/fone-de-ouvido-motorola-earbuds-3cs_984929.webp'),
                require('../../Assets/Img/fone-de-ouvido-motorola-earbuds-3cs_984930.webp'),
                require('../../Assets/Img/fone-de-ouvido-motorola-earbuds-3cs_984931.webp'),
            ],
            description: [
                {
                    "content": "Qualidade do som HD"
                },
                {
                    "content": "Possui drivers de 9,4 mm, que garantem uma experiência de som cristalina. A porta de graves integrada oferece graves profundos, proporcionando uma rica experiência de som."
                },
                {
                    "content": "Design ergonômico"
                },
                {
                    "content": "O tubo acústico angular proporciona um ajuste confortável. Acompanha pares extras de borracha protetora para garantir um ajuste personalizado."
                },
                {
                    "content": "Chamadas viva voz"
                },
                {
                    "content": "Com um microfone embutido, alterne facilmente entre música e chamadas telefônicas."
                },
                {
                    "content": "Características"
                },
                {
                    "content": "Entradas Conector USB-C."
                },
                {
                    "content": "Microfone para chamadas viva-voz."
                },
                {
                    "content": "Conector de áudio de 135° para maior durabilidade."
                },
                {
                    "content": "Isolamento passivo de ruído com borracha intra-auricular."
                },
                {
                    "content": "Controle de play pausa."
                },
                {
                    "content": "Cabo de 1,2 metros."
                },
                {
                    "content": "Driver dos Alto-falantes de 9.4mm."
                },
                {
                    "content": "Especificações Técnicas"
                },
                {
                    "content": "Marca: Motorola."
                },
                {
                    "content": "Modelo: Earbuds 3C-S BL."
                },
                {
                    "content": "Conteúdo da Embalagem"
                },
                {
                    "content": "01 Fone de ouvido Earbuds 3C-S BL."
                },
                {
                    "content": "Garantia do Fornecedor: 01 Ano (contra defeito de fabricação)."
                }
            ]
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
            description: [
                {
                    "content": "A Havan apresenta o Mousepad Speed Flakes Power da marca Elg, ideal para gamers exigentes que buscam precisão e desempenho. Fabricado em tecido de alta densidade, proporciona máxima precisão nos movimentos. Sua superfície de baixa fricção é perfeita para mouses de alta resolução, garantindo uma experiência suave e responsiva."
                },
                {
                    "content": "Com a tecnologia Photoptimized, este mousepad maximiza a performance de sensores ópticos e laser. As bordas possuem costura reforçada que não desfia, e a trama otimizada oferece um balanço perfeito entre os eixos, essencial para jogadas rápidas e precisas. A base de borracha com textura antiderrapante assegura firmeza mesmo durante movimentos intensos e rápidos."
                },
                {
                    "content": "O Mousepad Speed Flakes Power é ultra slim, com apenas 3mm de espessura, proporcionando conforto e estilo ao seu setup. Suas dimensões de 36 cm x 30 cm x 0,3 cm são ideais para garantir espaço e controle total em suas partidas. Escolha o Mousepad Speed Flakes Power da Elg e eleve seu desempenho nos jogos!"
                },
                {
                    "content": "Características:"
                },
                {
                    "content": "Fabricado em tecido de alta densidade para máxima precisão de movimentos;"
                },
                {
                    "content": "Superfície de baixa fricção, ideal para mouses de alta resolução;"
                },
                {
                    "content": "Tecnologia Photoptimized para extrair o máximo de sensores ópticos e laser;"
                },
                {
                    "content": "Possui bordas com costura perfeita que não desfiam;"
                },
                {
                    "content": "Trama otimizada para perfeito balanço entre eixos."
                },
                {
                    "content": "Base em borracha com textura antiderrapante, mesmo em movimentos fortes e rápidos;"
                },
                {
                    "content": "Ultra slim: 3mm de espessura;"
                },
                {
                    "content": "Dimensões de 36 cm x 30 cm x 0,3 cm."
                },
                {
                    "content": "Especificações técnicas"
                },
                {
                    "content": "Marca: Elg."
                },
                {
                    "content": "Modelo: FLKMP001 - Flakes Power."
                },
                {
                    "content": "Conteúdo Da Embalagem:"
                },
                {
                    "content": "01 Mousepad Gamer Speed FLKMP001 Flakes Power Elg."
                },
                {
                    "content": "Garantia do Fornecedor: 02 Anos (contra defeitos de Fabricação)."
                }
            ]

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
            description: [
                {
                    "content": "Uma dupla resistente que combina conforto, elegância e simplicidade. Seu conforto está garantido com este teclado em layout ABNT2 e graças às silenciosas teclas de baixo perfil com tamanho padrão, teclas F e teclado numérico. Com um design de baixo perfil e resistente a derramamento, teclas resistentes e suportes de inclinação ajustáveis, este teclado não tem apenas um aspecto e funcionamento agradáveis foi feito para durar. Além disso, possui teclas de fácil leitura. O mouse óptico de alta definição oferece conforto e controle com rastreamento suave e preciso e um formato ambidestro. A instalação é simples basta ligar o teclado e o mouse às portas USB."
                },
                {
                    "content": "Elegância robusta"
                },
                {
                    "content": "O teclado delgado não é apenas elegante  tem um design resistente a derramamentos, suportes inclináveis robustos e teclas duráveis."
                },
                {
                    "content": "Percurso suave"
                },
                {
                    "content": "Você fará movimentos suaves com um mouse óptico preciso de alta definição para ajudar a concluir tarefas."
                },
                {
                    "content": "Digitação silenciosa e confortável"
                },
                {
                    "content": "Você desfrutará de uma confortável e silenciosa experiência de digitação graças às teclas de perfil baixo que praticamente não emitem som e ao layout padrão com teclas F em tamanho normal e teclado numérico."
                },
                {
                    "content": "Design resistente a derramamentos"
                },
                {
                    "content": "Líquidos derramados são escoados do teclado, por isso não é preciso se preocupar com arruinar seu investimento com derramamentos acidentais. Testado em condições limitadas (máximo derramamento de líquido de 60 ml). Não mergulhe o teclado em líquido."
                },
                {
                    "content": "Rastreamento óptico de alta definição"
                },
                {
                    "content": "Você desfrutará de um controle sensível e suave do cursor com o rastreamento óptico de alta definição (1000 dpi)."
                },
                {
                    "content": "Perfil fino"
                },
                {
                    "content": "O teclado tem um perfil fino que acrescenta um elegante aspecto à escrivaninha e ao mesmo tempo mantém suas mãos em uma posição neutra mais confortável."
                },
                {
                    "content": "Teclas duráveis"
                },
                {
                    "content": "As teclas podem durar até dez milhões de pressionamentos de modo que você continuará a digitar muito tempo depois de vários teclados ficarem inutilizáveis. Exclui a tecla Num Lock."
                },
                {
                    "content": "Suportes inclináveis, robustos e ajustáveis"
                },
                {
                    "content": "Você pode estender os robustos suportes articuláveis para aumentar a inclinação do teclado em oito graus, conforme suas necessidades ergonômicas."
                },
                {
                    "content": "Conexões USB plug-and-play"
                },
                {
                    "content": "A configuração é simples — basta conectar o teclado e o mouse a portas USB no computador de mesa, laptop ou notebook e começar a usá-los."
                },
                {
                    "content": "Teclas fáceis de ler Padrão ABNT2"
                },
                {
                    "content": "Os caracteres brancos brilhantes facilitam a leitura das teclas e são perfeitos para quem tem uma visão menos do que perfeita. E também são mais resistentes ao desgaste."
                },
                {
                    "content": "Barra de espaço curva"
                },
                {
                    "content": "Mantém suas mãos em uma posição mais natural, para uma digitação mais confortável."
                },
                {
                    "content": "Características"
                },
                {
                    "content": "Resistente ao derramamento de líquido."
                },
                {
                    "content": "Conectividade plug-and-play."
                },
                {
                    "content": "Conexão: Com Fio."
                },
                {
                    "content": "Layout do Teclado: ABNT2."
                },
                {
                    "content": "Mouse em tamanho normal."
                },
                {
                    "content": "Rastreamento óptico de alta definição."
                },
                {
                    "content": "Conexão USB plug-and-play."
                },
                {
                    "content": "Nenhuma instalação de software."
                },
                {
                    "content": "Especificações técnicas"
                },
                {
                    "content": "Marca: Logitech."
                },
                {
                    "content": "Modelo: MK120 (920-004429)."
                },
                {
                    "content": "Conteúdo da embalagem"
                },
                {
                    "content": "01 Mouse, 01 Teclado."
                },
                {
                    "content": "Garantia do fornecedor: 03 Anos (contra defeitos de fabricação)."
                }
            ]
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
            description: [
                {
                    "content": "Fone de Ouvido Bluetooth JBL Tune Buds oferece uma experiência sonora excepcional com a reconhecida qualidade de áudio JBL. Esses fones são projetados para proporcionar conforto durante o uso prolongado, graças ao seu design ergonômico e leve. Com conectividade Bluetooth 5.3, os JBL Tune Buds garantem uma conexão estável e sem interrupções com seus dispositivos. Os controles integrados nos fones permitem fácil gerenciamento de músicas e chamadas, e a tecnologia de cancelamento de ruído passivo ajuda a bloquear sons indesejados do ambiente, aprimorando a experiência auditiva. Com um design moderno o JBL Tune Buds é ideal para quem procura praticidade, estilo e excelente qualidade de som em um único produto."
                },
                {
                    "content": "Características"
                },
                {
                    "content": "Áudio"
                },
                {
                    "content": "Frequência: 20 Hz – 20 kHz."
                },
                {
                    "content": "Impedância: 32 Ohms."
                },
                {
                    "content": "Sensibilidade:101 dB SPL."
                },
                {
                    "content": "Alto falantes: 10 mm."
                },
                {
                    "content": "Microfone"
                },
                {
                    "content": "Sensibilidade: -38 dBV/Pa a 1 kHz."
                },
                {
                    "content": "Conectividade"
                },
                {
                    "content": "Bluetooth: Sim 5.3."
                },
                {
                    "content": "Bateria"
                },
                {
                    "content": "Tempo de carregamento: 2 horas."
                },
                {
                    "content": "Bateria: Até 12 horas fones / 36 horas estojo de carregamento."
                },
                {
                    "content": "Indicador de nível: Sim."
                },
                {
                    "content": "Especificações Técnicas"
                },
                {
                    "content": "Marca: JBL."
                },
                {
                    "content": "Modelo: Tune."
                },
                {
                    "content": "Dimensões do Produto (LxAxP): 4,9cm x 6cm x 2,9cm."
                },
                {
                    "content": "Peso: 164g."
                },
                {
                    "content": "Conteúdo da Embalagem"
                },
                {
                    "content": "01 fone de ouvido JBL Tune Buds, 01 estojo para recarga, 01 cabo de recarga USB-C."
                },
                {
                    "content": "Garantia do Fornecedor: 01 Ano (contra defeito de fabricação)."
                }
            ]

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
            descrition: [
                {
                    "content": "O Kit Exagon da MaxPrint, além de unir um custo x beneficio e um design office, contando com 107 teclas com padrão ABNT2, mouse com 1200DPI, faz a junção perfeita de ferramentas que otimizem seu dia a dia no trabalho ou em casa de forma fácil e completa."
                },
                {
                    "content": "Características"
                },
                {
                    "content": "Compatibilidade: Windows XP/Vista/7 e Superior/MAC."
                },
                {
                    "content": "Conexão wireless 2.4G por nano receptor."
                },
                {
                    "content": "Pilhas não inclusas (2 AAA + 1 AA)."
                },
                {
                    "content": "Teclas: 107."
                },
                {
                    "content": "Padrão ABNT2."
                },
                {
                    "content": "Tipo Membrana."
                },
                {
                    "content": "Distancia de funcionamento: 10 m."
                },
                {
                    "content": "1200 DPI."
                },
                {
                    "content": "Sensor: 8650."
                },
                {
                    "content": "Mouse com 3 botões."
                },
                {
                    "content": "Especificações técnicas"
                },
                {
                    "content": "Marca: Maxprint."
                },
                {
                    "content": "Modelo: Exgon (60000146)."
                },
                {
                    "content": "Dimensões do Mouse (LxAxP): 6,0cm x 3,5cm x 10cm."
                },
                {
                    "content": "Peso mouse: 400g."
                },
                {
                    "content": "Dimensões do teclado (LxAxP): 14,2cm x 2,6cm x 46cm."
                },
                {
                    "content": "Peso do produto teclado: 600g."
                },
                {
                    "content": "Conteúdo da embalagem"
                },
                {
                    "content": "01 Mouse, 01 Teclado."
                },
                {
                    "content": "Garantia do fornecedor: 1 ano (contra defeitos de fabricação)."
                }
            ]
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
