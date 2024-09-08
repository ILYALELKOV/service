import { useDispatch, useSelector } from 'react-redux'
import { selectRooms, selectUserRole } from '../../redux/selectors/index.js'
import { NoAccessAdmin } from '../../components/noAccessAdminPage/noAccessAdmin.jsx'
import { useEffect, useState } from 'react'
import { deleteReservationAdminAsync, loadRoomsAsync } from '../../redux/actions/index.js'
import { ROLE } from '../../constans/index.js'
import { Link } from 'react-router-dom'
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
				<NoAccessAdmin />
			) : (
				<div className={style.container}>
					<div className={style.header_container}>
						<h1 className={style.header}>Статус номеров</h1>
						<Link to="/users-list">
							<button className={style.user_list_button}>Список пользователей</button>
						</Link>
					</div>
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
