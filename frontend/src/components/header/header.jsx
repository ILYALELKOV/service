import { Link } from 'react-router-dom'
import { Input } from '../input/input.jsx'
import mainInputStyle from './styles/input/main_input.module.css'
import style from './header.module.css'

export const Header = () => {
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
				<h3>User ???</h3>
			</div>

			<Link to="/login">
				<div className={style.login_container}>
					<div className={style.login}></div>
					<h4 className={style.login_link}>Вход / Регистрация</h4>
				</div>
			</Link>

		</div>
	)
}
