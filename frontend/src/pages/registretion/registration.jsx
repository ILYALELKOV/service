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
import { selectUserRole } from '../../redux/selectors/index.js'
import { ServerError } from '../../components/serverError/serverError.jsx'
import style from './registration.module.css'
import styleInput from './styles/input/input.module.css'

export const Registration = () => {
	const [serverError, setServerError] = useState(null)

	const dispatch = useDispatch()
	const roleId = useSelector(selectUserRole)

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
					setServerError(error.error)
					return
				}
				dispatch(setUser(user))
				sessionStorage.setItem('userData', JSON.stringify(user))
			})
	}

	const formError = errors?.login?.message || errors?.password?.message || errors?.checkPassword?.message
//TODO необходимо проверить условия
	if (roleId === 1 || roleId === 0) {
		return <Navigate to="/" />
	}

	return (
		<>
			<div className={style.registration_container}>
				<h2>Регистрация</h2>
				<form className={style.registration_form} onSubmit={handleSubmit(onSubmitRegistration)}>
					<div className={style.input_container}>
						<Input {...register('login')} text="Введите логин..." type="text" styleClass={styleInput}
									 autoComplete="username" />
						<Input {...register('password')} text="Введите пароль..." type="password" styleClass={styleInput}
									 autoComplete="new-password" />
						<Input {...register('checkPassword')} text="Повтор пароля..." type="password" styleClass={styleInput}
									 autoComplete="new-password" />
						< ErrorContainer errors={errors} />
						{serverError && <ServerError errorMessage={serverError} />}
					</div>

					<div className={style.button_container}>
						<button disabled={!!formError} type="submit">Зарегистрироваться</button>
						<Link to="/">
							<button type="submit">Главная страница</button>
						</Link>
					</div>
				</form>
			</div>
		</>
	)
}
