import React, { useState } from 'react'
import styles from './Challenge2.module.css'
import star from './images/icon-star.svg'

const Rating = ({ rating, handleRating, handleSubmit }) => {
	return (
		<div className={styles.box}>
			<div className={styles.icon}>
				<img src={star} alt='star icon' />
			</div>
			<p className={styles.heading}>How did we do?</p>
			<p className={styles.text}>
				Please let us know how we did with your support request. All feedback is
				appreciated to help us improve our offering.
			</p>
			<div className={styles.rating}>
        {[1, 2, 3, 4, 5].map(number => (
          <span key={number} onClick={() => handleRating(number)} className={rating == number ? styles.active : '' }>{number}</span>
        ))}
			</div>
			<button className={styles.btn} onClick={handleSubmit}>
				SUBMIT
			</button>
		</div>
	)
}

export default Rating
