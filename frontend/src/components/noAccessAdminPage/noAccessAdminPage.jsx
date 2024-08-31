import { Link } from 'react-router-dom'
import style from './noAccessAdminPage.module.css'

export const NoAccessAdminPage = () => {
	return (
		<div className={style.error_access_container}>
			<h1>У вас нет прав доступа к этой странице</h1>
			<Link to="/">
				<button className={style.error_access_button} type="submit">Главная страница</button>
			</Link>
		</div>
	)
}
