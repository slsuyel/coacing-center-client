import React from "react";
import { useEffect } from "react";
import Slider from "react-slick";

const items = [
    {
        src: 'https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-6/354083137_779413950543880_1895874329705925764_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGesjMl-aoif6mlFOhTrlnmiSYI_iD-cxqJJgj-IP5zGg7n_l-NUME8KFJE7wF-mVgrnfRoKpoPzEJ9ZBMnZoyY&_nc_ohc=MdnyuHcpSloAX--Dbs-&_nc_zt=23&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfAbPFBG-H3ESgNC3L3-6li_TnOCWMcmoP_gZiwfub4L2A&oe=64D3DCE1',
        altText: 'Slide 1',
        key: 1,
    },
    {
        src: 'https://scontent.fjsr1-2.fna.fbcdn.net/v/t39.30808-6/320070818_2573011569518920_3978755925781149069_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeE4Yxog47s7VcTzWmeiWfD0-CRi73KYdqj4JGLvcph2qKxAYp4SRGmN0rTAJmZAbZP1lblKUO6Bv7p9KXp76p3u&_nc_ohc=s7-jmXwSRVAAX9IzCi3&_nc_zt=23&_nc_ht=scontent.fjsr1-2.fna&oh=00_AfBWaKcnJl-nkrmzkuTkFJbD7mTBdts3fTYej-mPEED3qA&oe=64D4BF3B',
        altText: 'Slide 2',
        key: 2,
    },
    {
        src: 'https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-6/315063236_2377050069114177_4071620005494946706_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeG63xttWpsPrCtBgeRW1t9XPgLtP4ZJANQ-Au0_hkkA1J-ZG6EYmAzcCuVs3K5Za4-fNTIIKWLAzsjGVavB0Bae&_nc_ohc=50UPl6ENjoIAX9V1vLW&_nc_zt=23&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfDV37YsZKu160Td0DU4lWBr1k-4_U-1nvgra20lbg2AwQ&oe=64D57B49',
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
            <div style={{ width: '98%' }} className="mx-auto container-fluid">

                <Slider {...settings}>
                    {items.map(item => (
                        <div key={item.key}>
                            <img src={item.src} alt={item.altText} className="img-fluid w-100" />
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
};

export default Hero;
