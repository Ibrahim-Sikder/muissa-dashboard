import React from 'react';
import './HeroSection.css';
import hero from '../../../../assets/banner/slider.png';
import Container from '../Container/Container';
import Image from 'next/image';
import { Button } from '@mui/material';

const HeroSection = () => {
    return (
        <div className='heroSectionWrap'>
            <Container>
                <div className="heroContentWraps">
                    <div className="heroContent">
                        <div className="bannerImgWrap">
                            <Image width={500} src={hero} alt='banner' />
                        </div>
                        <div className='space-y-5'>
                            <h1>We Create</h1>
                            <h2 className='mt-5 text-[#1591A3]'>Efficiancy </h2>
                            <p className='mt-5'>In all your form of business</p>
                            <Button
                                sx={{
                                    width: '200px',
                                    height: '50px',
                                    borderRadius: '30px',
                                    background: '#1591A3'
                                }}
                            >
                                Request to Muissa
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HeroSection;
