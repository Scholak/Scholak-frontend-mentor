import React from 'react'
import styles from './ProductPreviewCardComponent.module.css'
import desktopImg from './images/image-product-desktop.jpg'
import mobileImg from './images/image-product-mobile.jpg'
import CartSvg from './images/icon-cart.svg'

const ProductPreviewCardComponent = () => {
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<picture>
					<source media='(max-width: 768px)' srcSet={mobileImg} />
					<img src={desktopImg} alt='product image' />
				</picture>
			</div>
			<div className={styles.text}>
				<p className={styles.subTitle}>perfume</p>
				<p className={styles.title}>gabrielle essence eau de parfum</p>
				<p className={styles.description}>
					A floral, solar and voluptuous interpretation composed by Oliver
					Polge, Perfumer-Creator for the house of CHANEL.
				</p>
				<div className={styles.pricing}>
					<span className={styles.newPrice}>149.99$</span>
					<span className={styles.oldPrice}>169.99$</span>
				</div>
				<button className={styles.btn}>
					<img src={CartSvg} alt='cart icon' />
					Add to Cart
				</button>
			</div>
		</div>
	)
}

export default ProductPreviewCardComponent
