import { Input } from '../../components/input/input.jsx'
import { Link, Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { regFormSchema } from './registrationSchema/registrationSchema.js'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { ErrorContainer } from '../../components/errorConrainer/errorContainer.jsx'
import { request } from '../../utils/request.js'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../redux/actions/index.js'
import { selectTheme, selectUserRole } from '../../redux/selectors/index.js'
import { ServerError } from '../../components/serverError/serverError.jsx'
import { ERROR, ROLE } from '../../constans/index.js'
import style from './registration.module.css'
import styleInput from './styles/input/input.module.css'

export const Registration = () => {
	const [serverError, setServerError] = useState(null)

	const dispatch = useDispatch()
	const roleId = useSelector(selectUserRole)
	const theme = useSelector(selectTheme)

	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			login: '',
			password: '',
			checkPassword: ''
		},
		resolver: yupResolver(regFormSchema)
	})

	const onSubmitRegistration = ({ login, password }) => {
		request('/register', 'POST', { login, password })
			.then(({ error, user }) => {
				if (error) {
					if (error.slice(0, 16) === ERROR.DUPLICATE_USER) {
						setServerError('Имя пользователя занято')
						return
					} else {
						setServerError(error.error)
						return
					}
				}
				dispatch(setUser(user))
				sessionStorage.setItem('userData', JSON.stringify(user))
			})
	}

	const formError = errors?.login?.message || errors?.password?.message || errors?.checkPassword?.message

	if (roleId === ROLE.USER || roleId === ROLE.ADMIN) {
		return <Navigate to="/" />
	}

	return (
		<>
			<section className={theme === 'light' ? style.registration_container_light : style.registration_container_dark}>
				<h2>Регистрация</h2>
				<form className={style.registration_form} onSubmit={handleSubmit(onSubmitRegistration)}>
					<section className={style.input_container}>
						<Input {...register('login')} text="Введите логин..." type="text" styleClass={styleInput}
									 autoComplete="username" />
						<Input {...register('password')} text="Введите пароль..." type="password" styleClass={styleInput}
									 autoComplete="new-password" />
						<Input {...register('checkPassword')} text="Повтор пароля..." type="password" styleClass={styleInput}
									 autoComplete="new-password" />
						< ErrorContainer errors={errors} />
						{serverError && <ServerError errorMessage={serverError} />}
					</section>

					<div className={style.button_container}>
						<button disabled={!!formError} type="submit">Зарегистрироваться</button>
						<Link to="/">
							<button type="submit">Главная страница</button>
						</Link>
					</div>
				</form>
			</section>
		</>
	)
}
