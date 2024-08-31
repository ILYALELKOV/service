import { useSelector } from 'react-redux'
import { selectUserRole } from '../../redux/selectors/index.js'
import { ROLE } from '../../constans/index.js'
import { NoAccessAdminPage } from '../../components/noAccessAdminPage/noAccessAdminPage.jsx'
import { useEffect, useState } from 'react'
import { request } from '../../utils/request.js'
import Loader from '../../components/loader/loader.jsx'
import style from './admin.module.css'

export const Admin = () => {

	const userRole = useSelector(selectUserRole)

	const [rooms, setRooms] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		request('/rooms')
			.then((res) => setRooms(res))
			.finally(() => setIsLoading(false))
	}, [])

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
										<button className={style.cancel_reservation}>Снять бронь</button>
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
