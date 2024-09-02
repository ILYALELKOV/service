import style from './userBookedRoomsCard.module.css'

export const UserBookedRoomsCard = ({ img, name, size, amenities }) => {

	const onDeleteBooked = () => {
		console.log('DELETE ROOM')
	}

	return (
		<div className={style.room_container}>
			<div>
				<img src={img} alt="комната" className={style.room_image} />
			</div>
			<div className={style.room_description}>
				<h3>{name}</h3>
				<ul className={style.amenities}>
					{amenities.map((item) => (
						<li className={style.description_amenities}>{item}</li>
					))}
				</ul>
				<h3>{size}</h3>
				<button onClick={onDeleteBooked} className={style.room_description_button}>Отменить бронь</button>
			</div>
		</div>
	)
}
