import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Challenge1 = React.lazy(() =>
	import('./newbie/challenge1/Challenge1')
)

function App() {
  return (
		<React.Suspense fallback='Loading...'>
			<Router>
				<Routes>
					<Route path='/newbie/challenge-1' element={<Challenge1 />} />
				</Routes>
			</Router>
		</React.Suspense>
	)
}

export default App;