import React from 'react';
import Hero from '../../components/Hero';
import NavBar from '../../components/Nav';
import Banner from '../../components/Banner';
import About from '../../components/About';
import EduFacilities from '../../components/EduFacilities';

const Landing = () => {
  return (
    <>
      <Hero>
        <NavBar />
        <Banner />
      </Hero>
      <About />
      <EduFacilities/>
    </>
  );
};

export default Landing;

