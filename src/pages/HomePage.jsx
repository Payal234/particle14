import React from 'react'
import ServiceCard from '../component/ServiceCard'
import HeroSection from '../component/HeroSection'
import PageWrapper from "../component/PageWrapper";
import About from '../component/About';
import Contact from '../component/Contact';
import ServiceSection from '../component/ServiceSection';

const HomePage = () => {
  return (
    <PageWrapper>
    <HeroSection/>
    <About/>
    <ServiceSection/>
    <Contact/>
    </PageWrapper>
  )
}

export default HomePage
