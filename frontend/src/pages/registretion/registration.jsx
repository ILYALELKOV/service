import { Input } from '../../components/input/input.jsx'
import { Link } from 'react-router-dom'
import style from './registration.module.css'
import styleInput from './styles/input/input.module.css'

export const Registration = () => {
	return (
		<>
			<div className={style.registration_container}>
				<h2>Регистрация</h2>
				<form action="" className={style.registration_form}>
					<div className={style.input_container}>
						<Input text="Введите имя..." type="text" styleClass={styleInput} />
						<Input text="Введите пароль..." type="password" styleClass={styleInput} />
						<Input text="Повтор пароля..." type="password" styleClass={styleInput} />
					</div>
					<div className={style.button_container}>
						<button type="submit">Зарегистрироваться</button>
						<Link to="/">
							<button type="submit">Главная страница</button>
						</Link>
					</div>
				</form>
			</div>
		</>
	)
}
