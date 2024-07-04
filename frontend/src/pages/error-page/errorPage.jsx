import { Link } from 'react-router-dom'
import styles from './errorPage.module.css'

export const ErrorPage = ({ error }) => {
	return (
		<div className={styles.error_container}>
			<h2 className={styles.error_header}>Ошибка</h2>
			<div className={styles.error_message}>{error}</div>
			<Link to="/">
				<button className={styles.error_button}>Главная страница</button>
			</Link>
		</div>
	)
}
