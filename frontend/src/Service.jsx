import { Route, Routes } from 'react-router-dom'
import { Test } from './components/test/test.jsx'
import { ErrorPage } from './pages/error-page/errorPage.jsx'
import { ERROR } from './constans'
import { Registration } from './pages/registretion/registration.jsx'
import './App.css'

function Service() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Test />} />
				<Route path="/login" element={<Registration />} />
				<Route path="*" element={<ErrorPage error={ERROR.PAGE_NOT_EXIST} />} />
			</Routes>
		</>
	)
}

export default Service
