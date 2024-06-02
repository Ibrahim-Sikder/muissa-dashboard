
import Banner from "@/components/ui/HomePage/Banner";
import CTA from "@/components/ui/HomePage/CTA";


import Footer from '@/components/shared/Footer/Footer';
import Services from '@/components/ui/HomePage/Services/Services';
import { Box, Button } from '@mui/material';
import React from 'react';
import Service from "@/components/ui/HomePage/Services/Service";

const Home = () => {
    return (
        <Box >
            <Banner/>
            <Service/>
            <CTA/>
            <Services/>
   
        </Box>
    );

};

export default Home;
