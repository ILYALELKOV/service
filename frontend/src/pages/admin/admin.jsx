import { useSelector } from 'react-redux'
import { selectUserRole } from '../../redux/selectors/index.js'
import { ROLE } from '../../constans/index.js'
import { NoAccess } from '../../components/noAccess/noAccess.jsx'
import { useEffect, useState } from 'react'
import { request } from '../../utils/request.js'
import Loader from '../../components/loader/loader.jsx'
import style from './admin.module.css'

export const Admin = () => {

	const userRole = useSelector(selectUserRole)

	const [rooms, setRooms] = useState([])

	useEffect(() => {
		request('/rooms')
			.then((res) => setRooms(res))
	})

	return (
		<div>
			{userRole !== ROLE.ADMIN
				? <NoAccess />
				:
				<div className={style.container}>
					<h1>Статус номеров</h1>
					<div className={style.room_container}>
						{rooms
							? (
								rooms.map((room) => (
									<div className={style.room_item} key={room._id}>
										<p className={style.id_number}>{room.name}</p>
										<img className={style.room_image} src={room.photos[0]} alt="" />
										<button className={style.cancel_reservation}>Снять бронь</button>
									</div>
								))
							)
							: (<Loader />)
						}
					</div>
				</div>
			}
		</div>
	)
}
