import React from 'react';
import Hero from '../../components/Hero';
import Banner from '../../components/Banner';
import About from '../../components/About';
import EduFacilities from '../../components/EduFacilities';
import WhyChooseUs from '../../components/WhyChooseUs';
import {whyChooseUs} from '../../request/whyChooseUs';
import Staff from '../../components/staff';

const Landing = () => {
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

export default Landing;

