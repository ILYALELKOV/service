import { Link } from 'react-router-dom'
import style from './header.module.css'

export const Header = () => {
	return (
		<div className={style.container}>
			<h1>Header</h1>
			<h1>1</h1>
			<h1>2</h1>
			<Link to="/login">
				<h2 className={style.login_link}>Вход / Регистрация</h2>
			</Link>
		</div>
	)
}
