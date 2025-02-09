import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import CategorySide from '../CategorySide/CategorySide';
import './CategoryDetails.css';
import icoHeart from '../../Assets/Img/heart.png';

// Importando as imagens diretamente



interface CategoryDetailsProps {
    category?: string;
}

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ category }) => {
    const exampleProducts = [

        {
            name: "Kit Teclado e Mouse Wireless Logitech MK220",
            image: require('../../Assets/Img/kit-teclado-e-mouse-wireless-logitech-mk220_93412_1.webp'),
            icoHeart,
            discountPrice: "R$ 79,99",
            installment: "R$ 16,00",
            installments: "de 5x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Mouse Multilaser Com Fio Entrada Usb Mo255 - Preto",
            image: require('../../Assets/Img/mouse-multilaser-com-fio-entrada-usb-mo255_896844.webp'),
            icoHeart,
            discountPrice: "R$ 9,99",
            installment: "R$ 5,00",
            installments: "de 2x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Fone De Ouvido Wave Pfo02 Philco - Preto ",
            image: require('../../Assets/Img/fone-de-ouvido-wave-pfo02-philco_307785_1.webp'),
            icoHeart,
            discountPrice: "R$ 69,99",
            installment: "R$ 14,00",
            installments: "de 5x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Fone De Ouvido Bluetooth Händz Air - FB-03",
            image: require('../../Assets/Img/fone-de-ouvido-bluetooth-handz-air_785725.webp'),
            icoHeart,
            discountPrice: "R$ 119,99",
            installment: "R$ 12,00",
            installments: "de 10x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Fone De Ouvido Bluetooth T520 Jbl - Preto",
            image: require('../../Assets/Img/fone-de-ouvido-bluetooth-t520-jbl_845631.webp'),
            icoHeart,
            discountPrice: "R$ 149,99",
            installment: "R$ 15,00",
            installments: "de 10x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Teclado Com Fio Multilaser Soft Silence Tc144 - Preto ",
            image: require('../../Assets/Img/teclado-com-fio-multilaser-soft-silence-tc144_855016.webp'),
            icoHeart,
            discountPrice: "R$ 24,99",
            installment: "R$ 5,00",
            installments: "de 5x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Fone De Ouvido Bluetooth Jbl Wave Flex - Preto",
            image: require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-wave-flex_904462.webp'),
            icoHeart,
            discountPrice: "R$ 189,99",
            installment: "R$ 20,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "36%"
        },

        {
            name: "Impressora Hp Multifuncional Wi-Fi Bivolt ",
            image: require('../../Assets/Img/impressora-hp-multifuncional-wi-fi-smart-tank-583_940322.webp'),
            icoHeart,
            discountPrice: "R$ 620,00",
            installment: "R$ 62,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "38%"
        },

        {
            name: "Tablet 7 Multilaser Minnie 64Gb Nb414 - Preto",
            image: require('../../Assets/Img/tablet-7-multilaser-minnie-64gb-nb414_946117.webp'),
            icoHeart,
            discountPrice: "R$ 329,00",
            installment: "R$ 33,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "45%"
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
        },

        {
            name: "Câmera Webcam Full Hd Brio 100 Logitech - Grafite ",
            image: require('../../Assets/Img/camera-webcam-full-hd-brio-100-logitech_968303.webp'),
            icoHeart,
            discountPrice: "R$ 149,99",
            installment: "R$ 15,00",
            installments: "de 10x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Fone De Ouvido Bluetooth Handz Air Pro - Verde",
            image: require('../../Assets/Img/fone-de-ouvido-bluetooth-handz-air-pro_968523.webp'),
            icoHeart,
            discountPrice: "R$ 174,99",
            installment: "R$ 17,50",
            installments: "de 10x",
            hasInterest: false,
            discount: ""
        },



        {
            name: "Fone De Ouvido Bluetooth Händz Pods - FB-08",
            image: require('../../Assets/Img/fone-de-ouvido-bluetooth-handz-pods_970006.webp'),
            icoHeart,
            discountPrice: "R$ 49,99",
            installment: "R$ 5,00",
            installments: "de 5x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Cabo Usb Tipo-C 1 Metro Motorola - Preto",
            image: require('../../Assets/Img/cabo-usb-tipo-c-1-metro-motorola_980529.webp'),
            icoHeart,
            discountPrice: "R$ 79,99",
            installment: "R$ 8,00",
            installments: "de 10x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Fone De Ouvido Motorola Earbuds 3Cs - Preto",
            image: require('../../Assets/Img/fone-de-ouvido-motorola-earbuds-3cs_984929.webp'),
            icoHeart,
            discountPrice: "R$ 79,99",
            installment: "R$ 8,00",
            installments: "de 10x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Mousepad Gamer Speed Flakes Power Flkmp001 Elg - Preto ",
            image: require('../../Assets/Img/mousepad-gamer-flakes-power-speed-elg-flkmp001_999935.webp'),
            icoHeart,
            discountPrice: "R$ 19,99",
            installment: "R$ 5,00",
            installments: "de 4x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Kit Teclado E Mouse Logitech Com Fio Mk120 - Preto ",
            image: require('../../Assets/Img/kit-teclado-e-mouse-logitech-com-fio_1000340.webp'),
            icoHeart,
            discountPrice: "R$ 79,99",
            installment: "R$ 16,00",
            installments: "de 5x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Fone De Ouvido Bluetooth Jbl Tune Buds - Preto",
            image: require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-tune-buds_1001723.webp'),
            icoHeart,
            discountPrice: "R$ 199,99",
            installment: "R$ 20,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "60%"
        },

        {
            name: "Kit Teclado E Mouse Maxprint Exagon Sem Fio - Preto ",
            image: require('../../Assets/Img/kit-teclado-e-mouse-maxprint-exagon-sem-fio_1003414.webp'),
            icoHeart,
            discountPrice: "R$ 49,99",
            installment: "R$ 10,00",
            installments: "de 5x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Kit Teclado E Mouse Maxprint Essential Com ",
            image: require('../../Assets/Img/kit-teclado-e-mouse-maxprint-essential-com-fio_1003421.webp'),
            icoHeart,
            discountPrice: "R$ 44,99",
            installment: "R$ 10,00",
            installments: "de 5x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Kit Teclado E Mouse Maxprint Arteck Sem Fio - Preto ",
            image: require('../../Assets/Img/kit-teclado-e-mouse-maxprint-arteck-sem-fio_1003563.webp'),
            icoHeart,
            discountPrice: "R$ 74,99",
            installment: "R$ 11,00",
            installments: "de 10x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Carregador Portátil Power Bank Redmi ",
            image: require('../../Assets/Img/carregador-portatil-power-bank-redmi-10000mah_1012368.webp'),
            icoHeart,
            discountPrice: "R$ 101,99",
            installment: "R$ 11,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "40%"
        },

        {
            name: "Headset Gamer Jbl Quantum 100 M2 - Preto ",
            image: require('../../Assets/Img/headset-gamer-jbl-quantum-100-m2_1030059.webp'),
            icoHeart,
            discountPrice: "R$ 129,99",
            installment: "R$ 13,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "45%"
        },

        {
            name: "Fone De Ouvido Bluetooth Jbl Tune Flex - Preto ",
            image: require('../../Assets/Img/fone-de-ouvido-bluetooth-jbl-tune-flex_1035182.webp'),
            icoHeart,
            discountPrice: "R$ 332,99",
            installment: "R$ 33,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "45%"
        },

        {
            name: "Fone De Ouvido Bluetooth Tws Drop Pulse - Preto ",
            image: require('../../Assets/Img/fone-de-ouvido-bluetooth-tws-drop-pulse_1050416.webp'),
            icoHeart,
            discountPrice: "R$ 110,00",
            installment: "R$ 11,00",
            installments: "de 10x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Carregador Portátil Power Bank Xiaomi 10000Mah - Branco ",
            image: require('../../Assets/Img/carregador-portatil-power-bank-xiaomi-10000mah_1052586.webp'),
            icoHeart,
            discountPrice: "R$ 100,00",
            installment: "R$ 10,00",
            installments: "de 10x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "",
            image: require('../../Assets/Img/multifuncional-epson-ecotank-l3250_894580.webp'),
            icoHeart,
            discountPrice: "R$ 780,00",
            installment: "R$ 78,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "35%"
        },

        {
            name: "Pen Drive Twist 128Gb Multilaser - Preto ",
            image: require('../../Assets/Img/pen-drive-multilaser-twist-128gb-pd591_731062.webp'),
            icoHeart,
            discountPrice: "R$ 99,99",
            installment: "R$ 10,00",
            installments: "de 10x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Fone De Ouvido Bluetooth Sense 210 Waaw",
            image: require('../../Assets/Img/fone-de-ouvido-headphone-sense-210-bluetooth-autonomia-de-ate-40h_1010175.webp'),
            icoHeart,
            discountPrice: "R$ 130,00",
            installment: "R$ 13,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "35%"
        },

        {
            name: "Fone De Ouvido Earbuds 2 Motorola - Branco",
            image: require('../../Assets/Img/fone-de-ouvido-earbuds-2-motorola_467595.webp'),
            icoHeart,
            discountPrice: "R$ 15,00",
            installment: "R$ 5,00",
            installments: "de 3x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Fone De Ouvido Motorola Earbuds 2 - Preto",
            image: require('../../Assets/Img/fone-de-ouvido-motorola-earbuds-2_467611.webp'),
            icoHeart,
            discountPrice: "R$ 15,00",
            installment: "R$ 5,00",
            installments: "de 3x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Fone De Ouvido Pace 105 Motorola - Branco ",
            image: require('../../Assets/Img/fone-de-ouvido-pace-105-motorola_467927.webp'),
            icoHeart,
            discountPrice: "R$ 20,00",
            installment: "R$ 5,00",
            installments: "de 4x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Fone De Ouvido Motorola Earbuds 2 - Preto",
            image: require('../../Assets/Img/fone-de-ouvido-motorola-pace-105_467929.webp'),
            icoHeart,
            discountPrice: "R$ 30,00",
            installment: "R$ 6,00",
            installments: "de 5x",
            hasInterest: false,
            discount: "50%"
        },

        {
            name: "Mouse Logitech Mx Anywhere 3 Sem Fio - Rosa",
            image: require('../../Assets/Img/mouse-logitech-mx-anywhere-sem-fio_968264.webp'),
            icoHeart,
            discountPrice: "R$ 180,00",
            installment: "R$ 18,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "40%"
        },

        {
            name: "Impressora Hp Multifuncional Deskjet Ink Advantage 2874 - Bivolt",
            image: require('../../Assets/Img/impressora-hp-multifuncional-deskjet-ink-advantage-2874_968648.webp'),
            icoHeart,
            discountPrice: "R$ 250,00",
            installment: "R$ 25,00",
            installments: "de 10X",
            hasInterest: false,
            discount: "50%"
        },

        {
            name: "Mouse Maxprint Airy Sem Fio 1600 Dpi - Preto",
            image: require('../../Assets/Img/mochila-notebook-samsonite-american-tourister-new-highway_970111.webp'),
            icoHeart,
            discountPrice: "R$ 119,00",
            installment: "R$ 12,00",
            installments: "de 10x",
            hasInterest: false,
            discount: "30%"
        },

        {
            name: "Mouse Maxprint Airy Sem Fio 1600 Dpi - Preto",
            image: require('../../Assets/Img/mouse-maxprint-airy-sem-fio-1600-dpi_1003695.webp'),
            icoHeart,
            discountPrice: "R$ 29,99",
            installment: "R$ 5,00",
            installments: "de 6x",
            hasInterest: false,
            discount: ""
        },

        {
            name: "Mouse Maxprint Officeeasy Com Fio 1200 Dpi - Preto",
            image: require('../../Assets/Img/mouse-maxprint-officeeasy-com-fio-1200-dpi_1029942.webp'),
            icoHeart,
            discountPrice: "R$ 15,00",
            installment: "R$ 5,00",
            installments: "de 3x",
            hasInterest: false,
            discount: ""
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
            discount: "10%"
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
            discount: ""
        }, {
            name: "Mochila Notebook Tonin Executiva 2056 - Preto",
            image: require('../../Assets/Img/mochila-notebook-tonin-executiva-2056_1011473.webp'),
            icoHeart,
            // originalPrice: "R$ 1.537,65",
            discountPrice: "R$ 100,00",
            // pixPrice: "R$ 1.215,08",
            installment: "R$ 10,00",
            installments: "6x",
            hasInterest: true,
            discount: "5%"
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
            discount: ""
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
            discount: ""
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
            discount: "12%"
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
            discount: ""
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
            discount: "45%"
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
            discount: "20%"
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
            discount: "30%"
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
            discount: ""
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
            discount: "30%"
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
            discount: "30%"
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
            discount: "20%"
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
            discount: ""
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
            discount: "30%"
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
            discount: "30%"
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
            discount: ""
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
            discount: ""
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
            discount: "20%"
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
            discount: "30%"
        },


    ];

    return (
        <div className="category-details">
            <CategorySide />
            <div className="product-section">
                {exampleProducts.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </div>
    );
};

export default CategoryDetails;
