import { useEffect, useState } from 'react'
import { request } from '../../utils/request.js'
import { RoomCard } from '../../components/roomCart/roomCard.jsx'
import Loader from '../../components/loader/loader.jsx'
import styles from './main.module.css'

export const Main = () => {
	const [rooms, setRooms] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		request('/rooms')
			.then((res) => {
				setRooms(res)
			})
			.finally(() => setIsLoading(false))
	}, [])

	return (
		<>
			<h1>Доступные номера</h1>
			{isLoading ? (
				<Loader />
			) : rooms.length > 0 ? (
				<div className={styles.rooms_container}>
					{rooms.map((room) => (
						<RoomCard
							key={room._id}
							url={room.photos[0]}
							price={room.price}
							amenities={room.amenities}
							size={room.size}
							name={room.name}
							id={room._id}
							isAvailable={room.isAvailable}
						/>
					))}
				</div>
			) : (
				<p>Нет доступных номеров</p>
			)}
		</>
	)
}

