import Footer from '@/components/shared/Footer/Footer';
import { Box, Button } from '@mui/material';
import React from 'react';

const Home = () => {
    return (
        <Box className='text-center'>
            <h4>Welcome to MUISSA </h4>
            <Button>Click me </Button>
            <Footer/>
        </Box>
    );
};

export default Home;