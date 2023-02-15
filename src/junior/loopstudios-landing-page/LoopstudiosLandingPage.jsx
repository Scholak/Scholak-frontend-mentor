import React from 'react'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import HeroSection from './hero-section/HeroSection'
import AboutSection from './about-section/AboutSection'
import ProjectsSection from './creators-section/ProjectsSection'
import './style.css'

const LoopstudiosLandingPage = () => {
  return (
		<div>
			<Navbar />
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<Footer />
		</div>
	)
}

export default LoopstudiosLandingPage
