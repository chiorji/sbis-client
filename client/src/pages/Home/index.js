import React from 'react';
import Hero from '../../components/Hero';
import NavBar from '../../components/Nav';
import Banner from '../../components/Banner';
import About from '../../components/About';
import EduFacilities from '../../components/EduFacilities';
import WhyChooseUs from '../../components/WhyChooseUs';
import {whyChooseUs} from '../../request/whyChooseUs';
import Staff from '../../components/staff';
import Footer from '../../components/Footer';

const Landing = () => {
  return (
    <>
      <Hero>
        <NavBar />
        <Banner />
      </Hero>
      <About />
      <EduFacilities/>
      <WhyChooseUs data={whyChooseUs} />
      <Staff />
      <Footer/>
    </>
  );
};

export default Landing;

