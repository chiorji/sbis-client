import React from 'react';
import Hero from '../../Components/Hero';
import Banner from '../../Components/Banner';
import About from '../../Components/About';
import EduFacilities from '../../Components/EduFacilities';
import WhyChooseUs from '../../Components/WhyChooseUs';
import { whyChooseUs } from '../../request/whyChooseUs';
import Staff from '../../Components/Staff';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner />
      </Hero>
      <About />
      <EduFacilities/>
      <WhyChooseUs data={whyChooseUs} />
      <Staff />
    </>
  );
};

export default Home;

