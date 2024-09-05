import { Input } from '../../components/input/input.jsx'
import { Link, Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { authFormSchema } from './authorizationSchema/authorizationSchema.js'
import { ErrorContainer } from '../../components/errorConrainer/errorContainer.jsx'
import { request } from '../../utils/request.js'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserLogin } from '../../redux/selectors/index.js'
import { setUser } from '../../redux/actions/index.js'
import { ServerError } from '../../components/serverError/serverError.jsx'
import style from './authorization.module.css'
import styleInput from '../registretion/styles/input/input.module.css'

export const Authorization = () => {
	const [serverError, setServerError] = useState(null)

	const dispatch = useDispatch()
	const userName = useSelector(selectUserLogin)

	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			login: '',
			password: ''
		},
		resolver: yupResolver(authFormSchema)
	})

	const onSubmitLogin = ({ login, password }) => {
		request('/login', 'POST', { login, password })
			.then(({ error, user }) => {
				if (error) {
					setServerError(error)
					return
				}
				dispatch(setUser(user))
				sessionStorage.setItem('userData', JSON.stringify(user))
			})
	}

	if (userName !== null) {
		return <Navigate to="/" />
	}

	const formError = errors?.login?.message || errors?.password?.message || errors?.checkPassword?.message

	return (
		<>
			<div className={style.authorization_container}>
				<h2>Вход</h2>
				<form className={style.authorization_form} onSubmit={handleSubmit(onSubmitLogin)}>
					<div className={style.input_container}>
						<Input {...register('login')} text="Введите логин..." type="text" styleClass={styleInput}
									 autoComplete="username" />
						<Input {...register('password')} text="Введите пароль..." type="password" styleClass={styleInput}
									 autoComplete="new-password" />
						<ErrorContainer errors={errors} />
					</div>
					{serverError && <ServerError errorMessage={serverError} />}
					<div className={style.button_container}>
						<button disabled={!!formError} type="submit">Войти</button>
						<Link to="/">
							<button className={style.button_main}>Главная страница</button>
						</Link>
						<Link to="/register">
							<button className={style.button_registration}>Регистрация</button>
						</Link>
					</div>
				</form>
			</div>
		</>
	)
}
