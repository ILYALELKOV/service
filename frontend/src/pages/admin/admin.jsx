import { useDispatch, useSelector } from 'react-redux'
import { selectRooms, selectUserRole } from '../../redux/selectors/index.js'
import { NoAccessAdminPage } from '../../components/noAccessAdminPage/noAccessAdminPage.jsx'
import { useEffect, useState } from 'react'
import { deleteReservationAdminAsync, loadRoomsAsync } from '../../redux/actions/index.js'
import { ROLE } from '../../constans/index.js'
import Loader from '../../components/loader/loader.jsx'
import style from './admin.module.css'

export const Admin = () => {

	const dispatch = useDispatch()
	const rooms = useSelector(selectRooms)
	const userRole = useSelector(selectUserRole)

	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		dispatch(loadRoomsAsync())
			.then(() => setIsLoading(false))
	}, [])

	const onDeleteReservation = (roomId) => {
		setIsLoading(true)

		dispatch(deleteReservationAdminAsync(roomId))
			.then(() => setIsLoading(false))
	}

	return (
		<div>
			{userRole !== ROLE.ADMIN ? (
				<NoAccessAdminPage />
			) : (
				<div className={style.container}>
					<h1>Статус номеров</h1>
					{isLoading ? (
						<Loader />
					) : (
						<div className={style.room_container}>
							{rooms.map((room) => (
								<div
									className={room.isAvailable ? style.room_item : style.reserved_room}
									key={room._id}
								>
									<p className={style.id_number}>{room.name}</p>
									<img className={style.room_image} src={room.photos[0]} alt="" />
									{!room.isAvailable && (
										<button className={style.cancel_reservation} onClick={() => onDeleteReservation(room._id)}>Снять
											бронь</button>
									)}
								</div>
							))}
						</div>
					)}
				</div>
			)}
		</div>
	)
}
