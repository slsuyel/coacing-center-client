import React from "react";
import Slider from "react-slick";

const items = [
    {
        src: 'https://udvash.com/media/Images/UDVASH/SuccessSlider/Med22Top18Success1.png',
        altText: 'Slide 1',
        key: 1,
    },
    {
        src: 'https://udvash.com/media/Images/UDVASH/SuccessSlider/DU22Success.png',
        altText: 'Slide 2',
        key: 2,
    },
    {
        src: 'https://udvash.com/media/Images/UDVASH/SuccessSlider/CKRUET22Success.png',
        altText: 'Slide 3',
        key: 3,
    },
];

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        // Enable autoplay
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
            // Add more responsive breakpoints and settings as needed
        ]
    };

    return (
        <div className="mt-5 pt-2">

            <Slider {...settings}>
                {items.map(item => (
                    <div key={item.key}>
                        <img src={item.src} alt={item.altText} className="img-fluid w-100" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Hero;
