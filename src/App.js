import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const ProductPreviewCardComponent = React.lazy(() =>
	import('./newbie/product-preview-component/ProductPreviewCardComponent')
)
const InteractiveRatingComponent = React.lazy(() =>
	import('./newbie/interactive-rating-component/InteractiveRatingComponent')
)

const PricingComponent = React.lazy(() =>
	import('./junior/pricing-component/PricingComponent')
)

function App() {
  return (
		<React.Suspense fallback='Loading...'>
			<Router>
				<Routes>
					<Route
						path='/product-preview-card-component'
						element={<ProductPreviewCardComponent />}
					/>
					<Route
						path='/interactive-rating-component'
						element={<InteractiveRatingComponent />}
					/>

					<Route
						path='pricing-component-with-toggle'
						element={<PricingComponent />}
					/>
				</Routes>
			</Router>
		</React.Suspense>
	)
}

export default App;