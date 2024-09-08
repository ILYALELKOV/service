import { Link } from 'react-router-dom'
import { ERROR } from '../../constans/index.js'
import styles from './errorPage.module.css'

export const ErrorPage = () => {
	return (
		<div className={styles.error_container}>
			<h2 className={styles.error_header}>Ошибка</h2>
			<div className={styles.error_message}>{ERROR.PAGE_NOT_EXIST}</div>
			<Link to="/">
				<button className={styles.error_button}>Главная страница</button>
			</Link>
		</div>
	)
}
