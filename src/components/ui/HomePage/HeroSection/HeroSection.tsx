'use client';

import React from 'react';
import './HeroSection.css';
import hero from '../../../../assets/banner/slider2.png';
import hero2 from '../../../../assets/banner/slider2.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Button } from '@mui/material';
import Image from 'next/image';

const HeroSection = () => {
    const slides = [
        {
            id: 1,
            img: hero,
            title: 'Leading with',
            subtitle: 'knowledge',
            description: 'In all your form of business'
        },
        {
            id: 2,
            img: hero2,
            title: 'Empowering ',
            subtitle: 'Vision',
            description: 'With innovative solutions'
        }
    ];

    return (
        <div className='heroSectionWrap'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                speed={1000}
                loop={true} 
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <div className="heroContentWraps">
                            <div className="bannerImgWrap">
                                <Image src={slide.img} alt='banner' />
                            </div>
                            <div className="heroContent">
                                <div className='space-y- md:space-y-5'>
                                    <h1 className="animate-fadeInRight">{slide.title}</h1>
                                    <h2 className='md:mt-5 text-[#1591A3] animate-fadeInLeft'>{slide.subtitle}</h2>
                                    <p className='mb-2 md:mb-0 md:mt-5 animate-fadeInRight'>{slide.description}</p>
                                    <Button
                                       sx={{
                                        width: { md: '200px', xs: '140px' },
                                        height: { md: '50px', xs: '35px' },
                                        fontSize: { md: '16px', xs: '9px' },
                                        borderRadius: '30px',
                                        background: '#1591A3',
                                      }}
                                    >
                                        Request to Muissa
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSection;
