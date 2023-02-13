import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const NChallenge1 = React.lazy(() =>
	import('./newbie/challenge1/Challenge1')
)

const NChallenge2 = React.lazy(() => import('./newbie/challenge2/Challenge2'))

function App() {
  return (
		<React.Suspense fallback='Loading...'>
			<Router>
				<Routes>
					<Route path='/newbie/challenge-1' element={<NChallenge1 />} />
					<Route path='/newbie/challenge-2' element={<NChallenge2 />} />
				</Routes>
			</Router>
		</React.Suspense>
	)
}

export default App;