import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './AdviceGeneratorApp.module.css'
import iconDice from './images/icon-dice.svg'
import patternDividerMobileSVG from './images/pattern-divider-mobile.svg'
import patternDividerDesktopSVG from './images/pattern-divider-desktop.svg'

const AdviceGeneratorApp = () => {
  const [advice, setAdvice] = useState('')

  useEffect(() => {
    axios.get('https://api.adviceslip.com/advice').then(res => setAdvice(res.data.slip))
  }, [])

  return (
		<div className={styles.advice}>
			<p className={styles.adviceId}>ADVICE #{advice.id}</p>
			<p className={styles.adviceText}>“{advice.advice}”</p>
			<img
				src={
					window.innerWidth < 768
						? patternDividerMobileSVG
						: patternDividerDesktopSVG
				}
				className={styles.divider}
			/>
			<div className={styles.dice}>
				<img src={iconDice} />
			</div>
		</div>
	)
}

export default AdviceGeneratorApp
