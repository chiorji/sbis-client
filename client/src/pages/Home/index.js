import React from 'react';
import Hero from '../../components/Hero';
import NavBar from '../../components/Nav';
import Banner from '../../components/Banner';
import About from '../../components/About';

const Landing = () => {
  return (
    <Hero>
      <NavBar />
      <Banner />
      <About />
    </Hero>
  );
};

export default Landing;

