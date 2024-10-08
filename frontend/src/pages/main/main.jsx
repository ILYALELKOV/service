import { useEffect, useState } from 'react'
import { RoomCard } from '../../components/roomCart/roomCard.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { selectRooms, selectTheme } from '../../redux/selectors/index.js'
import { loadRoomsAsync } from '../../redux/actions/index.js'
import Loader from '../../components/loader/loader.jsx'
import styles from './main.module.css'

export const Main = () => {
	const [isLoading, setIsLoading] = useState(true)

	const dispatch = useDispatch()
	const rooms = useSelector(selectRooms)
	const theme = useSelector(selectTheme)

	useEffect(() => {
		dispatch(loadRoomsAsync())
			.then(() => setIsLoading(false))
	}, [dispatch])

	return (
		<>
			<h1>Доступные номера</h1>
			{isLoading ? (
				<Loader />
			) : rooms.some(room => room.isAvailable) ? (
				<main className={theme === 'light' ? styles.rooms_container_light : styles.rooms_container_dark}>
					{rooms.map((room) => (
						room.isAvailable && (
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
						)
					))}
				</main>
			) : (
				<p className={styles.no_rooms}>К сожалению доступных номеров нет</p>
			)}
		</>
	)
}

