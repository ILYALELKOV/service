import { ROLE } from '../../constans/index.js'
import { selectUserId, selectUserRole } from '../../redux/selectors/index.js'
import { useSelector } from 'react-redux'
import { NoAccessUserAccount } from '../../components/noAccessUserAccount/noAccessUserAccount.jsx'
import { useEffect, useState } from 'react'
import { request } from '../../utils/request.js'
import { UserBookedRoomsCard } from '../../components/userBookedRoomsCard/userBookedRoomsCard.jsx'
import Loader from '../../components/loader/loader.jsx'
import style from './userAccount.module.css'

export const UserAccount = () => {
	const [userData, setUserData] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const userRole = useSelector(selectUserRole)
	const userId = useSelector(selectUserId)

	useEffect(() => {
		if (userId) {
			request(`/user/${userId}/booked-rooms`)
				.then((res) => setUserData(res))
				.finally(() => setIsLoading(false))
		} else {
			setIsLoading(false)
		}
	}, [userId])

	const deleteBooking = (roomId) => {
		request(`/user/${userId}/room/${roomId}/delete-booking`, 'POST')
			.then(() => {
				setUserData(prevData => ({
					...prevData,
					bookedRooms: prevData.bookedRooms.filter(room => room._id !== roomId)
				}))
			})
	}

	return (
		<>
			{userRole !== ROLE.USER ? (
				<NoAccessUserAccount />
			) : (
				<div className={style.container}>
					<h1>Мои забронированные номера</h1>
					{isLoading ? (
						<Loader />
					) : (
						<>
							{userData && userData.bookedRooms && userData.bookedRooms.length > 0 ? (
								<div className={style.booked_rooms_container}>
									{userData.bookedRooms.map((room) => (
										<UserBookedRoomsCard
											key={room._id}
											img={room.photos[0]}
											amenities={room.amenities}
											size={room.size}
											name={room.name}
											id={room._id}
											onDeleteBooking={deleteBooking}
										/>
									))}
								</div>
							) : userData && userData.bookedRooms && userData.bookedRooms.length === 0 ? (
								<div className={style.text_booked_room}>
									<p>У вас нет забронированных номеров</p>
								</div>
							) : null}
						</>
					)}
				</div>
			)}
		</>
	)
}
