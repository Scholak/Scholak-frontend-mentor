import React, { useState } from 'react'
import styles from './Navbar.module.css'

import logo from '../images/logo.svg'
const Navbar = () => {
  
  const [active, setActive] = useState()

	const [background, setBackground] = useState()

  const handleToggleMenu = () => {
    setActive(!active)
  }

	window.addEventListener('scroll', () => {
		if(window.scrollY > 0) {
			setBackground(true)
		} else {
			setBackground(false)
		}
	})

  return (
		<nav
			className={`${active ? styles.active : ''} ${
				background ? styles.background : ''
			}`}
		>
			<h2>
				<img src={logo} alt='' />
			</h2>
			<ul className={styles.links}>
				<li>About</li>
				<li>Careers</li>
				<li>Events</li>
				<li>Products</li>
				<li>Support</li>
			</ul>
			{window.innerWidth < 768 ? <div></div> : ''}
			<div className={styles.burger} onClick={handleToggleMenu}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	)
}

export default Navbar
