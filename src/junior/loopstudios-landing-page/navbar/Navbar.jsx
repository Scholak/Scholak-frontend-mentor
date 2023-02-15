import React, { useState } from 'react'
import styles from './Navbar.module.css'

import logo from '../images/logo.svg'
const Navbar = () => {
  
  const [active, setActive] = useState()

  const handleToggleMenu = () => {
    setActive(!active)
  }

  return (
		<nav className={active ? styles.active : ''}>
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
