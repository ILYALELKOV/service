import { useSelector } from 'react-redux'
import { selectTheme } from '../../redux/selectors/index.js'
import style from '../../pages/registretion/registration.module.css'

export const ErrorContainer = ({ errors }) => {
	const theme = useSelector(selectTheme)

	return (
		<section className={theme === 'light' ? style.error_container_light : style.error_container_dark}>
			<p>{errors.login && errors.login.message}</p>
			<p>{errors.password && errors.password.message}</p>
			<p>{errors.checkPassword && errors.checkPassword.message}</p>
		</section>
	)
}
