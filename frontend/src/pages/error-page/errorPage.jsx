import { Link } from 'react-router-dom'
import style from './errorPage.module.css'

export const ErrorPage = ({ error }) => {
	return (
		<>
			<h2 className={style.header}>Ошибка</h2>
			<div className={style.error_container}>{error}</div>
			<Link to="/">
				<button className={style.button}>Главная страница</button>
			</Link>
		</>
	)
}
