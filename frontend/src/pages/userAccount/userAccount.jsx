import { ROLE } from '../../constans/index.js'
import { selectUserId, selectUserRole } from '../../redux/selectors/index.js'
import { useSelector } from 'react-redux'
import { NoAccessUserAccount } from '../../components/noAccessUserAccount/noAccessUserAccount.jsx'
import { useEffect, useState } from 'react'
import { request } from '../../utils/request.js'
import { UserBookedRoomsCard } from '../../components/userBookedRoomsCard/userBookedRoomsCard.jsx'
import style from './userAccount.module.css'

export const UserAccount = () => {
	const [userData, setUserData] = useState([])

	const userRole = useSelector(selectUserRole)
	const userId = useSelector(selectUserId)

	useEffect(() => {
		request(`/user/${userId}/booked-rooms`)
			.then((res) => setUserData(res))
	}, [])

	return (
		<>
			{userRole !== ROLE.USER
				? (<NoAccessUserAccount />)
				: (
					<div className={style.container}>
						<h1>Мои забронированные номера</h1>
						<div className={style.booked_rooms_container}>
							{userData.bookedRooms && userData.bookedRooms.map((room) => (
								<UserBookedRoomsCard img={room.photos[0]} amenities={room.amenities} size={room.size}
																		 name={room.name} />
							))}
						</div>
					</div>
				)
			}
		</>
	)
}
