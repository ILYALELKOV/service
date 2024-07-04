import { useEffect, useState } from 'react'
import { WEATHER_API_KEY } from '../constans/index.js'

const useWeather = () => {
	const [weather, setWeather] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchWeather = async (lat, lon) => {
			try {
				const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
				const data = await response.json()
				setWeather(data)
			} catch (error) {
				setError(error)
			}
		}

		const getUserLocation = () => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						fetchWeather(position.coords.latitude, position.coords.longitude)
					},
					(error) => {
						setError(error)
					}
				)
			} else {
				setError(new Error('Geolocation is not supported by this browser.'))
			}
		}

		getUserLocation()
	}, [])

	return { weather, error }
}

export default useWeather
