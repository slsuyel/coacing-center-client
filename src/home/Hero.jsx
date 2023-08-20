import React from "react";
import { useEffect } from "react";
import Slider from "react-slick";

const items = [
    {
        src: 'https://plus.unsplash.com/premium_photo-1663090752502-1f38cea3be4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        altText: 'Slide 1',
        key: 1,
    },
    {
        src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        altText: 'Slide 2',
        key: 2,
    },
    {
        src: 'https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        key: 3,
    },
];




const Hero = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        // Enable autoplay
        autoplaySpeed: 2000,
        // pauseOnHover: true,
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
        <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" className="mt-3 pt-2 w-100 mx-auto container-fluid">
            <div style={{ width: '98%',height : '100%' }} className="mx-auto container-fluid">

                <Slider {...settings}>
                    {items.map(item => (
                        <div key={item.key}>
                            <img src={item.src} alt={item.altText} className="img-fluid w-100" style={{ height: '' }} />
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
};

export default Hero;
