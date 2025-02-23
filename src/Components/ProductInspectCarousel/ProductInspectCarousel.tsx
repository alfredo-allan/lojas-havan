import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductInspectCarousel.css';

interface ProductInspectCarouselProps {
    gallery: string[];
    selectedImage: string;
    setSelectedImage: (image: string) => void;
}

const ProductInspectCarousel: React.FC<ProductInspectCarouselProps> = ({ gallery, selectedImage, setSelectedImage }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Ativa o carrossel apenas em telas menores que 768px
                settings: {
                    arrows: false,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className="product-inspect-carousel">
            <Slider {...settings}>
                {gallery.map((img, index) => (
                    <div key={index} className={`carousel-slide ${selectedImage === img ? 'selected' : ''}`} onClick={() => setSelectedImage(img)}>
                        <img src={img} alt={`Imagem ${index + 1}`} className="carousel-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProductInspectCarousel;
