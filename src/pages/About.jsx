import React from 'react'
import Testimonials from "../components/Testimonials"
import OurTeam from '../components/OurTeam'
import PartnersMarquee from '../components/PartnersMarquee'
import Faq from "../components/Faq"
import AboutHero from '../components/HeroAbout'
import HowItWork from "../components/HowItWork"
import VisionMission from '../components/VissionMission'

const About = () => {
  return (
   <>
   <AboutHero/>
   <HowItWork/>
   <VisionMission/>
   <Testimonials/>
   <PartnersMarquee/>
   <OurTeam/>
   <Faq/>
   </>
  )
}

export default About