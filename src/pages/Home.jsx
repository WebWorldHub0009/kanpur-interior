import React from 'react'
import HeroSection from '../components/HeroSection'
import About from "../components/About"
import WhyChooseUs from '../components/WhyChooseUs'
import WhatWeDo from '../components/WhatWeDo'
import StatsSection from '../components/StatsCounter'
import PartnersMarquee from '../components/PartnersMarquee'
// import ProductSlider from '../components/ServiceSection'
import ServicesSection from '../components/ServiceSection'
import Faq from "../components/Faq"


const Home = () => {
  return (
    <>
    <HeroSection/>
    <WhatWeDo/>
    <About/>
    <WhyChooseUs/>
    <ServicesSection/>
    <PartnersMarquee/>
    <StatsSection/>
    <Faq/>
    </>
  )
}

export default Home