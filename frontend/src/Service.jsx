import { Route, Routes } from 'react-router-dom'
import { ErrorPage } from './pages/error-page/errorPage.jsx'
import { Main } from './pages/main/main.jsx'
import { Header } from './components/header/header.jsx'
import { ERROR } from './constans'
import { Registration } from './pages/registretion/registration.jsx'
import { Authorization } from './pages/authorization/authorization.jsx'
import './App.css'

function Service() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Authorization />} />
				<Route path="/register" element={<Registration />} />
				<Route path="*" element={<ErrorPage error={ERROR.PAGE_NOT_EXIST} />} />
			</Routes>
		</>
	)
}

export default Service
