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

const AdviceGeneratorApp = React.lazy(() =>
	import('./junior/advice-generator-app/AdviceGeneratorApp')
)

const LoopstudiosLandingPage = React.lazy(() =>
	import('./junior/loopstudios-landing-page/LoopstudiosLandingPage')
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
						path='/pricing-component-with-toggle'
						element={<PricingComponent />}
					/>
					<Route
						path='/advice-generator-app'
						element={<AdviceGeneratorApp />}
					/>
					<Route
						path='/loopstudios-landing-page'
						element={<LoopstudiosLandingPage />}
					/>
				</Routes>
			</Router>
		</React.Suspense>
	)
}

export default App;