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


			<div className={style.user_container}>
				<h3>User?</h3>
				<Link to="/login">
					<h4 className={style.login_link}>Вход / Регистрация</h4>
				</Link>
			</div>
		</div>
	)
}
