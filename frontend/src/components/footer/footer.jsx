import useWeather from '../../hooks/use-weather.js'
import { selectTheme } from '../../redux/selectors/index.js'
import { useSelector } from 'react-redux'
import styles from './footer.module.css'

export const Footer = () => {

	const { weather, error } = useWeather()

	const theme = useSelector(selectTheme)

	return (
		<div className={theme === 'light' ? styles.footer_container_light : styles.footer_container_dark}>
			<div className={theme === 'light' ? styles.footer_content_light : styles.footer_content_dark}>
				<h4>Контакты</h4>
				<p>Телефон: +7 (495) 193-45-82</p>
				<p>Адрес: г. Москва, ул. Приемная, д. 1</p>
			</div>

			<div className={theme === 'light' ? styles.footer_section_light : styles.footer_section_dark}>
				<h4>О нас:</h4>
				<p>Мы предоставляем лучшие номера в Москве для вашего комфортного пребывания.</p>
			</div>

			{error ? (
				<div className={styles.error_message}>Ошибка загрузки погоды</div>
			) : weather ? (
				<>
					<div className={theme === 'light' ? styles.weather_container_light : styles.weather_container_dark}>
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
				<div className={styles.text_loading}>Загрузка погоды...</div>
			)}
		</div>
	)
}
