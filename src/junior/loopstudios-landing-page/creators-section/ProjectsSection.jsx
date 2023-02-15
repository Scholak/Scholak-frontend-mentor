import React from 'react'
import styles from './ProjectsSection.module.css'

import deepEarthMobile from '../images/mobile/image-deep-earth.jpg'
import nightArcadeMobile from '../images/mobile/image-night-arcade.jpg'
import soccerTeamMobile from '../images/mobile/image-soccer-team.jpg'
import gridMobile from '../images/mobile/image-grid.jpg'
import fromAboveMobile from '../images/mobile/image-from-above.jpg'
import pocketBorealisMobile from '../images/mobile/image-pocket-borealis.jpg'
import curiosityMobile from '../images/mobile/image-curiosity.jpg'
import fisheyeMobile from '../images/mobile/image-fisheye.jpg'

import deepEarthDesktop from '../images/desktop/image-deep-earth.jpg'
import nightArcadeDesktop from '../images/desktop/image-night-arcade.jpg'
import soccerTeamDesktop from '../images/desktop/image-soccer-team.jpg'
import gridDesktop from '../images/desktop/image-grid.jpg'
import fromAboveDesktop from '../images/desktop/image-from-above.jpg'
import pocketBorealisDesktop from '../images/desktop/image-pocket-borealis.jpg'
import curiosityDesktop from '../images/desktop/image-curiosity.jpg'
import fisheyeDesktop from '../images/desktop/image-fisheye.jpg'

const Projects = () => {
	const projects = {
		mobile: [
			{ title: 'DEEP EARTH', img: deepEarthMobile },
			{ title: 'NIGHT ARCADE', img: nightArcadeMobile },
			{ title: 'SOCCER TEAM VR', img: soccerTeamMobile },
			{ title: 'THE GRID', img: gridMobile },
			{ title: 'FROM UP ABOVE VR', img: fromAboveMobile },
			{ title: 'POCKET BOREALIS', img: pocketBorealisMobile },
			{ title: 'THE CURIOSITY', img: curiosityMobile },
			{ title: 'MAKE IT FISHEYE', img: fisheyeMobile },
		],
		desktop: [
			{ title: 'DEEP EARTH', img: deepEarthDesktop },
			{ title: 'NIGHT ARCADE', img: nightArcadeDesktop },
			{ title: 'SOCCER TEAM VR', img: soccerTeamDesktop },
			{ title: 'THE GRID', img: gridDesktop },
			{ title: 'FROM UP ABOVE VR', img: fromAboveDesktop },
			{ title: 'POCKET BOREALIS', img: pocketBorealisDesktop },
			{ title: 'THE CURIOSITY', img: curiosityDesktop },
			{ title: 'MAKE IT FISHEYE', img: fisheyeDesktop },
		],
	}
	return (
		<section>
			<h3 className='section-title'>OUR CREATIONS</h3>
			<div className={styles.projectArea}>
				{projects[window.innerWidth < 768 ? 'mobile' : 'desktop'].map(
					(project, index) => (
						<div className={styles.project} key={index}>
							<div className={styles.overlay}>
								<p className={styles.projectTitle}>{project.title}</p>
							</div>
							<img
								src={project.img}
								alt='project image'
								className={styles.projectImg}
							/>
						</div>
					)
				)}
			</div>
			<button className={styles.seeAllBtn}>SEE ALL</button>
		</section>
	)
}

export default Projects
