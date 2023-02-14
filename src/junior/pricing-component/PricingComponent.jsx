import React, { useState } from 'react'
import styles from './PricingComponent.module.css'
import bgTop from './images/bg-top.svg'
import bgBottom from './images/bg-bottom.svg'



const PricingComponent = () => {
	const plans = {
		monthly: [
			{
				type: 'Basic',
				price: '19.99',
				features: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB'],
			},
			{
				type: 'Professional',
				price: '24.99',
				features: ['1 TB Storage', '5 Users Allowed', 'Send up to 10 GB'],
			},
			{
				type: 'Master',
				price: '39.99',
				features: ['2 TB Storage', '10 Users Allowed', 'Send up to 20 GB'],
			},
		],
		annually: [
			{
				type: 'Basic',
				price: '199.99',
				features: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB'],
			},
			{
				type: 'Professional',
				price: '249.99',
				features: ['1 TB Storage', '5 Users Allowed', 'Send up to 10 GB'],
			},
			{
				type: 'Master',
				price: '399.99',
				features: ['2 TB Storage', '10 Users Allowed', 'Send up to 20 GB'],
			},
		],
	}

	const [plan, setPlan] = useState('monthly')

	const [active, setActive] = useState(false)

	const handleChangePlan = () => {
		setActive(!active)
		plan === 'annually' ? setPlan('monthly') : setPlan('annually')
	}

	return (
		<section className={styles.pricingSection}>
			<img src={bgTop} alt='top right background image' />
			<img src={bgBottom} alt='bottom left background image' />
			<h3 className={styles.title}>Our Pricing</h3>
			<div className={styles.toggle}>
				<span>Annually</span>
				<span
					className={`${styles.toggleBtn} ${!active ? styles.active : ''}`}
					onClick={handleChangePlan}
				></span>
				<span>Monthly</span>
			</div>
			<div className={styles.cards}>
				{plans[plan].map(plan => (
					<div key={plan.price} className={styles.card}>
						<p className={styles.type}>{plan.type}</p>
						<div className={styles.priceArea}>
							$<span className={styles.price}>{plan.price}</span>
						</div>
						<ul className={styles.features}>
							{plan.features.map(feature => (
								<li key={feature}>{feature}</li>
							))}
						</ul>
						<button className={styles.cta}>LEARN MORE</button>
					</div>
				))}
			</div>
		</section>
	)
}

export default PricingComponent
