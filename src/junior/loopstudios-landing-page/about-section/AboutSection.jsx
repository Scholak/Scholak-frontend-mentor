import React from 'react'
import styles from './AboutSection.module.css'
import imgInteractiveMobile from '../images/mobile/image-interactive.jpg'
import imgInteractiveDesktop from '../images/desktop/image-interactive.jpg'

const AboutSection = () => {
  return (
		<section>
			<div className={styles.imgWrapper}>
				<img
					src={
						window.innerWidth < 768
							? imgInteractiveMobile
							: imgInteractiveDesktop
					}
					alt='interactive image'
				/>
			</div>
			<div className={styles.textWrapper}>
				<h3 className='section-title'>THE LEADER IN INTERACTIVE VR</h3>
				<p className='section-text'>
					Founded in 2011, Loopstudios has been producing world-class virtual
					reality profects for some of the best companies around the globe. Our
					award-winning creations have transformed businesses through digital
					experiences that bind to their brand.
				</p>
			</div>
		</section>
	)
}

export default AboutSection
