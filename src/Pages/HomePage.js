import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Layout/Header';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import Classes from '../components/Home/Classes';
import Trainers from '../components/Home/Trainers';
import Membership from '../components/Home/Membership';
import Footer from '../components/Layout/Footer';

const HomePage = () => {
  return (
    <Box sx={{ background: '#0f172a', minHeight: '100vh' }}>
      <Header />
      <Hero />
      <Features />
      <Classes />
      <Trainers />
      <Membership />
      <Footer />
    </Box>
  );
};

export default HomePage;