import useWeather from '../../hooks/use-weather.js'
import styles from './footer.module.css'

export const Footer = () => {

	const { weather, error } = useWeather()

	return (
		<div className={styles.footer_container}>
			<div className={styles.footer_content}>
				<h4>Контакты</h4>
				<p>Телефон: +7 (495) 193-45-82</p>
				<p>Адрес: г. Москва, ул. Приемная, д. 1</p>
			</div>

			<div className={styles.footer_section}>
				<h4>О нас:</h4>
				<p>Мы предоставляем лучшие номера в Москве для вашего комфортного пребывания.</p>
			</div>

			{error ? (
				<div className={styles.error_message}>Weather loading failed</div>
			) : weather ? (
				<>
					<div className={styles.weather_container}>
						<div>
							<p>Город:</p>
							<p>Температура:</p>
						</div>
						<div>
							<p>{weather.name}</p>
							<p>{Math.floor(weather.main.temp)} &deg;C</p>
						</div>
					</div>
				</>
			) : (
				'Загрузка погоды...'
			)}
		</div>
	)
}
