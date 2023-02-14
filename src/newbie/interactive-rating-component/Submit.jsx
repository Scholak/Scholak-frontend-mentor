import React from 'react'
import styles from './InteractiveRatingComponent.module.css'
import thankYouSVG from './images/illustration-thank-you.svg'

const Submit = ({rating}) => {
  return (
		<div className={`${styles.box} ${styles.center}`}>
			<img src={thankYouSVG} alt='thank you icon' className={styles.thankYouSVG} />
			<p className={styles.ratingResult}>You selected {rating} out of 5</p>
			<p className={styles.heading}>Thank You!</p>
			<p className={styles.text}>
				We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
			</p>
		</div>
	)
}

export default Submit
