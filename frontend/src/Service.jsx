import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Test } from './components/test/test.jsx'
import { ErrorPage } from './pages/error-page/errorPage.jsx'
import { ERROR } from './constans'

function Service() {
	return (
		<>
			{/*<h1>Hello from my first pet project!!!!!!!</h1>*/}

			<Routes>
				<Route path="/" element={<Test />} />
				<Route path="*" element={<ErrorPage error={ERROR.PAGE_NOT_EXIST} />} />
			</Routes>
		</>
	)
}

export default Service
