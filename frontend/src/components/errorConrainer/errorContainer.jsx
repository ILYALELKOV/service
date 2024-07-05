import style from '../../pages/registretion/registration.module.css'

export const ErrorContainer = ({ errors }) => {
	return (
		<div className={style.error_container}>
			<p>{errors.login && errors.login.message}</p>
			<p>{errors.password && errors.password.message}</p>
			<p>{errors.checkPassword && errors.checkPassword.message}</p>
		</div>
	)
}
