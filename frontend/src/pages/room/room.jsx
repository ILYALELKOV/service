import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { request } from '../../utils/request.js'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserRole, selectUserId } from '../../redux/selectors/index.js'
import { ROLE } from '../../constans/index.js'
import Loader from '../../components/loader/loader.jsx'
import style from './room.module.css'

export const Room = () => {
	const [room, setRoom] = useState(null)

	const { id } = useParams()
	const userRole = useSelector(selectUserRole)
	const userId = useSelector(selectUserId)

	useEffect(() => {
		request(`/room/${id}`)
			.then((res) => setRoom(res))
	}, [])

	const bookedRoom = () => {
		console.log('Booked!', userId)
		fetch(id, userId)
	}

	return (
		<>
			{room ? (
				<div className={style.container}>
					<div className={style.room_container}>
						<h1>{room.name}</h1>
						<img className={style.room_image} src={room.photos[0]} alt="комната" />
					</div>
					<div className={style.description_container}>
						<div>
							<h3>Описание:</h3>
							<p>{room.description}</p>
						</div>
						<div>
							<h3>Удобства:</h3>
							<ul className={style.amenities}>
								{room.amenities.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
						<div>
							<h3>Площадь:</h3>
							<p>{room.size}</p>
						</div>
						<div>
							<h3>Цена:</h3>
							<p className={style.price}>{room.price}$</p>
						</div>
						{userRole === ROLE.GUEST
							? (
								<div className={style.error_message}>Войдите в свой аккаунт, что бы иметь возможность забронировать
									номер</div>
							)
							: (
								<button className={style.rent_button} onClick={bookedRoom}>Забронировать</button>
							)}
					</div>
				</div>
			) : (
				<Loader />
			)}
			<Link to="/">
				<button className={style.main_page_button}>На главную</button>
			</Link>
		</>
	)
}
