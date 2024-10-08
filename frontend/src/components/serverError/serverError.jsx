import PropTypes from 'prop-types'
import style from '../../pages/authorization/authorization.module.css'

export const ServerError = ({ errorMessage }) => {
	return (
		<>
			<p className={style.server_error_message}>Ошибка сервера: {errorMessage}</p>
		</>
	)
}

ServerError.propTypes = {
	errorMessage: PropTypes.string.isRequired
}
