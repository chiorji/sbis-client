import React from 'react';
import Hero from '../../Components/Home/Hero';
import Banner from '../../Components/Home/Banner';
import About from '../../Components/Home/About';
import EduFacilities from '../../Components/Home/EduFacilities';
import WhyChooseUs from '../../Components/Home/WhyChooseUs';
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

