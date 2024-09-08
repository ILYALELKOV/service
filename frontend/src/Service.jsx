import { Route, Routes } from 'react-router-dom'
import { ErrorPage } from './pages/error-page/errorPage.jsx'
import { Main } from './pages/main/main.jsx'
import { Header } from './components/header/header.jsx'
import { Registration } from './pages/registretion/registration.jsx'
import { Authorization } from './pages/authorization/authorization.jsx'
import { Footer } from './components/footer/footer.jsx'
import { Admin } from './pages/admin/admin.jsx'
import { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from './redux/actions/index.js'
import { Room } from './pages/room/room.jsx'
import { CookieModal } from './components/cookieModal/cookieModal.jsx'
import { UserAccount } from './pages/userAccount/userAccount.jsx'
import './App.css'
import { UsersList } from './pages/usersList/usersList.jsx'

function Service() {

	const dispatch = useDispatch()

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData')

		if (!currentUserDataJSON) {
			return
		}

		const currentUserData = JSON.parse(currentUserDataJSON)

		dispatch(setUser({
			...currentUserData,
			roleId: Number(currentUserData.roleId)
		}))
	})

	return (
		<div className="app_container">
			<Header />
			<div className="content">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/room/:id" element={<Room />} />
					<Route path="/account" element={<UserAccount />} />
					<Route path="/users-list" element={<UsersList />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</div>
			<CookieModal />
			<Footer />
		</div>
	)
}

export default Service
