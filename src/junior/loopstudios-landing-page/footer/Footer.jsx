import React from 'react'
import styles from './Footer.module.css'
import logo from '../images/logo.svg'

import {
	FaFacebookSquare,
	FaTwitter,
	FaPinterest,
	FaInstagram,
} from 'react-icons/fa'

const Footer = () => {
  return (
		<footer>
			<div className={styles.left}>
				<h2><img src={logo} alt="" /></h2>
				<ul className={styles.links}>
					<li>About</li>
					<li>Careers</li>
					<li>Events</li>
					<li>Products</li>
					<li>Support</li>
				</ul>
			</div>
			<div className={styles.right}>
				<div className={styles.socialIcons}>
					<FaFacebookSquare />
					<FaTwitter />
					<FaPinterest />
					<FaInstagram />
				</div>
				<p className={styles.copyright}>
					&copy; Loopstudios. All rights reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
