import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectTheme, selectUserLogin, selectUserRole } from '../../redux/selectors/index.js'
import { changeTheme, logout } from '../../redux/actions/index.js'
import { ROLE } from '../../constans/index.js'
import { Time } from '../time/time.jsx'
import style from './header.module.css'

export const Header = () => {
	const userName = useSelector(selectUserLogin)
	const userRole = useSelector(selectUserRole)
	const dispatch = useDispatch()
	const theme = useSelector(selectTheme)

	const onLogOut = () => {
		dispatch(logout())
	}

	const onChangeTheme = () => {
		dispatch(changeTheme())
		const newTheme = theme === 'light' ? 'dark' : 'light'
		localStorage.setItem('theme', newTheme)
	}

	return (
		<header className={theme === 'light' ? style.container_light : style.container_dark}>
			<button className={style.button_theme} onClick={onChangeTheme}>
			</button>

			<Time />

			<section className={theme === 'light' ? style.date_container_light : style.date_container_dark}>
				<div className={style.calendar}></div>
				<p>{new Date().toLocaleString('ru', {
					year: 'numeric',
					day: 'numeric',
					month: 'long'
				})}</p>
				<p>{new Date().toLocaleString('ru', {
					weekday: 'long'
				})}</p>
			</section>

			<Link to="/">
				<button className={style.logo_image}></button>
			</Link>

			<section className={style.user_container}>
				<div className={style.user_logo}></div>
				{userName === null
					? <div>
						<p className={style.user_name_default}>Зайдите в </p>
						<p className={style.user_name_default}>аккаунт</p>
					</div>
					: <h3 className={style.user_name}>{userName}</h3>}
			</section>

			{userName === null
				? (<Link to="/login">
					<section className={style.login_container}>
						<div className={style.log_in_out}></div>
						<div>
							<p className={theme === 'light' ? style.logIn_link_light : style.logIn_link_dark}>Вход /</p>
							<p className={theme === 'light' ? style.logIn_link_light : style.logIn_link_dark}> Регистрация</p>
						</div>
					</section>
				</Link>)
				: (
					<section className={style.login_container} onClick={onLogOut}>
						<div className={style.log_in_out}></div>
						<h4 className={theme === 'light' ? style.logOut_link_light : style.logOut_link_dark}>Выйти</h4>
						<h4 className={theme === 'light' ? style.logOut_link_light : style.logOut_link_dark}> из аккаунта</h4>
					</section>
				)}
			{userRole === ROLE.ADMIN
				? (
					<Link to="/admin">
						<section className={style.admin_container}>
							<div className={style.admin}></div>
							<p>Панель</p>
							<p>администратора</p>
						</section>
					</Link>
				)
				: null
			}
			{userRole === ROLE.USER
				? (
					<Link to="/account">
						<section className={style.account_container}>
							<div className={style.account}></div>
							<p>Личный</p>
							<p>кабинет</p>
						</section>
					</Link>
				)
				: null
			}
		</header>
	)
}
