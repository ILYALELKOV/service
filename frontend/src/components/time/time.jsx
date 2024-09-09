import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../redux/selectors/index.js'
import style from './time.module.css'

export const Time = () => {
	const [date, setDate] = useState(new Date())

	const theme = useSelector(selectTheme)

	useEffect(() => {
		const timer = setInterval(() => {
			setDate(new Date())
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	const hours = date.getHours()
	const minutes = date.getMinutes()
	const seconds = date.getSeconds()

	return (
		<div className={theme === 'light' ? style.time_container_light : style.time_container_dark}>
			<p>{hours}</p>
			<p>:</p>
			<p>{minutes < 10 ? '0' + minutes : minutes}</p>
			<p>:</p>
			<p>{seconds < 10 ? '0' + seconds : seconds}</p>
		</div>
	)
}
