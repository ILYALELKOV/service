import { Link } from 'react-router-dom'
import style from './noAccessUserAccount.module.css'

export const NoAccessUserAccount = () => {
	return (
		<div className={style.error_access_container}>
			<h1>Что бы зайти в личный кабинет, вы должны быть авторизованы. Пожалуйста, зайдите в свой аккаунт</h1>
			<Link to="/">
				<button className={style.error_access_button} type="submit">Главная страница</button>
			</Link>
		</div>
	)
}
