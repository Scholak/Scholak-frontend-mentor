import React from 'react'
import styles from './HeroSection.module.css'
import imgHeroMobile from '../images/mobile/image-hero.jpg'
import imgHeroDesktop from '../images/desktop/image-hero.jpg'

const HeroSection = () => {
  return (
		<div>
			<div className={styles.container}>
				<img
					src={window.innerWidth < 768 ? imgHeroMobile : imgHeroDesktop}
					alt='hero image'
					className={styles.heroImg}
				/>
        <h1 className={styles.heading}>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
			</div>
		</div>
	)
}

export default HeroSection
