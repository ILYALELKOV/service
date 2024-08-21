import { Link } from 'react-router-dom'
import { Input } from '../input/input.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserLogin } from '../../redux/selectors/index.js'
import { logout } from '../../redux/actions/index.js'
import mainInputStyle from './styles/input/main_input.module.css'
import style from './header.module.css'

export const Header = () => {

	const userName = useSelector(selectUserLogin)
	const dispatch = useDispatch()

	const onLogOut = () => {
		dispatch(logout())
	}

	return (
		<div className={style.container}>
			<Link to="/">
				<button className={style.logo_image}></button>
			</Link>

			<form action="#" className={style.input_container}>
				<Input
					styleClass={mainInputStyle}
					placeholder="Поиск..."
					type="text"
				/>
				<button className={style.btn_search}></button>
			</form>

			<div className={style.date_container}>
				<div className={style.calendar}></div>
				<p>{new Date().toLocaleString('ru', {
					year: 'numeric',
					day: 'numeric',
					month: 'long'
				})}</p>
				<p>{new Date().toLocaleString('ru', {
					weekday: 'long'
				})}</p>
			</div>


			<div className={style.user_container}>
				<div className={style.user_logo}></div>
				{userName === null
					? <div>
						<p className={style.user_name_default}>Зайдите в </p>
						<p className={style.user_name_default}>аккаунт</p>
					</div>
					: <h3 className={style.user_name}>{userName}</h3>}
			</div>

			{userName === null
				? (<Link to="/login">
					<div className={style.login_container}>
						<div className={style.log_in_out}></div>
						<div>
							<p className={style.logIn_link}>Вход /</p>
							<p className={style.logIn_link}> Регистрация</p>
						</div>
					</div>
				</Link>)
				: (
					<div className={style.login_container} onClick={onLogOut}>
						<div className={style.log_in_out}></div>
						<h4 className={style.logOut_link}>Выйти из аккаунта</h4>
					</div>
				)}
		</div>
	)
}
