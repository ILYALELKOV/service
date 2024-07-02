import { Input } from '../../components/input/input.jsx'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { regFormSchema } from './registrationSchema/registrationSchema.js'
import { yupResolver } from '@hookform/resolvers/yup'
import style from './registration.module.css'
import styleInput from './styles/input/input.module.css'
import { useState } from 'react'

export const Registration = () => {
	const [serverError, setServerError] = useState(null)

	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {
			login: '',
			password: '',
			checkPassword: ''
		},
		resolver: yupResolver(regFormSchema)
	})

	const submit = (data) => {
		console.log(data)
	}

	const formError = errors?.login?.message || errors?.password?.message || errors?.checkPassword?.message

	return (
		<>
			<div className={style.registration_container}>
				<h2>Регистрация</h2>
				<form className={style.registration_form} onSubmit={handleSubmit(submit)}>
					<div className={style.input_container}>
						<Input {...register('login')} text="Введите имя..." type="text" styleClass={styleInput}
									 autoComplete="username" />
						<Input {...register('password')} text="Введите пароль..." type="password" styleClass={styleInput}
									 autoComplete="new-password" />
						<Input {...register('checkPassword')} text="Повтор пароля..." type="password" styleClass={styleInput}
									 autoComplete="new-password" />
						{/* TODO: вынести блок ошибок в отдельный компонент */}
						<div className={style.error_container}>
							<p>{errors.login && errors.login.message}</p>
							<p>{errors.password && errors.password.message}</p>
							<p>{errors.checkPassword && errors.checkPassword.message}</p>
						</div>
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
