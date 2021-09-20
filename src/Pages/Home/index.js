import React from 'react';
import loadable from '@loadable/component';

import { whyChooseUs } from '../../request/whyChooseUs';

const Hero = loadable(() => import('Components/Home/Hero'));
const Banner = loadable(() => import('Components/Home/Banner'));
const About = loadable(() => import('Components/Home/About'));
const EduFacilities = loadable(() => import('Components/Home/EduFacilities'));
const WhyChooseUs = loadable(() => import('Components/Home/WhyChooseUs'));
const Staff = loadable(() => import('Components/Staff'));
const Gallery = loadable(() => import('Components/Gallery'));

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
      <Gallery />
    </>
  );
};

export default Home;

